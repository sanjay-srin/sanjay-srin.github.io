"use client";

import { awards, hydrogels } from "./content";
import Measure from "./Measure";
import { useScan } from "./useScan";

// The hydrogels method ladder: the scan walks Model → Screen → Test → Report.
export function MethodLadder() {
  const { ref, live } = useScan<HTMLOListElement>(hydrogels.method.length, 900, 1400);
  return (
    <ol ref={ref}>
      {hydrogels.method.map((m, i) => (
        <li key={m.name} className={live === i ? "is-live" : undefined}>
          <span className="method-name">{m.name}</span>
          <p>
            <Measure text={m.text} />
          </p>
        </li>
      ))}
    </ol>
  );
}

// Recognition: the scan runs down the honours roll like a results board.
export function AwardsRoll() {
  const { ref, live } = useScan<HTMLUListElement>(awards.length, 420, 1800);
  return (
    <ul className="awards" ref={ref}>
      {awards.map((a, i) => (
        <li key={a.name + a.detail} className={live === i ? "is-live" : undefined}>
          <span className="award-name">{a.name}</span>
          <span className="award-detail">
            <Measure text={a.detail} />
          </span>
          <span className="award-year">{a.year}</span>
        </li>
      ))}
    </ul>
  );
}
