// src/card-deck/CardDeck.tsx
import React from "react";
import type { GenericCard } from "./types";
import { useCardDeck } from "./useCardDeck";
import Card from "./Card";

export const CardDeck: React.FC<{
  initialCards?: GenericCard[];
  includeSensitive?: boolean;
  onPenalty?: (revealed: GenericCard) => void | Promise<GenericCard | null | undefined>;
}> = ({ initialCards = [], includeSensitive = false, onPenalty }) => {
  const {
    deck,
    top,
    revealed,
    draw,
    accept,
    penalty,
    peek,
    history,
    discardTop,
    shuffle,
    reset,
  } = useCardDeck(initialCards, { includeSensitive });

  const handleDraw = () => {
    draw();
  };

  const handleAccept = () => {
    accept();
  };

  const handlePenalty = async () => {
    await penalty(onPenalty);
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => shuffle()} type="button">Shuffle</button>
        <button onClick={() => reset()} type="button" style={{ marginLeft: 8 }}>Reset</button>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        <div>
          <h4>Top of deck</h4>
          {top ? (
            // Show generic face by default: we want users to see generic side initially (so we show a card with title/body blank)
            <Card card={{ ...top, title: "", subtitle: "", body: "" }} />
          ) : (
            <div>No cards left</div>
          )}
          <div style={{ marginTop: 8 }}>
            <button onClick={handleDraw}>Draw</button>
            <button onClick={() => discardTop()} style={{ marginLeft: 8 }}>Discard</button>
          </div>
        </div>

        <div>
          <h4>Revealed</h4>
          {revealed ? (
            <>
              <Card card={revealed} />
              <div style={{ marginTop: 8 }}>
                <button onClick={handleAccept}>Accept</button>
                <button onClick={handlePenalty} style={{ marginLeft: 8 }}>Penalty</button>
              </div>
            </>
          ) : (
            <div>No revealed card</div>
          )}
        </div>

        <div>
          <h4>Peek (next 3)</h4>
          <div style={{ display: "grid", gap: 8 }}>
            {peek(3).map((c) => (
              <div key={c.id} style={{ border: "1px dashed #ccc", padding: 8, borderRadius: 6 }}>
                <strong>{c.title ?? "—"}</strong>
                <div style={{ fontSize: 12, color: "#666" }}>{c.subtitle ?? ""}</div>
              </div>
            ))}
          </div>

          <h4 style={{ marginTop: 16 }}>History</h4>
          <div style={{ maxHeight: 220, overflow: "auto", fontSize: 13 }}>
            {history.map((h, i) => (
              <div key={i} style={{ borderBottom: "1px solid #eee", paddingBottom: 6, marginBottom: 6 }}>
                <div style={{ color: "#444" }}>{h.action}</div>
                <div style={{ color: "#999", fontSize: 11 }}>{h.ts}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeck;