"use client";

import { useEffect, useRef, useState } from "react";

// A gold "scan" that steps through `count` items, rests, and repeats.
// It only runs while the element is on screen, and never under reduced motion.
// Returns the index of the live item, or -1 at rest.
export function useScan<T extends HTMLElement>(count: number, stepMs = 520, restMs = 1400) {
  const ref = useRef<T>(null);
  const [live, setLive] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let i = -1;

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

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!timer) tick();
        } else {
          clearTimeout(timer);
          timer = undefined;
          i = -1;
          setLive(-1);
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [count, stepMs, restMs]);

  return { ref, live };
}
