import React, { useMemo, useState } from "react";
import type { WellnessCard } from "./types";

/**
 * Backwards-compatible Card component upgraded to a flip card.
 * - Front = content (title + description) — same as before.
 * - Back = generic face (image | html) or custom render via renderGenericFace prop.
 *
 * Props:
 *  - card: WellnessCard (may include optional `genericFace`)
 *  - onReveal?: () => void  (keeps old API)
 *  - renderGenericFace?: (genericFace) => React.ReactNode  // to override back rendering
 *  - initiallyFlipped?: boolean
 *  - className?: string
 */

type Props = {
  card: WellnessCard;
  onReveal?: () => void;
  renderGenericFace?: (genericFace: WellnessCard["genericFace"] | undefined) => React.ReactNode;
  initiallyFlipped?: boolean;
  className?: string;
};

export const Card: React.FC<Props> = ({
  card,
  onReveal,
  renderGenericFace,
  initiallyFlipped = false,
  className = "",
}) => {
  const [flipped, setFlipped] = useState<boolean>(initiallyFlipped);

  const toggle = (ev?: React.SyntheticEvent) => {
    if (ev) ev.stopPropagation();
    setFlipped((s) => !s);
    // maintain old callback name for backwards compatibility (onReveal) — call only when revealing the back
    if (!flipped) onReveal?.();
  };

  // default generic face renderer (image | html)
  const genericFaceNode = useMemo<React.ReactNode>(() => {
    const gf = (card as any).genericFace as WellnessCard["genericFace"] | undefined;
    if (!gf) return null;

    if (renderGenericFace) return renderGenericFace(gf);

    // If gf has a 'type' discriminator (recommended)
    if ((gf as any).type) {
      if ((gf as any).type === "image") {
        const src = (gf as any).src as string;
        const alt = (gf as any).alt ?? card.title ?? "card image";
        return (
          <img
            src={src}
            alt={alt}
            style={{ maxWidth: "100%", maxHeight: "100%", display: "block", objectFit: "contain" }}
            loading="lazy"
          />
        );
      }

      if ((gf as any).type === "html") {
        const raw = (gf as any).html as string;
        // IMPORTANT: we do not sanitize here automatically. Consumers should pass already-sanitized HTML
        // or override renderGenericFace. If you want, hook in DOMPurify in your app:
        // sanitizeHtml ? sanitized = DOMPurify.sanitize(raw) : raw
        return <div dangerouslySetInnerHTML={{ __html: raw }} />;
      }
    }

    // Fallback: if genericFace is a string, treat as image url
    if (typeof gf === "string") {
      return <img src={gf} alt={card.title ?? "card image"} style={{ maxWidth: "100%" }} loading="lazy" />;
    }

    // if gf is an object with src
    if ((gf as any).src) {
      return <img src={(gf as any).src} alt={(gf as any).alt ?? card.title} style={{ maxWidth: "100%" }} loading="lazy" />;
    }

    return null;
  }, [card, renderGenericFace]);

  return (
    <div
      className={`kreeda-card ${className}`}
      style={{ perspective: 1000, width: 320, userSelect: "none" }}
    >
      <div
        className="kreeda-card-inner"
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
        style={{
          cursor: "pointer",
          transformStyle: "preserve-3d",
          transition: "transform 320ms",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="kreeda-card-front"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 12,
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ margin: 0, fontSize: 18 }}>{card.title}</h3>
          <p style={{ marginTop: 8, marginBottom: 8 }}>{card.description}</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <small style={{ color: "#666" }}>{card.category ?? "general"}</small>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
              aria-label="Reveal generic face"
            >
              Reveal
            </button>
          </div>
        </div>

        {/* BACK */}
        <div
          className="kreeda-card-back"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 12,
            background: "#f8f8f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "auto",
          }}
        >
          {genericFaceNode ?? (
            <div style={{ color: "#777", textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{card.title}</div>
              <div style={{ fontSize: 12 }}>No generic face</div>
              <div style={{ marginTop: 8 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                  type="button"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Respect prefers-reduced-motion */}
      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            .kreeda-card-inner { transition: none !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Card;
