# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React / Next.js (user's choice). No scaffold exists yet. Deploy target is undecided.

## Users

The primary audience is recruiters and screeners for industry tech and ML internship programs. They are evaluating Sanjay Srinivasan, a high school student (Eastlake High School, Sammamish, WA, class of 2028). They usually arrive from an application or résumé link, often on a laptop, sometimes on a phone. They are deciding quickly whether this candidate can do real engineering work despite being in high school.

The site is publicly accessible, but it is designed for internship recruiters first. Labs, admissions readers, and judges may also visit; they are secondary, unconfirmed audiences.

## Product Purpose

This is Sanjay's personal portfolio site. It presents his projects and publications, research experience, technical skills, and experience/leadership in one place. It succeeds when an internship recruiter quickly concludes that Sanjay has shipped real, end-to-end technical work, and knows how to reach him by email.

## Positioning

He is a high school student whose work runs from model to product to publication. DeepScope goes from PyTorch CNN training and a novel augmentation algorithm to a Flask API on DigitalOcean, an Android app, and an offline Core ML iOS app, and was accepted for publication in Springer Nature *Applied Water Science* as sole author. Alongside that: computational chemistry research (ISEF 4th Place Grand Award) and a research assistant role in a UW lab. These are verifiable outcomes, not class projects.

## Operating Context

- Recruiters skim quickly, comparing many candidates. Within seconds they need to see his age/stage, the core skills (Python, PyTorch, Swift/iOS, Android, Flask), and the strongest proof.
- Publication and preprint links (arXiv, ChemRxiv DOI) let recruiters verify claims.
- The content is maintained by Sanjay, who will update it as roles, papers, and awards change.

## Capabilities and Constraints

Required sections:
- Projects & publications
- Research experience
- Technical skills
- Experience (including leadership and awards)

Contact: show **email only** (s.srin2010@gmail.com). Do **not** publish the phone number. Google Scholar profile (added by Sanjay): https://scholar.google.com/citations?user=voBkcYAAAAAJ. No résumé download and no GitHub/LinkedIn links unless he adds them later.

Undecided: domain, deploy host, and whether to include a photo or headshot.

## Brand Commitments

None beyond his name, **Sanjay Srinivasan**, and the factual record below.

## Evidence on Hand

Source of truth: `C:\Research_2026\SanjaySrinivasan_Resume.pdf`. Use its numbers and wording exactly; don't round or embellish.

- **Education:** Eastlake High School, GPA 4.0/4.0, Sep 2024 – Jun 2028. Coursework includes Multivariable Calculus, Data Structures & Algorithms, AP CS A/Principles, AP Calc BC/AB, AP Physics 1, AP Macro/Micro.
- **Skills:**
  - Languages: Python, Java, Swift.
  - ML: PyTorch, TorchVision, CNNs, transfer learning, dropout, data augmentation, Core ML, TorchScript.
  - Data: Pandas, SciPy, NumPy, Matplotlib, Seaborn.
  - Backend/mobile: Flask, REST APIs, Android, iOS, DigitalOcean.
  - Simulation/lab: AutoDock Vina, ORCA (DFT), Avogadro, PyMOL, UV-Vis spectrophotometry, HPLC.
- **DeepScope: Deep Learning Water Safety Classifier (2026)**
  - Accepted for publication, Springer Nature *Applied Water Science* (sole author); arXiv:2603.06611.
  - Site shows only (per Sanjay, 2026-10-09): 92.79% accuracy / 94.48% recall, field-tested on a 100,000-image augmented set from 14 unseen water sources. Don't show the 96.88%/98.61% or 1.39%/4.55% figures.
  - Tile-swap augmentation: 297 images → 30,000 training samples (100×). On a 100,000-image augmented field-test set: 92.79% accuracy / 94.48% recall.
  - Deployment: Flask API on DigitalOcean serving an Android app; Core ML via TorchScript for an offline Swift iOS app.
  - Evaluation pipeline met UNICEF Target Product Profile thresholds: 1.39% false-negative, 4.55% false-positive, about $0.44 per test.
- **Computational Design of PDMS-Coated Hydrogels for Oil Spill Remediation (2026)**
  - ChemRxiv preprint, doi:10.26434/chemrxiv.15007105/v1; ISEF project MATS022.
  - Modeling: 10 polymer systems modeled (MMFF94/UFF), then screened with AutoDock Vina docking and ORCA DFT simulations, using a centroid-based grid-box algorithm.
  - Statistics: Shapiro-Wilk normality tests, then non-parametric tests with Dunn's post hoc and Bonferroni correction implemented from scratch; 225 samples across 3 oil viscosities.
  - Results: up to 2.88 g/g oil uptake with negligible water uptake.
  - Secured grant funding; selected to present at the 2027 NAAS/AJAS Conference.
- **Experience**
  - University of Washington, Chemical Oxidation & Disinfection Lab: Research Assistant, advised by Dr. Michael Dodd, Jun 2026 – present.
  - Eagle Scout, Troop 751 (Sep 2019 – present): led a team of 20 building greenhouse end walls for a food-bank high tunnel, extending the growing season by 3 months.
  - Sustainability Ambassadors: Team Leader, May 2024 – present.
  - WA State Depts. of Commerce & Ecology: Youth Engagement Leader, Jul – Sep 2025; statewide workshop of 100+ youth.
- **Leadership & awards:**
  - President, Eastlake Environmental Club (50+ members); Sammamish Youth Board.
  - 2026 Regeneron ISEF 4th Place Grand Award; 2027 AJAS Delegate.
  - 2026 Stockholm Junior Water Prize National Runner-Up; 2× SJWP National Finalist and WA State Winner.
  - Central Sound SEF Grand Champion with Distinction; 2× WA State SEF 1st Place.
  - Norman E. Borlaug Excellence in Sustainability Award; Eagle Scout.
  - Award years confirmed by Sanjay (2026-10-09; not on the résumé): SJWP National Finalist & WA State Winner 2025 and 2026; Central Sound SEF Grand Champion with Distinction (Best in Fair) 2026; WA State SEF 1st Place 2025 and 2026; Borlaug Award 2025.

Absent: no app screenshots, project images, headshot, GitHub repos, live demo URLs, or testimonials. Do not fabricate any of them. Use clearly marked placeholders where a visual is needed.

## Product Principles

1. **Proof first.** Lead with outcomes a recruiter can verify: the publication, metrics, deployed apps, and awards, each with its source link.
2. **Engineer, not just student.** Frame the work as full-stack ML engineering (model → API → mobile apps), while staying honest that he is in high school.
3. **Recruiter-speed scanning.** Name, stage, top skills, flagship project, and email should all be visible quickly. Detail stays available but out of the way.
4. **Exact and current.** Every claim maps to the CV word-for-word in substance, and the content stays easy for one person to update.

## Accessibility & Inclusion

No specific requirement has been stated. Default to WCAG 2.2 AA.
