// src/card-deck/SexualWellnessDemo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import CardDeck from "./CardDeck";
import Card from "./Card";
import { SAMPLE_CARDS } from "./sampleCards";
import DOMPurify from "dompurify";
import type { GenericCard } from "./types";

const SEXUAL_SAMPLES: GenericCard[] = [
  // non-explicit, suggestive / wellness friendly examples
  {
    id: "sw-1",
    title: "Consent Check",
    subtitle: "Communication prompt",
    body: "Ask your partner: 'Is this comfortable for you right now?'",
    tags: ["consent"],
    sensitive: true,
    genericFace: { kind: "media", media: { type: "image", src: "https://picsum.photos/420/240?sex1", alt: "calm" } },
  },
  {
    id: "sw-2",
    title: "Sensate Focus",
    body: "Take 60 seconds to explore touch without pressure or goal.",
    tags: ["mindful"],
    sensitive: true,
    genericFace: { kind: "html", html: "<div style='text-align:center'><strong>Tip</strong><p>Breathe slowly together.</p></div>" },
  },
  {
    id: "sw-3",
    title: "Playful dare",
    body: "Give a sincere compliment and hold eye contact for 10 seconds.",
    tags: ["playful"],
    sensitive: false,
    genericFace: { kind: "media", media: { type: "gif", src: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", alt: "smile" } },
  },
];

const meta: Meta<typeof CardDeck> = {
  title: "CardDeck/Demos/SexualWellnessDemo",
  component: CardDeck,
  parameters: { controls: { hideNoControlsWarning: true } },
};
export default meta;
type Story = StoryObj<typeof CardDeck>;

export const App: Story = {
  render: (args) => {
    const [allowSensitive, setAllowSensitive] = useState(false);
    const merged = [...SEXUAL_SAMPLES, ...SAMPLE_CARDS].map((c) => ({ ...c }));

    const initial = allowSensitive ? merged : merged.filter((c) => !c.sensitive);
    return (
      <div style={{ display: "grid", gap: 20 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Kreeda — Sexual Wellness Demo</h2>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="checkbox" checked={allowSensitive} onChange={(e) => setAllowSensitive(e.target.checked)} />
              <span style={{ color: "#6b7280" }}>Show sensitive prompts</span>
            </label>
          </div>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 20 }}>
          <div>
            <CardDeck {...args} initialCards={initial} />
          </div>

          <aside style={{ width: 420 }}>
            <h4 style={{ marginTop: 0 }}>Example Card Preview</h4>
            <p className="kreeda-small">Click any card in the deck to reveal it in the deck pane. Sensitive cards are marked.</p>

            {/* preview top of deck or first card */}
            <div style={{ marginTop: 10 }}>
              <Card card={initial[0] ?? SAMPLE_CARDS[0]} sanitizeHtml={(html) => DOMPurify.sanitize(html)} />
            </div>
          </aside>
        </section>
      </div>
    );
  },
};