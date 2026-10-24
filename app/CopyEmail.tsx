"use client";

import { useEffect, useRef, useState } from "react";

// Copies the address for visitors whose mailto links open nothing.
// The label confirms the copy, then returns.
export default function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 1800);
  };

  return (
    <button type="button" className={`copy${state === "copied" ? " is-done" : ""}${className ? ` ${className}` : ""}`} onClick={copy}>
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "failed" ? "Copy failed, select the address" : "Copy email"}
      </span>
    </button>
  );
}
