export type CardId = string;

export type CardCategory = "communication" | "education" | "consent" | "intimacy" | "wellness";

export type WellnessCard = {
  id: CardId;
  title: string;
  description: string; // short educational/prompt text (non-explicit)
  category?: CardCategory;
  adultOnly?: boolean;
  tags?: string[];
};
