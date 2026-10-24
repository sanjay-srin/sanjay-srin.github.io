// Skill marks. Real logos (Devicon, Simple Icons) where the tool has one;
// otherwise a drawn glyph in the site's own line: 2px stroke, square caps.

const logos: Record<string, string> = {
  Python: "python",
  Java: "java",
  Swift: "swift",
  PyTorch: "pytorch",
  Pandas: "pandas",
  SciPy: "scipy",
  NumPy: "numpy",
  Matplotlib: "matplotlib",
  Flask: "flask",
  Android: "android",
  iOS: "apple",
  DigitalOcean: "digitalocean",
  "Next.js": "nextjs",
  React: "react",
  TypeScript: "typescript",
  CSS: "css3",
};

const paper = "#f4f1e6";

const glyphs: Record<string, React.ReactNode> = {
  // an eye: computer vision
  TorchVision: (
    <>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  // stacked feature maps
  CNNs: (
    <>
      <rect x="10" y="2.5" width="11" height="11" fill={paper} />
      <rect x="6.5" y="6.5" width="11" height="11" fill={paper} />
      <rect x="3" y="10.5" width="11" height="11" fill={paper} />
    </>
  ),
  // weights carried from one model to another
  "Transfer learning": (
    <>
      <rect x="2.5" y="3" width="7" height="7" />
      <rect x="14.5" y="14" width="7" height="7" />
      <path d="M9.5 6.5H18v4.5M15 8l3 3 3-3" />
    </>
  ),
  // a layer with some units switched off
  Dropout: (
    <>
      {[5, 12, 19].flatMap((x) =>
        [5, 12, 19].map((y) =>
          (x === 12 && y === 5) || (x === 5 && y === 12) || (x === 19 && y === 19) ? (
            <circle key={`${x}${y}`} cx={x} cy={y} r="2" />
          ) : (
            <circle key={`${x}${y}`} cx={x} cy={y} r="2" fill="currentColor" />
          )
        )
      )}
    </>
  ),
  // tile swap
  "Data augmentation": (
    <>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M12 3v18M3 12h18" />
      <rect x="5.5" y="5.5" width="4" height="4" fill="currentColor" stroke="none" />
      <rect x="14.5" y="14.5" width="4" height="4" fill="currentColor" stroke="none" />
    </>
  ),
  // a chip
  "Core ML": (
    <>
      <rect x="6" y="6" width="12" height="12" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    </>
  ),
  TorchScript: <path d="M8 6.5 2.5 12 8 17.5M16 6.5l5.5 5.5-5.5 5.5M14 4l-4 16" />,
  // histogram with a density curve
  Seaborn: (
    <>
      <path d="M2.5 21h19" />
      <path d="M5 21v-5h3.5v5M8.5 21v-9H12v9M12 21v-7h3.5v7M15.5 21v-3H19v3" />
      <path d="M3 15c3-1 4-10 7.5-10S15 13 21 16" />
    </>
  ),
  // request and response
  "REST APIs": <path d="M3 8h17M16 4l4 4-4 4M21 16H4M8 12l-4 4 4 4" />,
  // a ligand settling into a pocket
  "AutoDock Vina": (
    <>
      <path d="M2.5 13v8h19v-8h-5a4.5 4.5 0 0 1-9 0z" />
      <circle cx="12" cy="6" r="3.5" />
    </>
  ),
  // an orbital around a nucleus
  "ORCA (DFT)": (
    <>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(35 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-35 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </>
  ),
  // ball-and-stick molecule
  Avogadro: (
    <>
      <path d="M8 9.5 11 13.5M13.5 14.5l4.5-6M12 16.5v3" />
      <circle cx="6.5" cy="7" r="3" fill={paper} />
      <circle cx="12" cy="14.5" r="2.5" fill={paper} />
      <circle cx="19" cy="6.5" r="2.5" fill={paper} />
      <circle cx="12" cy="21" r="1.5" fill="currentColor" />
    </>
  ),
  // protein ribbon
  PyMOL: (
    <path d="M2.5 7c2.4 0 2.4 4 4.75 4S9.6 7 12 7s2.4 4 4.75 4S19.1 7 21.5 7M2.5 15c2.4 0 2.4 4 4.75 4s2.35-4 4.75-4 2.4 4 4.75 4 2.35-4 4.75-4" />
  ),
  // a beam through a cuvette
  "UV-Vis spectrophotometry": (
    <>
      <rect x="9.5" y="4" width="5" height="16" />
      <path d="M2.5 12h5M16.5 12h5M18.5 9l3 3-3 3" />
    </>
  ),
  // a chromatogram
  HPLC: (
    <>
      <path d="M2.5 21h19" />
      <path d="M2.5 20c2.5 0 2.5-14 4.5-14s2 14 4 14 2-8 3.5-8 1.5 8 3.5 8 1.5-4 2.5-4 1 4 1 4" />
    </>
  ),
};

export default function SkillIcon({ name }: { name: string }) {
  const logo = logos[name];
  if (logo) return <img className="skill-mark" src={`/icons/${logo}.svg`} alt="" width={30} height={30} loading="lazy" />;
  const glyph = glyphs[name];
  if (!glyph) return null;
  return (
    <svg
      className="skill-mark skill-glyph"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
