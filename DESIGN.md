---
name: Sanjay Srinivasan
description: A research portfolio set like a heavyweight printed program in team colours.
colors:
  navy: "#0f3d7a"
  navy-deep: "#0b2f5f"
  red: "#c8202e"
  gold: "#f2b705"
  stock: "#f4f1e6"
  card: "#c9c6bc"
  ink: "#14161a"
  ink-2: "#4a4a46"
  on-navy-2: "#bccbe0"
typography:
  display:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(2.5rem, 11vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 0.95
  title:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Roboto Condensed, Arial Narrow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Roboto Condensed, Arial Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  data:
    fontFamily: "Roboto Condensed, Arial Narrow, sans-serif"
    fontSize: "0.96em"
    fontWeight: 400
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  frame: "clamp(8px, 1.1vw, 14px)"
  max: "1320px"
  overlap: "96px"
  overlap-compact: "64px"
  band: "clamp(64px, 8vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 26px"
  button-primary-hover:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
  button-quiet:
    textColor: "{colors.stock}"
    typography: "{typography.label}"
  button-quiet-hover:
    textColor: "{colors.on-navy-2}"
  link-out-ink:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  link-out-ink-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
  link-out-solid:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.stock}"
    typography: "{typography.data}"
    padding: "12px 18px"
  link-out-solid-hover:
    backgroundColor: "{colors.ink}"
  panel-framed:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 4vw, 56px)"
  pipeline-stage:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.stock}"
    padding: "12px 12px 14px"
  pipeline-stage-live:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  nav-mark:
    backgroundColor: "{colors.red}"
    textColor: "{colors.stock}"
    typography: "{typography.title}"
    padding: "2px 12px 3px"
---

# Design System: Sanjay Srinivasan

## Overview

**Creative North Star: "The Team Program"**

The page is a heavyweight printed program in team colours: full-bleed bands of navy, cardstock grey, red and paper stock, with slab-serif uppercase headings at poster scale. Research is shown the way a program shows a starting line-up: big, framed and on paper. The two research projects are full-width framed sheets, not a grid of equal cards, and their methods are drawn out as diagrams and ladders.

The material is flat ink on stock. There are no gradients, no shadows and no rounded corners. Depth comes from one device only: a framed paper panel that hangs over the seam between two bands. Structure comes from rules: a thick rule opens a list, and hairlines divide its rows.

Motion is a single idea: a gold scan, like a results board lighting up, that steps through a sequence while it is on screen, rests, and repeats. Everything is fully visible without it, and it does not run under reduced motion.

**Key Characteristics:**
- Full-bleed colour bands in a fixed team palette; every section owns one band colour.
- Alfa Slab One uppercase at poster scale for headings; Roboto Condensed for everything read, including numbers (tabular figures for measurements).
- Stock panels framed in thick solid red (or navy) borders, hanging over band seams.
- Square everything: zero radius, square bullets, square-capped arrow.
- Gold is a signal, never a decoration.

## Colors

A saturated team palette of navy, red and gold, set against warm paper stock and cardstock grey, with near-black ink.

### Primary
- **Program Navy** (navy): the hero, top band, experience band and the pipeline field. Also the alternate panel frame (the second project) and the solid outbound link.
- **Night Navy** (navy-deep): the lab band and footer, the top band's bottom rule, and the fill of pipeline stages.

### Secondary
- **Jersey Red** (red): the skills band, the default panel frame, the header name mark, square bullets, project subtitles, award years and the lead award. It is also the scrollbar thumb.

### Tertiary
- **Signal Gold** (gold): the primary email actions (hero "Email Sanjay" button and top-band Email button) and the live scan state. Keyboard focus rings, the skip link and text selection also use it.

### Neutral
- **Paper Stock** (stock): text on every dark band and the surface of every framed panel and the recognition band.
- **Cardstock Grey** (card): the research and education bands, plus the hairline dividers inside stock panels.
- **Press Ink** (ink): text on stock, grey and gold, thick rules on stock, and the hover fill of outbound links.
- **Graphite** (ink-2): secondary text on stock (fact labels, project meta).
- **Faded Navy Ink** (on-navy-2): secondary text on navy and night navy (stage notes, lane names, experience dates, lab meta, footer).
- **Stock hairlines on colour**: paper stock at partial opacity divides rows on dark and red bands (35% on red, 28% on navy).

### Named Rules
**The Band Order Rule.** Bands run navy hero, grey research, red skills, stock recognition, night-navy lab, navy experience, grey education, and a night-navy footer. Two adjacent bands never share a colour.

**The Gold Means Go Rule.** Gold appears only where something is actionable or live: the email actions, the live scan item, and keyboard focus. Do not use it for headings, borders, badges or decoration.

## Typography

