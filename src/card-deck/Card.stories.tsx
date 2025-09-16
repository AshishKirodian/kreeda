import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { SAMPLE_CARDS } from "./sampleCards";

const meta: Meta<typeof Card> = {
  title: "CardDeck/Card",
  component: Card,
  args: {
    card: SAMPLE_CARDS[0],
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
