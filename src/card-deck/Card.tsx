// src/card-deck/Card.tsx
import React, { useMemo, useState } from "react";
import type { GenericCard } from "./types";
import "./styles.css";

export type CardProps = {
  card: GenericCard;
  onReveal?: () => void;
  className?: string;
  initiallyFlipped?: boolean;
  sanitizeHtml?: (html: string) => string;
  renderGenericFace?: (face: GenericCard["genericFace"], card: GenericCard) => React.ReactNode;
};

export const Card: React.FC<CardProps> = ({
  card,
  onReveal,
  className = "",
  initiallyFlipped = false,
  sanitizeHtml,
  renderGenericFace,
}) => {
  const [flipped, setFlipped] = useState<boolean>(initiallyFlipped);

  const toggle = (ev?: React.SyntheticEvent) => {
    if (ev) ev.stopPropagation();
    setFlipped((s) => {
      const next = !s;
      if (!s) onReveal?.();
      return next;
    });
  };

  const genericNode = useMemo<React.ReactNode>(() => {
    const gf = card.genericFace;
    if (!gf) return null;
    if (renderGenericFace) return renderGenericFace(gf, card);

    // handle media / gif / video etc.
    if ((gf as any).kind === "media" || (gf as any).kind === "gif") {
      const media = (gf as any).media;
      if (!media) return null;
      if (media.type === "video") {
        return <video controls className="kreeda-media" src={media.src} />;
      }
      return <img className="kreeda-media" src={media.src} alt={media.alt ?? card.title ?? ""} loading={media.loading ?? "lazy"} />;
    }

    if (gf.kind === "html") {
      const raw = gf.html ?? "";
      const safe = sanitizeHtml ? sanitizeHtml(raw) : raw;
      return <div className="kreeda-html-face" dangerouslySetInnerHTML={{ __html: safe }} />;
    }

    if (gf.kind === "node") {
      return (gf as any).node as React.ReactNode;
    }

    return null;
  }, [card, renderGenericFace, sanitizeHtml]);

  return (
    <div className={`kreeda-root ${className}`} style={{ maxWidth: "100%" }}>
      <div
        className="kreeda-card"
        style={{ maxWidth: "var(--kreeda-card-width)" }}
      >
        <div
          className="kreeda-card-inner"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
          aria-label={`Card ${card.title ?? ""} (press Enter or Space to flip)`}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle(e);
            }
          }}
        >
          {/* Front */}
          <div className="kreeda-card-face kreeda-card-front">
            {card.title && <div className="kreeda-card-title">{card.title}</div>}
            {card.subtitle && <div className="kreeda-card-subtitle">{card.subtitle}</div>}
            {card.body && <div className="kreeda-card-body">{card.body}</div>}

            <div className="kreeda-card-meta">
              <div className="kreeda-tag">{(card.tags || []).slice(0, 2).join(", ")}</div>
              <button
                className="kreeda-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle();
                }}
                aria-label="Reveal"
                type="button"
              >
                Reveal
              </button>
            </div>
          </div>

          {/* Back */}
          <div className="kreeda-card-face kreeda-card-back">
            {genericNode ?? (
              <div style={{ textAlign: "center", color: "var(--kreeda-muted)" }}>
                <div style={{ fontWeight: 700 }}>{card.title}</div>
                <div style={{ marginTop: 8 }}>No generic face</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;