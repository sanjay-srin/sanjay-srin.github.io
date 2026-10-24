"use client";

import { useState } from "react";
import { deepscope } from "./content";
import Measure from "./Measure";
import { useScan } from "./useScan";

type Stage = { name: string; note: string };
// A picked stage: lane -1 is the trunk, otherwise the index of a deployment lane.
type Pick = { lane: number; i: number };

// Stages are always visible. While on screen, a gold scan runs the trunk,
// then both deployment lanes together, rests, and repeats.
// Pointing at, focusing or tapping a stage pauses the scan and traces the
// path from the data to that stage: the stage fills gold, the stages and
// connectors before it take a gold outline, and the readout spells it out.
export default function Pipeline() {
  const { trunk, branches } = deepscope.pipeline;
  const total = trunk.length + Math.max(...branches.map((b) => b.stages.length));
  const { ref, live, hold } = useScan<HTMLDivElement>(total, 480, 1600);
  const [pick, setPick] = useState<Pick | null>(null);

  const choose = (p: Pick | null) => {
    setPick(p);
    hold(p ? 0 : null);
  };
  const same = (p: Pick) => pick !== null && pick.lane === p.lane && pick.i === p.i;

  // Where a stage sits relative to the picked one.
  const role = (p: Pick): "picked" | "path" | "" => {
    if (!pick) return "";
    if (same(p)) return "picked";
    if (p.lane === -1) return pick.lane !== -1 || p.i < pick.i ? "path" : "";
    return p.lane === pick.lane && p.i < pick.i ? "path" : "";
  };

  const path: string[] = !pick
    ? []
    : pick.lane === -1
      ? trunk.slice(0, pick.i + 1).map((s) => s.name)
      : [...trunk, ...branches[pick.lane].stages.slice(0, pick.i + 1)].map((s) => s.name);

  const node = (s: Stage, p: Pick, scanIndex: number) => {
    const r = role(p);
    const cls = ["stage"];
    if (r === "picked" || (!pick && live === scanIndex)) cls.push("is-live");
    if (r === "path") cls.push("on-path");
    return (
      <li
        key={s.name}
        className={cls.join(" ")}
        tabIndex={0}
        role="button"
        aria-pressed={r === "picked"}
        onMouseEnter={() => choose(p)}
        onFocus={() => choose(p)}
        onClick={() => choose(p)}
        onKeyDown={(e) => {
          if (e.key === "Escape") choose(null);
        }}
      >
        <span className="stage-name">
          <Measure text={s.name} />
        </span>
        <span className="stage-note">
          <Measure text={s.note} />
        </span>
      </li>
    );
  };

  return (
    <div className="pipeline-wrap">
      <div
        className={`pipeline${pick && pick.lane !== -1 ? " fork-on" : ""}`}
        ref={ref}
        aria-label="DeepScope system, from data to two deployment paths"
        onMouseLeave={() => choose(null)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) choose(null);
        }}
      >
        <ol className="trunk">{trunk.map((s, i) => node(s, { lane: -1, i }, i))}</ol>
        <div className="branches">
          {branches.map((branch, b) => (
            <div className={`lane${pick?.lane === b ? " lane-on" : ""}`} key={branch.lane}>
              <p className="lane-name">{branch.lane}</p>
              <ol className="branch">{branch.stages.map((s, i) => node(s, { lane: b, i }, trunk.length + i))}</ol>
            </div>
          ))}
        </div>
      </div>
      <p className="trace" aria-live="polite">
        {pick ? (
          <>
            <span className="trace-label">Path</span>
            {path.map((name, i) => (
              <span key={name} className="trace-step">
                {i > 0 && <span className="trace-sep" aria-hidden="true" />}
                <Measure text={name} />
              </span>
            ))}
          </>
        ) : (
          <span className="trace-hint">Point at or tap any stage to trace its path from the data.</span>
        )}
      </p>
    </div>
  );
}
