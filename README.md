# Kreeda

Kreeda — a small, behavior-first React UI library for **card-deck style games**.  
This library focuses on **game behaviour** (draw, reveal, accept, penalty) while providing simple, themeable UI primitives.  
You can use it to build your own games — from learning flashcards to fun two-player prompts.

[![Storybook](https://img.shields.io/badge/storybook-online-ff4785?logo=storybook)](https://ashishkirodian.github.io/kreeda/)

---

## Table of contents

- [Install](#install)
- [Quick start](#quick-start)
- [API — Components & Hook](#api)
  - [`Card`](#card-props)
  - [`CardDeck`](#carddeck-props)
  - [`useCardDeck`](#usecarddeck-hook)
  - [Types](#types)
- [Theming & CSS overrides](#theming--css-overrides)
- [Storybook & Demos](#storybook--demos)
- [Publishing & Release](#publishing--release)
- [Troubleshooting](#troubleshooting--tips)
- [Contributing](#contributing--development)
- [License](#license)

---

## Install

```bash
# install from npm
npm install kreeda

# or with yarn
yarn add kreeda
```

> `react` and `react-dom` are peer dependencies. Make sure they are installed in your app.

---

## Quick start

Minimal example:

```tsx
// App.tsx
import React from "react";
import { CardDeck } from "kreeda";

// import base styles once
import "kreeda/dist/styles.css";

export default function App() {
  const cards = [
    {
      id: "c1",
      title: "Say something kind",
      body: "Tell your partner one thing you love about them.",
      genericFace: {
        kind: "media",
        media: { type: "image", src: "https://picsum.photos/400/260", alt: "scenery" }
      }
    },
    {
      id: "c2",
      title: "Breathe",
      body: "Try a 4-4-8 breathing exercise together.",
      genericFace: {
        kind: "html",
        html: `<div style="text-align:center"><p>Inhale 4s, hold 4s, exhale 8s</p></div>`
      }
    }
  ];

  return <CardDeck initialCards={cards} />;
}
```

---

## API

### `Card` props

```ts
type CardProps = {
  card: GenericCard;
  onReveal?: () => void;
  className?: string;
  initiallyFlipped?: boolean;
  sanitizeHtml?: (html: string) => string;
  renderGenericFace?: (
    face: GenericCard["genericFace"],
    card: GenericCard
  ) => React.ReactNode;
};
```

- `sanitizeHtml` → optional sanitizer when rendering `genericFace.kind = "html"`.
- `renderGenericFace` → lets you override how the generic/back face is drawn.

---

### `CardDeck` props

```ts
type CardDeckProps = {
  initialCards?: GenericCard[];
  includeSensitive?: boolean;
  onPenalty?: (
    revealed: GenericCard
  ) => void | Promise<GenericCard | null | undefined>;
  className?: string;
};
```

- **Accept flow**: puts revealed card back at bottom.
- **Penalty flow**: calls `onPenalty`.  
  You can return `void`, `null`, or a `GenericCard`. `void` is normalized to `null`.

---

### `useCardDeck` hook

```ts
const {
  deck,
  revealed,
  history,
  draw,
  reveal,
  accept,
  penalty,
  discardTop,
  shuffle,
  reset,
  peek
} = useCardDeck(initialCards, options);
```

---

### Types

```ts
export type Media = {
  type: "image" | "gif" | "video" | "svg" | "other";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

export type GenericFace =
  | { kind: "media"; media: Media }
  | { kind: "html"; html: string }
  | { kind: "node"; node: unknown }
  | { kind: "gif"; media: Media }
  | { kind: "none" };

export type GenericCard = {
  id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  tags?: string[];
  sensitive?: boolean;
  genericFace?: GenericFace | null;
  meta?: Record<string, unknown>;
};
```

---

## Theming & CSS overrides

Kreeda ships minimal CSS with variables that you can override.

### Import CSS

```tsx
// index.tsx
import "kreeda/dist/styles.css";
```

### Override with variables

```css
:root {
  --kreeda-primary: #1db954;
  --kreeda-primary-contrast: #fff;
  --kreeda-card-width: 380px;
  --kreeda-radius: 16px;
}
```

### Scope to a theme

```css
.app--dark {
  --kreeda-surface: #0f172a;
  --kreeda-primary: #ff5a5f;
}
```

### Inline override

```tsx
<div style={{ ['--kreeda-primary' as any]: '#3b82f6' }}>
  <CardDeck initialCards={cards} />
</div>
```

---

## Storybook & Demos

Run locally:

```bash
npm run storybook
```

Build static:

```bash
npm run build-storybook
```

👉 [Live Storybook](https://ashishkirodian.github.io/kreeda/)  

Contains:
- **Welcome** → guided usage
- **Components** → `Card`, `CardDeck`
- **Demos** → e.g. Sexual wellness two-player demo (shows sensitive content handling)

---

## Publishing & Release

We ship a helper script `./scripts/release.sh`:

```bash
# default patch bump + publish
./scripts/release.sh

# minor bump
./scripts/release.sh minor

# skip npm publish
./scripts/release.sh patch --no-publish

# skip storybook build
./scripts/release.sh patch --no-storybook
```

It:
1. checks repo state,
2. builds library,
3. builds storybook (optional),
4. bumps version,
5. commits + tags,
6. pushes to git,
7. publishes to npm.

---

## Troubleshooting & tips

- **Chunk size warnings** → Already handled in `.storybook/main.ts` with `chunkSizeWarningLimit`.
- **Duplicate story id** → Ensure each story file uses a unique `title`.
- **Missing sanitizeHtml** → Provide DOMPurify or sanitize manually if you use `genericFace.kind = "html"`.
- **Penalty handler** → Safe to return nothing; hook treats it as `null`.

---

## Contributing & development

```bash
# install deps
npm install

# run storybook
npm run storybook

# build lib
npm run build
```

- Follow conventional commits (`feat:`, `fix:`, `chore:`).
- Story files should default export `meta` and ensure unique titles.

---

## License

MIT © 2025 [Ashish Kirodian](https://github.com/AshishKirodian)
