export type CardId = string;

export type CardCategory = "communication" | "education" | "consent" | "intimacy" | "wellness";

export type GenericFace =
  | { type: "image"; src: string; alt?: string }
  | { type: "html"; html: string };

export type WellnessCard = {
  id: string;
  title: string;
  description: string;
  category?: string;
  adultOnly?: boolean;
  tags?: string[];
  genericFace?: GenericFace | string | null;
};

