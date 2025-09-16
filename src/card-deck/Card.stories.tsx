// src/card-deck/Card.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DOMPurify from "dompurify";
import Card from "./Card";
import type { GenericCard } from "./types";

const SAMPLE_CARD: GenericCard = {
  id: "c-1",
  title: "Conversation Starter",
  subtitle: "Small prompt",
  body: "Share one thing you appreciate about your partner today.",
  tags: ["communication"],
  genericFace: { kind: "media", media: { type: "image", src: "https://picsum.photos/400/260", alt: "scenery" } },
};

const meta: Meta<typeof Card> = {
  title: "CardDeck/Components/Card",
  component: Card,
  args: {
    card: SAMPLE_CARD,
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

/**
 * Simple arg-only story for an image back.
 */
export const WithImageBack: Story = {
  args: {
    card: {
      ...SAMPLE_CARD,
      genericFace: { kind: "media", media: { type: "image", src: "https://picsum.photos/420/280?grayscale", alt: "grayscale" } },
    },
  },
};

/**
 * Story that needs to pass a function prop (sanitizeHtml).
 * We use `render` so we can pass the function directly and satisfy TypeScript.
 */
export const WithHtmlBack_Sanitized: Story = {
  args: {
    card: {
      ...SAMPLE_CARD,
      genericFace: {
        kind: "html",
        html: `<div style="text-align:center"><h3>Tip</h3><p>Try a 4-4-8 breathing exercise.</p><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="gif" /></div>`,
      },
    },
  },
  render: (args) => {
    // args has the card prop (from args above). Pass sanitizeHtml explicitly.
    return <Card {...args} sanitizeHtml={(html: string) => DOMPurify.sanitize(html)} />;
  },
};

/**
 * Story that needs a custom renderGenericFace function.
 * We type the incoming 'face' param to avoid implicit any.
 */
export const CustomRenderBack: Story = {
  args: {
    card: {
      ...SAMPLE_CARD,
      genericFace: { kind: "node", node: { message: "Custom node" } },
    },
  },
  render: (args) => {
    const renderGenericFace = (face: GenericCard["genericFace"]) => {
      if (!face) return null;
      if (face.kind === "node") {
        return (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700 }}>Custom Render</div>
            <pre style={{ fontSize: 12 }}>{JSON.stringify((face as any).node, null, 2)}</pre>
          </div>
        );
      }
      return null;
    };

    return <Card {...args} renderGenericFace={renderGenericFace} />;
  },
};