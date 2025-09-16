// src/card-deck/useCardDeck.ts
import { useCallback, useMemo, useState } from "react";
import type { GenericCard } from "./types";

export type DeckOptions = {
  seed?: number;
  includeSensitive?: boolean;
  rng?: () => number;
};

function defaultShuffle<T>(arr: T[], rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Basic deck hook:
 * - deck: available stack (top = index 0)
 * - revealed: last revealed card (if any)
 * - draw(): remove top and return it (and set as revealed)
 * - accept(): put revealed to bottom (consumer can call)
 * - penalty(handler): consumer-defined penalty flow; hook will clear revealed and record history
 */
export function useCardDeck(initialCards: GenericCard[], opts?: DeckOptions) {
  const optsSafe = { includeSensitive: false, ...opts } as DeckOptions;

  const initialFiltered = useMemo(
    () =>
      initialCards.filter((c) =>
        optsSafe.includeSensitive ? true : !c.sensitive
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialCards, optsSafe.includeSensitive]
  );

  const [deck, setDeck] = useState<GenericCard[]>(() =>
    defaultShuffle(initialFiltered, optsSafe.rng)
  );
  const [discard, setDiscard] = useState<GenericCard[]>([]);
  const [history, setHistory] = useState<
    { card: GenericCard; action: string; ts: string }[]
  >([]);
  const [revealed, setRevealed] = useState<GenericCard | null>(null);

  const top = useMemo(() => deck[0] ?? null, [deck]);

  const record = useCallback((card: GenericCard, action: string) => {
    setHistory((h) => [{ card, action, ts: new Date().toISOString() }, ...h]);
  }, []);

  const draw = useCallback((): GenericCard | null => {
    if (revealed) return revealed; // don't draw if something already revealed
    if (deck.length === 0) return null;
    const [c, ...rest] = deck;
    setDeck(rest);
    setRevealed(c);
    record(c, "draw");
    return c;
  }, [deck, revealed, record]);

  const reveal = useCallback(
    (id: string): GenericCard | null => {
      const idx = deck.findIndex((d) => d.id === id);
      if (idx === -1) return null;
      const card = deck[idx];
      setDeck((d) => {
        const copy = d.slice();
        copy.splice(idx, 1);
        return copy;
      });
      setRevealed(card);
      record(card, "reveal");
      return card;
    },
    [deck, record]
  );

  const accept = useCallback(() => {
    if (!revealed) return;
    setDeck((d) => [...d, revealed]);
    record(revealed, "accept");
    setRevealed(null);
  }, [revealed, record]);

  /**
   * penaltyHandler: optional consumer-supplied function which receives the revealed card and
   * can implement any behavior (modal, server call). If handler returns a GenericCard (or Promise)
   * the hook will record it as 'penalty-drawn' in history. The hook itself does not mutate the deck
   * besides clearing the revealed card.
   */
  const penalty = useCallback(
    async (
      penaltyHandler?: (
        revealed: GenericCard
      ) => void | Promise<GenericCard | null | undefined>
    ) => {
      if (!revealed) return null;
      record(revealed, "penalty");

      let penaltyCard: GenericCard | null | undefined = null;

      if (penaltyHandler) {
        try {
          // capture the raw result which may be void | GenericCard | null | undefined
          const result = await penaltyHandler(revealed);
          // normalize undefined (void) -> null, and preserve GenericCard | null
          penaltyCard =
            result === undefined
              ? null
              : (result as GenericCard | null | undefined);
        } catch (err) {
          // swallow or optionally record an error in history
          // recordError?.(err);
          penaltyCard = null;
        }
      }

      if (penaltyCard) {
        record(penaltyCard, "penalty-drawn");
      }

      setRevealed(null);
      return penaltyCard ?? null;
    },
    [revealed, record]
  );

  const discardTop = useCallback(() => {
    if (deck.length === 0) return null;
    const [c, ...rest] = deck;
    setDeck(rest);
    setDiscard((d) => [c, ...d]);
    record(c, "discard");
    return c;
  }, [deck, record]);

  const shuffle = useCallback(
    (seed?: number) => {
      let rng = optsSafe.rng ?? Math.random;
      if (typeof seed === "number") {
        let s = seed >>> 0;
        rng = () => {
          s = (1664525 * s + 1013904223) % 4294967296;
          return s / 4294967296;
        };
      }
      setDeck((d) => defaultShuffle(d, rng));
      setDiscard((d) => defaultShuffle(d, rng));
    },
    [optsSafe.rng]
  );

  const reset = useCallback(() => {
    setDeck(defaultShuffle(initialFiltered, optsSafe.rng));
    setDiscard([]);
    setHistory([]);
    setRevealed(null);
  }, [initialFiltered, optsSafe.rng]);

  const filter = useCallback((fn: (c: GenericCard) => boolean) => {
    setDeck((d) => d.filter(fn));
    setDiscard((d) => d.filter(fn));
    setHistory((h) => h.filter((x) => fn(x.card)));
  }, []);

  const peek = useCallback((n = 1) => deck.slice(0, n), [deck]);

  return {
    deck,
    top,
    discard,
    history,
    revealed,
    draw,
    reveal,
    accept,
    penalty,
    discardTop,
    shuffle,
    reset,
    filter,
    peek,
  } as const;
}
