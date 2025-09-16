// src/card-deck/CardDeck.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { CardDeck } from "./CardDeck";
import { SAMPLE_CARDS } from "./sampleCards";

const meta: Meta<typeof CardDeck> = {
  title: "CardDeck/Deck", // <<-- different from Card stories
  component: CardDeck,
  args: {
    initialCards: SAMPLE_CARDS,
    includeAdult: false,
  },
};
export default meta;

type Story = StoryObj<typeof CardDeck>;

export const Default: Story = {};

export const WithAdultCards: Story = {
  args: {
    includeAdult: true,
  },
};
