import React from "react";
import { useCardDeck } from "./useCardDeck";
import { SAMPLE_CARDS } from "./sampleCards";
import { Card } from "./Card";

/**
 * Minimal demo component:
 * - initialCards?: defaults to SAMPLE_CARDS
 * - includeAdult?: boolean
 */
export const CardDeck: React.FC<{ initialCards?: any; includeAdult?: boolean }> = ({
  initialCards = SAMPLE_CARDS,
  includeAdult = false
}) => {
  const {
    deck,
    top,
    history,
    draw,
    discardTop,
    shuffle,
    reset,
    peek
  } = useCardDeck(initialCards, { includeAdult });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => shuffle()} type="button">Shuffle</button>
        <button onClick={() => reset()} type="button" style={{ marginLeft: 8 }}>Reset</button>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        <div>
          <h4>Top of deck</h4>
          {top ? <Card card={top} onReveal={() => draw()} /> : <div>No cards left</div>}
          <div style={{ marginTop: 8 }}>
            <button onClick={() => draw()} type="button">Draw</button>
            <button onClick={() => discardTop()} type="button" style={{ marginLeft: 8 }}>Discard</button>
          </div>
        </div>

        <div>
          <h4>Peek (next 3)</h4>
          <div style={{ display: "grid", gap: 8 }}>
            {peek(3).map((c:any) => (
              <div key={c.id} style={{ border: "1px dashed #ccc", padding: 8, borderRadius: 6 }}>
                <strong>{c.title}</strong>
                <div style={{ fontSize: 12, color: "#666" }}>{c.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4>History</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {history.map((h:any) => (
              <div key={h.id} style={{ borderBottom: "1px solid #eee", paddingBottom: 6 }}>
                <strong>{h.title}</strong>
                <div style={{ fontSize: 12 }}>{h.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeck;
