// src/card-deck/Welcome.stories.tsx
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import Card from "./Card";
import CardDeck from "./CardDeck";
import { SAMPLE_CARDS } from "./sampleCards";
import DOMPurify from "dompurify";

const meta: Meta = {
  title: "CardDeck/Docs/Welcome",
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: { description: { story: "A quick interactive tour of Kreeda's Card & Deck components." } },
  },
};

export default meta;

export const Guide = () => {
  const [sanitize, setSanitize] = useState(true);

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 20, maxWidth: 1200 }}>
      <h1 style={{ marginTop: 0 }}>Welcome — Kreeda CardDeck</h1>

      <h3>Step-by-step quick start</h3>
      <ol>
        <li>Open <strong>CardDeck → Components → Card</strong> to inspect single card variants and controls.</li>
        <li>Click <strong>Reveal</strong> (or press <kbd>Enter</kbd>/<kbd>Space</kbd>) to flip the card.</li>
        <li>Open <strong>CardDeck → Components → Deck</strong> to try <em>Draw</em>, <em>Accept</em> and <em>Penalty</em>.</li>
        <li>Open <strong>CardDeck → Interactive → TwoPlayerGame</strong> for the two-player demo.</li>
        <li>Use the top toolbar to switch themes and the viewport menu to test mobile/tablet layouts.</li>
      </ol>

      <h3 style={{ marginTop: 18 }}>Live examples</h3>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 320px" }}>
          <h4>Single Card</h4>
          <Card card={SAMPLE_CARDS[0]} />
          <p style={{ color: "#6b7280", fontSize: 13 }}>Try changing the "Card" story controls to mutate props live.</p>
        </div>

        <div style={{ flex: "1 1 360px" }}>
          <h4>Deck (Draw / Accept / Penalty)</h4>
          <CardDeck
            initialCards={SAMPLE_CARDS}
            onPenalty={async (revealed) => {
              // story-level mock penalty: return a card after short delay
              await new Promise((r) => setTimeout(r, 300));
              return {
                id: `pen-${Date.now()}`,
                title: "Penalty Card",
                body: `Penalty for: ${revealed.title ?? revealed.body ?? revealed.id}`,
                genericFace: { kind: "media", media: { type: "image", src: "https://picsum.photos/200/120", alt: "penalty" } },
              };
            }}
          />
        </div>
      </div>

      <h3 style={{ marginTop: 18 }}>Sanitize HTML faces</h3>
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input type="checkbox" checked={sanitize} onChange={() => setSanitize((s) => !s)} />
        <span style={{ color: "#374151" }}>Sanitize HTML before rendering</span>
      </label>
      <div style={{ marginTop: 10 }}>
        <Card
          card={SAMPLE_CARDS.find((c) => c.genericFace?.kind === "html") ?? SAMPLE_CARDS[0]}
          sanitizeHtml={sanitize ? (html) => DOMPurify.sanitize(html) : undefined}
        />
      </div>

      <h3 style={{ marginTop: 18 }}>Theming & Overrides</h3>
      <p style={{ color: "#6b7280" }}>
        Try the theme toolbar (top-right) to switch theme. To override in your app, set CSS variables (e.g.
        <code>--kreeda-primary</code>, <code>--kreeda-card-width</code>) in global CSS.
      </p>
      <pre style={{ background: "#fafafa", padding: 12 }}>
{`/* example (global CSS) */
:root {
  --kreeda-primary: #1db954;
  --kreeda-card-width: 380px;
}`}
      </pre>

      <h3 style={{ marginTop: 18 }}>Accessibility & responsiveness</h3>
      <ul>
        <li>Keyboard: use <kbd>Enter</kbd> / <kbd>Space</kbd> to flip cards.</li>
        <li>Use the Viewport addon to test mobile / tablet / landscape modes.</li>
        <li>Open the A11y panel to run automated accessibility checks.</li>
      </ul>
    </div>
  );
};