**Display Font:** Alfa Slab One (with Georgia, serif)
**Body Font:** Roboto Condensed (with Arial Narrow, sans-serif)
**Data Font:** none; numbers use Roboto Condensed with tabular figures (Courier Prime was removed at the user's request because it looked out of place)

**Character:** A slab poster face that shouts the names, paired with a narrow, workmanlike grotesque that carries all reading and controls. The typewriter face shows up only where a number or identifier needs to read as recorded fact.

### Hierarchy
- **Display** (400, clamp(2.5rem, 11vw, 6rem), 0.9, uppercase): the name in the hero, nowhere else.
- **Headline** (400, clamp(2.25rem, 4.6vw, 3.75rem), 0.95, uppercase): section headings. Project titles go larger (up to 4.75rem) on the lead project and smaller (up to 3.25rem) on the second.
- **Title** (400, 1.15 to 1.9rem, 1.05 to 1.1, uppercase slab): the proof-panel title, method step names, skill group names, the lab organisation, the school name and the lead award.
- **Body** (400, 1.125rem, 1.5; 1.0625rem under 640px): all reading text. Lead summaries run at 1.15 to 1.3rem, capped at 68ch, and lists at 70ch. Key words from the résumé are set in bold (700).
- **Label** (700, 0.8 to 0.875rem, 0.1 to 0.12em tracking, uppercase): nav links, sub-labels such as "Stack" and "Links", proof-panel fact labels, pipeline lane names and button text.
- **Data** (Roboto Condensed, tabular figures, no wrapping): measurements inside running text (percentages, counts, costs, ratios) and the GPA, applied automatically to numbers in copy. They stay in the body face, with no font switch.

### Named Rules
**The Measured Fact Rule.** Numbers stay in the body face (tabular figures, never broken across lines). Do not introduce a monospace or third face for figures; the user rejected it as out of place.

**The Uppercase Slab Rule.** Alfa Slab One is always uppercase and always weight 400. Never use it for running text.

## Layout

Full-bleed bands, with content centred to a 1320px measure. The side padding is `max(gutter, (100% - 1320px) / 2)`, and the gutter scales from 16 to 56px. Bands breathe at 64 to 112px vertically. The sticky top band holds the red name mark, the section nav and the gold Email button.

The hero is a 1.2 : 0.8 two-column grid aligned to the bottom edge. The proof panel sits on the right and hangs 96px into the research band. Projects are stacked, full-width sheets. Inside the lead project, the body splits 1.7 : 1 (work list and side column). The second project splits 1 : 1.15, with the method ladder on the right. Skills run as six columns under one thick rule. The awards roll is a three-column row grid (name, detail, year in a 4rem column). The lab section splits 1 : 1.3 and experience runs in two columns.

**Responsive:**
- **≤1080px:** the pipeline stacks its trunk above its branches. The fork becomes a stem and a bracket over two lanes side by side.
- **≤900px:** every two-column layout collapses to one column. The overlap shrinks to 64px. Skills go to two columns, each with its own thick top rule. The top nav hides, leaving the name mark and the Email button.
- **≤640px:** pipeline stages stack vertically, with connectors turned into vertical ticks. Ladder rows, award rows and proof facts stack their label above the value. Coursework goes to one column.

## Elevation & Depth

The system is flat: no box-shadows, no gradients, no blur. Depth is conveyed only by overlap. A framed stock panel carries a negative bottom margin (96px, or 64px at ≤900px) so it hangs over the seam into the next band. The next band's top padding is increased by the same amount, so nothing collides. The hero proof panel hangs into research, and the second project hangs into skills.

### Named Rules
**The Overlap-Only Rule.** To lift something, frame it and hang it over a seam. Never add a shadow.

**The Thick-Thin Rule.** A list opens with a heavy rule (4px ink on stock, or 4px stock on red). The awards roll and the method ladder pair that heavy rule with a 1px hairline 4px above it. Rows below are divided by 1px hairlines (cardstock grey on stock, translucent stock on colour). The proof panel uses a 2px ink head rule with the same hairline rows.

## Shapes

All corners are square (0px radius) everywhere. Frames are solid, thick borders (8 to 14px, scaling with the viewport) in red, or in navy as the alternate. Pipeline stages are 2px stock outlines. Bullets are 8px solid red squares. The outbound arrow is a 2px stroke with square caps. Underlines on hovered nav links are 2px bars.

## Components

### Buttons
- **Shape:** square (0px).
- **Primary:** gold fill, ink text, Roboto Condensed 700 at 1rem, uppercase, 0.1em tracking, 16px by 26px padding. Used for the email actions only. The top-band variant is smaller (0.875rem, 8px by 16px).
- **Hover / Focus / Active:** the fill turns to paper stock over 0.2s on the expo-out ease, and the button presses down 1px when active. Focus is a 3px gold outline with a 3px offset.
- **Quiet:** an uppercase 700 underlined text link on navy ("Google Scholar", "See the research") that sits beside the primary button and fades to faded navy ink on hover.

### Outbound Links
- **Ink:** a 2px ink outline, ink text, 700 weight, 10px by 16px, with an arrow. On hover it fills with ink and the text turns to stock. Used for source links inside stock panels (arXiv, ChemRxiv, ISEF).
- **Solid:** a navy fill with stock text in Roboto Condensed bold. Reserved for an identifier link (the arXiv number in the proof panel). On hover the fill turns to ink.
- **Arrow behaviour:** the arrow nudges 2px up and to the right on hover.

### Framed Panels (proof panel, project panels, education)
- **Corner Style:** square.
- **Background:** paper stock inside a solid frame (red by default, navy for the second project).
- **Shadow Strategy:** none. See Elevation & Depth.
- **Internal Padding:** 20 to 32px for the proof panel, 24 to 56px for project and education panels.
- **Proof panel:** a slab title, then a fact list (Status, Journal, Authorship, Shipped). The list has a 2px ink head rule, a 7.5rem label column of uppercase graphite labels and bold values. A solid outbound link closes the panel.

### Pipeline (signature)
A navy field holding a trunk of four stages that forks into two deployment lanes (Server and On-device). Each stage is a night-navy box with a 2px stock outline, a bold name and a faded-navy note. The connectors are 2px stock bars, and the fork is a 2px stock bracket. The live stage turns gold with ink text over 0.3s.

### Method Ladder
A numbered list under a thick-thin rule. Each row has a 7.5rem column for the step name (navy, uppercase slab, 1.35rem) and a text column, divided by cardstock hairlines. The live step's name gets a gold block behind it with ink text.

### Awards Roll
A results board under a thick-thin rule. Rows show the award name (uppercase 700), the detail and the year (red, right-aligned), divided by cardstock hairlines. The lead award's detail is set in red slab. The live row fills gold, and red text inside it turns to ink.

### Hero
The display name sits on navy, followed by the school in body stock at 1.25 to 1.5rem, then a row holding the gold primary button and the quiet text links. The proof panel hangs on the right.

### Footer
A night-navy band with the email in bold stock (1.15rem), the Google Scholar link, the copyright in faded navy ink and a back-to-top link. The links are underlined text; the footer has no buttons.

### Navigation
A sticky navy top band with a 2px night-navy bottom rule. The name mark is a red block with a stock slab word. Section links are uppercase 700 labels (0.875rem, 0.12em tracking) that gain a 2px stock underline bar on hover. The gold Email button sits at the end. At ≤900px the links hide and only the mark and Email remain.

### Motion: the Gold Scan
A single motion grammar. While a sequence is at least 35% in view, gold steps through its items one at a time, rests with nothing lit, then repeats. Pipeline stages step every 480ms with a 1600ms rest, method steps every 900ms with a 1400ms rest, and award rows every 420ms with an 1800ms rest. Colour changes ease over 0.3s on `cubic-bezier(0.16, 1, 0.3, 1)`. The scan stops and clears when the sequence leaves view. Under `prefers-reduced-motion: reduce` it never starts and smooth scrolling is off. All items are fully legible at rest; the scan only adds emphasis.

**Taking the gold.** Visitors can take the scan over. Pointing at a method step or award row hands it the gold and pauses the scan; leaving the list resumes it. Pipeline stages are focusable buttons: hovering, focusing or tapping one fills it gold and traces the path from the data to it. Upstream stages take a gold outline, their connectors (and the fork, for a lane stage) turn gold, and a readout under the diagram ("Path", gold label) lists the stages with gold dashes, stepping in over 0.3s with a 30ms stagger. Escape or leaving the diagram releases it. These states still work under reduced motion; only the readout's slide is dropped.

**Where you are.** The top nav underlines the section crossing the middle of the viewport (2px stock bar, `aria-current`), the same bar as hover.

**Copy email.** An underlined text control beside the email actions (hero and footer) copies the address and reads "Copied" for 1.8s, for visitors whose mailto opens nothing.

## Do's and Don'ts

### Do:
- **Do** give every section a full-bleed band from the palette, keeping the band order.
- **Do** frame paper-stock panels in a thick solid red (or navy) border, and hang them over a band seam to show importance.
- **Do** open lists with a heavy rule and divide rows with 1px hairlines; pair the heavy rule with a thin rule for ranked or sequential lists.
- **Do** keep measurements in the body face with tabular figures, and bold the résumé's key words in body text.
- **Do** keep gold for email actions, the live scan and keyboard focus.
- **Do** keep every animated item fully visible at rest and turn the scan off under reduced motion.

### Don't:
- **Don't** add shadows, gradients or rounded corners.
- **Don't** lay out projects as a grid of equal cards; projects are full-width framed sheets.
- **Don't** use gold for decoration, headings, frames or badges.
- **Don't** set running text in Alfa Slab One, or add a monospace face for numbers.
- **Don't** hide content behind the scan or behind scroll-triggered reveals.
