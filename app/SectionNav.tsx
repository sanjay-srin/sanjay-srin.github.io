"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "recognition", label: "Recognition" },
  { id: "lab", label: "Lab" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

// Section links. The one for the section crossing the middle of the
// viewport keeps its underline bar, so the top band shows where you are.
export default function SectionNav() {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(e.target.id);
          else if (e.target.id === els[0]?.id && e.boundingClientRect.top > 0) setCurrent(null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Sections">
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`} aria-current={current === s.id ? "location" : undefined}>
          {s.label}
        </a>
      ))}
    </nav>
  );
}
