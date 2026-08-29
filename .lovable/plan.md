# New case study: Northwestern Medicine

Add a fourth case study — leading research and design for a pediatric DGBI clinical product at Northwestern Feinberg School of Medicine — built from the three screenshots, using the existing narrative-block system so it matches Jointly, Airy and Nectar AI.

## Positioning

- Title: Leading Digital Innovation in Healthcare Research
- Subtitle: Research and design for a pediatric gut-brain diagnosis tool
- Tags: Experience Design, Research, Service Design, Healthcare
- Slug: `northwestern-medicine`
- Placed after Jointly and Airy, before Nectar AI (research-heavy, clinical credibility)

## At a glance

Timeline 2025 · Team Sole designer/PM within an existing research project · Role Design lead, product manager (stakeholder research, feature prioritization, prototyping) · Setting Northwestern Feinberg School of Medicine · Tools Figma, Miro, Lovable, Google Sheets

## Narrative structure

1. **Project goal** — statement block: "Make it easier for clinicians to diagnose and treat pediatric patients with potential Disorders of Gut-Brain Interaction (DGBI)."
2. **My role** — three-part grid: Stakeholder Research, Feature Prioritization, Design Prototyping, with the one-line descriptions from the screenshots.
3. **Approach** — the five-step ladder as a numbered list: User Research, Need Validation, Concept Wireframes, Prototype Development, Desirability-Viability-Feasibility.
4. **Design process** — research stats (9 focus group participants across 2 sessions · 1 in-context clinic observation · 4 clinician interviews) plus the two focus-group narratives (doctors, then nurses).
5. **Deliverables** — Service Blueprint, Research Prototypes, Other Design Artifacts (design requirements, JTBD, stakeholder profiles), each with its description.
6. **Challenges and mitigation** — three challenge/solution pairs: access to clinicians, time and budget constraints, new problem space.
7. **Reflection** — short takeaway on becoming a domain novice-turned-expert fast and researching on the fly under clinical constraints.

## Imagery

The uploaded screenshots are reference only, so the first pass ships text-led (statements, numbered list, stats, challenge cards) with no images beyond a cover. Two things needed from you:

- A cover/hero image for the card and detail hero.
- If you want the visuals (step ladder, service blueprint, prototype screens, focus-group photos) on the page, upload them as separate image files — note anything that must stay redacted for patient/IP reasons.

Until those arrive the study renders cleanly without them.

## Technical notes

- `src/data/caseStudies.ts`: append one `CaseStudy` object with `facts`, `overview`, `toolkit`, `blocks`, `reflection`; insert into the array in the order above. Reuse existing block kinds — `statement`, `featureGrid`/`methods`, `numberedList`, `stat`, `lead`, `quote` — so no renderer changes are required.
- Challenge/solution pairs map to `numberedList` items (title = challenge, body = solution); if a distinct two-tone card is wanted later, that's a separate `Blocks.tsx` addition.
- Research counts render via the existing `metrics` field (three-up band) rather than a new block.
- No theme override; the study inherits the default dark palette. `Work.tsx`, home featured grid and the next-study link pick it up automatically.
