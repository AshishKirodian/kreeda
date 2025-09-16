import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { SAMPLE_CARDS } from "./sampleCards";

const meta: Meta<typeof Card> = {
  title: "CardDeck/Card",
  component: Card,
  args: { card: SAMPLE_CARDS[0] },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const WithImageBack: Story = {
  args: {
    card: {
      ...SAMPLE_CARDS[0],
      genericFace: { type: "image", src: "https://picsum.photos/400/250", alt: "random" },
    },
  },
};
export const WithHtmlBack: Story = {
  args: {
    card: {
      ...SAMPLE_CARDS[0],
      genericFace: { type: "html", html: "<div style='text-align:center'><h3>Tip</h3><p>Take a deep breath</p></div>" },
    },
  },
};
