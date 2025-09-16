// src/card-deck/types.ts
export type CardId = string;

export type Media = {
  type: "image" | "gif" | "video" | "svg" | "other";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

/**
 * Generic face content used for the back (or "generic" face).
 * - "media" covers images/gifs/videos/etc via Media.type
 * - "gif" is an optional explicit branch if you want gifs to be semantically different
 */
export type GenericFace =
  | { kind: "media"; media: Media }
  | { kind: "html"; html: string }
  | { kind: "node"; node: unknown }
  | { kind: "gif"; media: Media } // optional explicit gif branch
  | { kind: "none" };

export type GenericCard = {
  id: CardId;
  title?: string;
  subtitle?: string;
  body?: string; // textual content
  tags?: string[];
  sensitive?: boolean;
  genericFace?: GenericFace | null;
  meta?: Record<string, unknown>;
};

// Backward alias
export type WellnessCard = GenericCard;