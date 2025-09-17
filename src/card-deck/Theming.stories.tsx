// src/card-deck/Theming.stories.tsx
import React from "react";
import type { Meta } from "@storybook/react";
import Card from "./Card";
import { SAMPLE_CARDS } from "./sampleCards";

const meta: Meta = {
  title: "CardDeck/Docs/Theming",
  parameters: { controls: { hideNoControlsWarning: true } },
};
export default meta;

export const Tokens = () => {
  return (
    <div style={{ display: "grid", gap: 20 }}>
      <div>
        <h3>Default</h3>
        <Card card={SAMPLE_CARDS[0]} />
      </div>

      <div>
        <h3>Custom CSS variables (inline)</h3>
        <div style={{ ['--kreeda-primary' as any]: '#1db954', ['--kreeda-card-width' as any]: '380px', padding: 10 }}>
          <Card card={SAMPLE_CARDS[0]} />
        </div>
      </div>

      <div>
        <h3>Contain vs Cover</h3>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ width: 320 }}>
            <h4>Cover (default)</h4>
            <Card card={{ ...SAMPLE_CARDS[0], genericFace: { kind: 'media', media: { type: 'image', src: 'https://picsum.photos/640/360?cover', alt: 'cover' } } }} />
          </div>
          <div style={{ width: 320 }}>
            <h4>Contain</h4>
            <Card card={{ ...SAMPLE_CARDS[0], genericFace: { kind: 'media', media: { type: 'image', src: 'https://picsum.photos/360/640?contain', alt: 'contain' } } }} renderGenericFace={(face:any, card:any) => {
              if (!face || face.kind !== 'media') return null;
              return (
                <div className="kreeda-media-wrap kreeda-aspect-4x3">
                  <img className="kreeda-media kreeda-media-contain" src={face.media.src} alt={face.media.alt ?? ''} />
                </div>
              );
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};