"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// A gold "scan" that steps through `count` items, rests, and repeats.
// It only runs while the element is on screen, and never under reduced motion.
// `hold(i)` hands the gold to item i (hover, focus, tap) and pauses the scan;
// `hold(null)` releases it and the scan resumes from the top.
// Returns the index of the live item, or -1 at rest.
export function useScan<T extends HTMLElement>(count: number, stepMs = 520, restMs = 1400) {
  const ref = useRef<T>(null);
  const [live, setLive] = useState(-1);
  const [held, setHeld] = useState<number | null>(null);
  const heldRef = useRef<number | null>(null);
  const control = useRef<{ start: () => void; stop: () => void } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let i = -1;
    let visible = false;

    const tick = () => {
      i += 1;
      if (i >= count) {
        i = -1;
        setLive(-1);
        timer = setTimeout(tick, restMs);
      } else {
        setLive(i);
        timer = setTimeout(tick, stepMs);
      }
    };
    const stop = () => {
      clearTimeout(timer);
      timer = undefined;
      i = -1;
      setLive(-1);
    };
    const start = () => {
      if (!timer && visible && heldRef.current === null) tick();
    };
    control.current = { start, stop };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
      control.current = null;
    };
  }, [count, stepMs, restMs]);

  const hold = useCallback((index: number | null) => {
    heldRef.current = index;
    setHeld(index);
    if (index === null) control.current?.start();
    else control.current?.stop();
  }, []);

  return { ref, live: held ?? live, held, hold };
}
