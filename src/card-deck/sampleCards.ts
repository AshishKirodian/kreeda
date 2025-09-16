// src/card-deck/sampleCards.ts
import type { GenericCard } from "./types";

export const SAMPLE_CARDS: GenericCard[] = [
  {
    id: "c1",
    title: "Question",
    body: "What is one hobby you’d like to try?",
    tags: ["conversation"],
    genericFace: {
      kind: "media",
      media: { type: "image", src: "https://picsum.photos/400/240?random=1", alt: "random image" },
    },
  },
  {
    id: "c2",
    title: "Challenge",
    body: "Do 5 pushups now!",
    tags: ["fun"],
    genericFace: {
      kind: "media",
      media: { type: "gif", src: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", alt: "pushups gif" },
    },
  },
  {
    id: "c3",
    title: "Prompt",
    body: "Share a funny school memory.",
    tags: ["memory"],
    genericFace: {
      kind: "gif", // explicit gif branch
      media: { type: "gif", src: "https://media.giphy.com/media/26FPOztY0CYf2gSOw/giphy.gif", alt: "funny gif" },
    },
  },
  {
    id: "c4",
    title: "Tip",
    body: "Take a deep breath.",
    tags: ["wellness"],
    genericFace: {
      kind: "html",
      html: `<div style="text-align:center"><h3>Relax</h3><p>Breathe in 4-4-8</p></div>`,
    },
  },
  {
    id: "c5",
    title: "Video",
    body: "Watch this flower bloom.",
    tags: ["calm"],
    genericFace: {
      kind: "media",
      media: { type: "video", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", alt: "flower video" },
    },
  },
  {
    id: "c6",
    title: "Wildcard",
    body: "Invent a new rule for the game.",
    tags: ["wild"],
    genericFace: { kind: "none" },
  },
];