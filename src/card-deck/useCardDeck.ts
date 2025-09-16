import { useCallback, useMemo, useState } from "react";
import { WellnessCard } from "./types";

export type DeckOptions = {
  seed?: number;
  includeAdult?: boolean;
};

function defaultShuffle<T>(arr: T[], rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useCardDeck(initialCards: WellnessCard[], opts?: DeckOptions) {
  const optsSafe = { includeAdult: false, ...opts };

  const initialFiltered = useMemo(
    () => initialCards.filter(c => (optsSafe.includeAdult ? true : !c.adultOnly)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialCards, optsSafe.includeAdult]
  );

  const [deck, setDeck] = useState<WellnessCard[]>(() => defaultShuffle(initialFiltered));
  const [discard, setDiscard] = useState<WellnessCard[]>([]);
  const [history, setHistory] = useState<WellnessCard[]>([]);

  const top = useMemo(() => deck[0] ?? null, [deck]);

  const draw = useCallback((): WellnessCard | null => {
    if (deck.length === 0) return null;
    const [card, ...rest] = deck;
    setDeck(rest);
    setHistory(h => [card, ...h]);
    return card;
  }, [deck]);

  const reveal = useCallback((id: string): WellnessCard | null => {
    const idx = deck.findIndex(c => c.id === id);
    if (idx === -1) return null;
    const card = deck[idx];
    setDeck(d => {
      const copy = d.slice();
      copy.splice(idx, 1);
      return copy;
    });
    setHistory(h => [card, ...h]);
    return card;
  }, [deck]);

  const discardTop = useCallback((): WellnessCard | null => {
    if (deck.length === 0) return null;
    const [card, ...rest] = deck;
    setDeck(rest);
    setDiscard(d => [card, ...d]);
    return card;
  }, [deck]);

  const shuffle = useCallback((seed?: number) => {
    let rng = Math.random;
    if (typeof seed === "number") {
      let s = seed >>> 0;
      rng = () => {
        s = (1664525 * s + 1013904223) % 4294967296;
        return s / 4294967296;
      };
    }
    setDeck(d => defaultShuffle(d, rng));
  }, []);

  const reset = useCallback(() => {
    setDeck(defaultShuffle(initialFiltered));
    setDiscard([]);
    setHistory([]);
  }, [initialFiltered]);

  const filter = useCallback((fn: (c: WellnessCard) => boolean) => {
    setDeck(d => d.filter(fn));
    setDiscard(d => d.filter(fn));
    setHistory(h => h.filter(fn));
  }, []);

  const peek = useCallback((n = 1) => deck.slice(0, n), [deck]);

  return {
    deck,
    top,
    discard,
    history,
    draw,
    reveal,
    discardTop,
    shuffle,
    reset,
    filter,
    peek
  } as const;
}
