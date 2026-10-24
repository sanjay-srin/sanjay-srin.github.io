"use client";

import { deepscope } from "./content";
import Measure from "./Measure";
import { useScan } from "./useScan";

type Stage = { name: string; note: string };

// Stages are always visible. While on screen, a gold scan runs the trunk,
// then both deployment lanes together, rests, and repeats.
export default function Pipeline() {
  const { trunk, branches } = deepscope.pipeline;
  const total = trunk.length + Math.max(...branches.map((b) => b.stages.length));
  const { ref, live } = useScan<HTMLDivElement>(total, 480, 1600);

  const node = (s: Stage, i: number) => (
    <li key={s.name} className={`stage${live === i ? " is-live" : ""}`}>
      <span className="stage-name">
        <Measure text={s.name} />
      </span>
      <span className="stage-note">
        <Measure text={s.note} />
      </span>
    </li>
  );

  return (
    <div className="pipeline" ref={ref} aria-label="DeepScope system, from data to two deployment paths">
      <ol className="trunk">{trunk.map((s, i) => node(s, i))}</ol>
      <div className="branches">
        {branches.map((branch) => (
          <div className="lane" key={branch.lane}>
            <p className="lane-name">{branch.lane}</p>
            <ol className="branch">{branch.stages.map((s, i) => node(s, trunk.length + i))}</ol>
          </div>
        ))}
      </div>
    </div>
  );
}
