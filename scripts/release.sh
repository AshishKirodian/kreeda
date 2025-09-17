#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./scripts/release.sh [patch|minor|major] [--no-publish] [--no-storybook]
# or:
#   npm run release -- patch
#
# Default when no bump provided: 'patch'

BUMP="${1:-patch}"
NO_PUBLISH=false
NO_STORYBOOK=false

# accept flags in either position
for arg in "${@:2}"; do
  case "$arg" in
    --no-publish) NO_PUBLISH=true ;;
    --no-storybook) NO_STORYBOOK=true ;;
    *) ;;
  esac
done

# Helper prints
info() { printf "\033[1;34m→ %s\033[0m\n" "$*"; }
warn() { printf "\033[1;33m! %s\033[0m\n" "$*"; }
err() { printf "\033[1;31m✖ %s\033[0m\n" "$*"; }

# 0) sanity checks
if ! command -v node >/dev/null 2>&1; then
  err "node is not installed or not on PATH"
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  err "npm is not installed or not on PATH"
  exit 1
fi

# 1) ensure repo is clean
if [ -n "$(git status --porcelain)" ]; then
  warn "You have uncommitted changes. Please commit or stash before releasing."
  git status --porcelain
  exit 1
fi

# 2) confirm npm login (only if publishing)
if [ "$NO_PUBLISH" = false ]; then
  if ! npm whoami >/dev/null 2>&1; then
    warn "You are not logged into npm. Run: npm login"
    exit 1
  fi
  NPM_USER=$(npm whoami)
  info "Publishing as npm user: ${NPM_USER}"
fi

info "Version bump: ${BUMP}"
if [ "$NO_PUBLISH" = true ]; then
  warn "NO_PUBLISH mode: will not run 'npm publish'."
fi
if [ "$NO_STORYBOOK" = true ]; then
  warn "NO_STORYBOOK mode: will skip building & committing storybook-static."
fi

read -p "Continue? (y/N) " -r
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  info "Aborted by user."
  exit 0
fi

# 3) run tests (if configured)
if npm run test --silent >/dev/null 2>&1; then
  info "Tests passed (npm test executed)."
else
  warn "npm test returned non-zero or no tests configured — continuing anyway."
fi

# 4) build the library
info "Running build..."
npm run build

# 5) build storybook (optional)
if [ "$NO_STORYBOOK" = false ]; then
  info "Building Storybook static site..."
  # prefer build-storybook script; if missing, warn and continue
  if npm run build-storybook --silent >/dev/null 2>&1; then
    info "Storybook built into storybook-static/"
  else
    warn "Storybook build failed or 'build-storybook' not configured — continuing anyway."
  fi
fi

# 6) bump package.json version and create git commit + tag
info "Bumping package version (${BUMP})..."
OLD_VER=$(node -e "console.log(require('./package.json').version)")
# Use --no-git-tag-version to control commit & tag flow
NEW_VER=$(npm version --no-git-tag-version "$BUMP")
info "Version updated: ${OLD_VER} -> ${NEW_VER}"

# 7) include built artifacts (dist) and storybook if present
git add package.json package-lock.json dist || true

if [ "$NO_STORYBOOK" = false ]; then
  # only add storybook-static if the folder exists
  if [ -d "storybook-static" ]; then
    git add storybook-static || true
  else
    warn "storybook-static/ not found — nothing to add."
  fi
fi

# commit (if there are staged changes)
if git diff --cached --quiet; then
  warn "Nothing new to commit (no changes staged besides version bump). Continuing."
else
  git commit -m "chore(release): ${NEW_VER} [ci skip]" || {
    warn "Commit failed or nothing to commit. Continuing."
  }
fi

# 8) create annotated tag
git tag -a "${NEW_VER}" -m "release: ${NEW_VER}"

# 9) push commits + tags
info "Pushing commit and tags to origin..."
git push origin HEAD
git push origin "${NEW_VER}"

# 10) publish to npm (unless NO_PUBLISH)
if [ "$NO_PUBLISH" = false ]; then
  info "Publishing to npm..."
  # Ensure public access for scoped/public packages; remove --access for private packages
  npm publish --access public
  info "Published ${NEW_VER} to npm."
else
  info "NO_PUBLISH set — skipping npm publish."
fi

info "Release flow complete. New version: ${NEW_VER}"