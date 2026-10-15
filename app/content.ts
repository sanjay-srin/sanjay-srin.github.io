// All site content lives here. Source of truth: Sanjay's résumé.
// Edit this file to update the site; no layout code needs to change.
// Wrap key words in **double asterisks** to bold them, as on the résumé.

export type Link = { label: string; href: string };

export const profile = {
  name: "Sanjay Srinivasan",
  firstName: "Sanjay",
  email: "s.srin2010@gmail.com",
  school: "Eastlake High School",
  location: "Sammamish, WA",
  classOf: "2028",
  scholar: "https://scholar.google.com/citations?user=voBkcYAAAAAJ",
};

export const featured = {
  title: "DeepScope: Deep Learning Water Safety Classifier",
  status: "Published in Applied Water Science",
  venue: "Springer Nature, Applied Water Science",
  role: "Sole author",
  shipped: "Flask API on DigitalOcean · Android app · offline iOS app",
  link: { label: "doi:10.1007/s13201-026-02974-z", href: "https://link.springer.com/article/10.1007/s13201-026-02974-z" },
};

export const deepscope = {
  id: "deepscope",
  title: "DeepScope",
  subtitle: "Deep learning water safety classifier",
  year: "2026",
  status: "Published in Applied Water Science (sole author)",
  stack: ["Python", "PyTorch", "Flask", "Swift", "Core ML", "Android"],
  summary:
    "A smartphone app that uses a trained CNN to tell whether a water sample is safe. Field-tested on a 100,000-image augmented set from 14 unseen water sources, it reached **92.79% accuracy** and **94.48% recall**, at a cost of about $0.44 per test.",
  pipeline: {
    trunk: [
      { name: "297 source images", note: "Collected dataset" },
      { name: "Tile-swap augmentation", note: "Novel algorithm, 100×" },
      { name: "30,000 training samples", note: "Expanded set" },
      { name: "4 CNNs benchmarked", note: "PyTorch, transfer learning" },
    ],
    branches: [
      {
        lane: "Server",
        stages: [
          { name: "Flask inference API", note: "Hosted on DigitalOcean" },
          { name: "Android app", note: "HTTP POST / JSON" },
        ],
      },
      {
        lane: "On-device",
        stages: [
          { name: "TorchScript → Core ML", note: "Model conversion" },
          { name: "Swift iOS app", note: "Fully offline, on-device" },
        ],
      },
    ],
  },
  built: [
    "Trained and benchmarked **4 CNNs** in **PyTorch** using **transfer learning** and **dropout regularization**.",
    "Designed a novel **tile-swap augmentation algorithm** that expanded 297 source images into **30,000 training samples** (100×), and built the 100,000-image augmented field-test set from 14 unseen water sources.",
    "Built a **backend Flask inference API** on DigitalOcean that serves predictions to an **Android app** over HTTP POST/JSON.",
    "Converted the PyTorch model to **Core ML** via TorchScript and built a **Swift iOS app** for fully offline, on-device inference.",
    "Built **evaluation tools** for the precision-recall tradeoff (threshold tuning, bootstrap confidence intervals) that met UNICEF's Target Product Profile thresholds.",
  ],
  links: [
    { label: "Read the paper in Applied Water Science", href: "https://link.springer.com/article/10.1007/s13201-026-02974-z" },
  ] as Link[],
};

export const hydrogels = {
  id: "hydrogels",
  title: "Computational Screening of PDMS-Coated Hydrogels",
  subtitle: "Python simulation and statistical analysis",
  year: "2026",
  status: "ChemRxiv preprint · Regeneron ISEF project MATS022",
  stack: ["Python", "NumPy", "Pandas", "SciPy", "Matplotlib", "Seaborn", "AutoDock Vina", "ORCA"],
  summary:
    "**Python code** that generates, simulates and statistically tests candidate materials. I used it to design hydrogels for oil spill cleanup that absorb oil but not water. Across **225 samples** and 3 oil viscosities, they reached up to **2.88 g/g oil uptake** with negligible water uptake.",
  method: [
    {
      name: "Generate",
      text: "Scripted **3D model generation** for 10 polymer systems, with automatic **MMFF94/UFF geometry optimization** before anything is simulated.",
    },
    {
      name: "Simulate",
      text: "Batch-runs **molecular docking** (AutoDock Vina) and **quantum chemistry computational simulations** of binding energy using **density functional theory** (ORCA) across every system. A **centroid-based algorithm** I wrote places each docking grid box automatically instead of by hand.",
    },
    {
      name: "Analyze",
      text: "Statistical analysis in Pandas, SciPy and NumPy **checks normality first** (Shapiro-Wilk), then runs non-parametric comparisons, with **Dunn's post hoc test and Bonferroni correction written from scratch**.",
    },
    {
      name: "Report",
      text: "**Generates Q-Q plots, box plots and Excel reports automatically** (Matplotlib, Seaborn) for every run, so results are ready to review the moment the analysis finishes.",
    },
  ],
  outcome:
    "Earned **grant funding** for project instrumentation and an invitation to present at the **2027 NAAS/AJAS Conference**.",
  links: [
    { label: "ChemRxiv preprint", href: "https://doi.org/10.26434/chemrxiv.15007105/v1" },
    {
      label: "ISEF project page",
      href: "https://isef.net/project/mats022-hydrogels-for-sustainable-oil-spill-remediation",
    },
  ] as Link[],
};

