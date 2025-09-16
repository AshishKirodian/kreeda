import React from "react";
import { WellnessCard } from "./types";

type Props = {
  card: WellnessCard;
  onReveal?: () => void;
};

export const Card: React.FC<Props> = ({ card, onReveal }): React.ReactElement => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        width: "320px",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "18px" }}>{card.title}</h3>

      <p style={{ marginTop: "8px", marginBottom: "8px" }}>{card.description}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <small style={{ color: "#666" }}>{card.category ?? "general"}</small>

        <button onClick={onReveal} type="button">
          Reveal
        </button>
      </div>
    </div>
  );
};

export default Card;
