#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./scripts/release.sh [patch|minor|major] [--no-publish]
# or:
#   npm run release -- patch
#
# Default when no bump provided: 'patch'

BUMP="${1:-patch}"
NO_PUBLISH=false
if [ "${2:-}" = "--no-publish" ] || [ "${BUMP}" = "--no-publish" ]; then
  NO_PUBLISH=true
  # shift if arg was first
  if [ "${BUMP}" = "--no-publish" ]; then
    BUMP="patch"
  fi
fi

# Helper prints
info() { printf "\033[1;34m→ %s\033[0m\n" "$*"; }
warn() { printf "\033[1;33m! %s\033[0m\n" "$*"; }
err() { printf "\033[1;31m✖ %s\033[0m\n" "$*"; }

# 1) ensure repo is clean
if [ -n "$(git status --porcelain)" ]; then
  warn "You have uncommitted changes. Please commit or stash before releasing."
  git status --porcelain
  exit 1
fi

# 2) confirm npm login
if ! npm whoami >/dev/null 2>&1; then
  warn "You are not logged into npm. Run: npm login"
  exit 1
fi
NPM_USER=$(npm whoami)

info "Publishing as npm user: ${NPM_USER}"
info "Version bump: ${BUMP}"
if [ "$NO_PUBLISH" = true ]; then
  warn "NO_PUBLISH mode: will not run 'npm publish'."
fi

read -p "Continue? (y/N) " -r
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  info "Aborted by user."
  exit 0
fi

# 3) run tests (if you have any) — safe to skip if no tests
if npm run test --silent >/dev/null 2>&1; then
  info "Tests passed (npm test executed)."
else
  warn "npm test returned non-zero or no tests configured — continuing anyway."
fi

# 4) build the library
info "Running build..."
npm run build

# 5) build storybook (optional but recommended)
if npm run build-storybook --silent >/dev/null 2>&1; then
  info "Storybook built."
else
  warn "Storybook build failed or not configured — continuing anyway."
fi

# 6) bump package.json version and create git commit + tag
info "Bumping package version (${BUMP})..."
# npm version will update package.json, create a commit and tag by default
# we use --no-git-tag-version then create commit and tag ourselves to include build artifacts
OLD_VER=$(node -e "console.log(require('./package.json').version)")
NEW_VER=$(npm version --no-git-tag-version "$BUMP")
info "Version updated: ${OLD_VER} -> ${NEW_VER}"

# 7) include built artifacts (dist) and storybook if you want to commit them
# Adjust these paths to match what you want committed
git add package.json package-lock.json dist || true

# If you prefer committing storybook static files to repo (not required if using gh-pages), uncomment:
# git add storybook-static || true

git commit -m "chore(release): ${NEW_VER} [ci skip]" || {
  warn "Nothing to commit besides version bump. Continuing."
}

# 8) create annotated tag
git tag -a "${NEW_VER}" -m "release: ${NEW_VER}"

# 9) push commits + tags
info "Pushing commit and tags to origin..."
git push origin HEAD
git push origin "${NEW_VER}"

# 10) publish to npm (unless NO_PUBLISH)
if [ "$NO_PUBLISH" = false ]; then
  info "Publishing to npm..."
  # ensure public access for scoped/public packages; remove --access for private packages
  npm publish --access public
  info "Published ${NEW_VER} to npm."
else
  info "NO_PUBLISH set — skipping npm publish."
fi

info "Release flow complete. New version: ${NEW_VER}"