export const lab = {
  org: "University of Washington",
  group: "Chemical Oxidation & Disinfection Lab",
  role: "Research Assistant",
  advisor: "Advised by Dr. Michael Dodd",
  dates: "June 2026 – Present",
  place: "Seattle, WA",
  points: [
    "Researching **trace organic contaminant removal** from wastewater using **HPLC**, **UV-Vis spectrophotometry** and a pH probe.",
    "Helped set up **sensors** for pressure, pH, dissolved ozone and UV absorbance and connect them to **Atlas Scientific software**.",
    "Contacted vendors and secured **quotes for specialized instrumentation** for the lab's ozone column experiments.",
  ],
};

export const awards = [
  { name: "Regeneron ISEF", detail: "4th Place Grand Award", year: "2026" },
  { name: "Stockholm Junior Water Prize", detail: "National Runner-Up", year: "2026" },
  { name: "Stockholm Junior Water Prize", detail: "2× National Finalist & Washington State Winner", year: "2025, 2026" },
  { name: "AJAS", detail: "Delegate", year: "2027" },
  { name: "Central Sound Science & Engineering Fair", detail: "Grand Champion with Distinction (Best in Fair)", year: "2026" },
  { name: "Washington State Science & Engineering Fair", detail: "2× 1st Place", year: "2025, 2026" },
  { name: "Norman E. Borlaug", detail: "Excellence in Sustainability Award", year: "2025" },
];

export const experience = [
  {
    org: "Washington State Departments of Commerce and Ecology",
    role: "Youth Engagement Leader",
    dates: "Jul – Sep 2025",
    text: "Designed and led a **statewide workshop of 100+ youth** to gather feedback on the Comprehensive Climate Action Plan.",
  },
  {
    org: "Sustainability Ambassadors",
    role: "Team Leader",
    dates: "May 2024 – Present",
    text: "Introduced a **school-district sustainability action plan**. Leading a **team of 20+** on campaigns including a carbon commute count with **750 responses**, distributing 500+ ORCA transit cards.",
  },
  {
    org: "Eagle Scout, Troop 751",
    role: "Eagle Scout",
    dates: "Sep 2019 – Present",
    text: "Led a **team of 20** to engineer and build **two greenhouse end walls for a high tunnel** at a food bank farm, **extending the growing season by 3 months**.",
  },
  {
    org: "Leadership",
    role: "President, Eastlake Environmental Club",
    dates: "",
    text: "Leads a club of **50+ members**; member of the **Sammamish Youth Board**.",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "Swift"] },
  {
    group: "Machine learning",
    items: ["PyTorch", "TorchVision", "CNNs", "Transfer learning", "Dropout", "Data augmentation", "Core ML", "TorchScript"],
  },
  { group: "Data analysis", items: ["Pandas", "SciPy", "NumPy", "Matplotlib", "Seaborn"] },
  { group: "Backend & mobile", items: ["Flask", "REST APIs", "Android", "iOS", "DigitalOcean"] },
  { group: "Web", items: ["Next.js", "React", "TypeScript", "CSS"] },
  {
    group: "Simulation & lab",
    items: ["AutoDock Vina", "ORCA (DFT)", "Avogadro", "PyMOL", "UV-Vis spectrophotometry", "HPLC"],
  },
];

export const education = {
  school: "Eastlake High School",
  place: "Sammamish, WA",
  dates: "Sep 2024 – Jun 2028",
  gpa: "4.0 / 4.0",
  coursework: [
    "Multivariable Calculus",
    "Data Structures and Algorithms",
    "AP Computer Science A",
    "AP Computer Science Principles",
    "AP Calculus BC",
    "AP Calculus AB",
    "AP Precalculus",
    "AP Physics 1",
    "AP Macroeconomics",
    "AP Microeconomics",
  ],
};
