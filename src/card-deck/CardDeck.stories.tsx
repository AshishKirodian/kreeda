// src/card-deck/CardDeck.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import CardDeck from "./CardDeck";
import type { GenericCard } from "./types";

// small sample deck
const SAMPLE_CARDS: GenericCard[] = [
  {
    id: "s-1",
    title: "Question",
    body: "Name a hobby you want to try together.",
    genericFace: { kind: "media", media: { type: "image", src: "https://picsum.photos/320/200?1", alt: "img1" } },
  },
  {
    id: "s-2",
    title: "Prompt",
    body: "Share a childhood memory.",
    genericFace: { kind: "media", media: { type: "image", src: "https://picsum.photos/320/200?2", alt: "img2" } },
  },
  {
    id: "s-3",
    title: "Tip",
    body: "Try a short breathing exercise.",
    genericFace: { kind: "html", html: `<div style="text-align:center"><strong>Breathe in</strong></div>` },
  },
];

const meta: Meta<typeof CardDeck> = {
  title: "CardDeck/Components/Deck",
  component: CardDeck,
  args: {
    initialCards: SAMPLE_CARDS,
  },
};
export default meta;
type Story = StoryObj<typeof CardDeck>;

export const Default: Story = {};

export const WithPenaltyHandler: Story = {
  args: {
    initialCards: SAMPLE_CARDS,
    onPenalty: async (revealed) => {
      // story-level mock: return a penalty card after a short delay
      await new Promise((r) => setTimeout(r, 350));
      return {
        id: `pen-${Date.now()}`,
        title: "Penalty Drawn",
        body: `Penalty for card: ${revealed.title ?? revealed.body ?? revealed.id}`,
        genericFace: { kind: "media", media: { type: "image", src: "https://picsum.photos/200/140?random=5", alt: "penalty" } },
      } as GenericCard;
    },
  },
};