# Restore the homepage’s visual hierarchy and work graph

Written against: 4b7f6714592815c83e05ff96345c0b70ac8848d5

## Evidence chain

- Surface: `/` through `src/pages/Home.tsx`, `src/components/HeroHeadline.tsx`, and `src/components/ExpertiseConstellation.tsx`
- Problem: The capability matrix replaced the requested connected graph; the hero actions sit below a full-width rule and read as a separate section; the education line lost its established `GraduationCap` icon; and the hero uses an isolated raw type scale while section headings use shared typography utilities.
- Design evidence: `DESIGN.md` establishes Manrope as the only typeface, zero letter spacing, shared wide alignment, restrained Persian Blue, and hierarchy through weight and scale. `src/index.css` owns `.label-eyebrow`, `.t-page-title`, and `.t-section-title`. The earlier `ExpertiseConstellation` implementation at commit `53b093da63678810eaec4626b9607bf66ebfa2c7^` proves the graph, tag filtering, responsive node positions, reduced-motion handling, and project previews already existed. The earlier `Home.tsx` implementation at commit `7f0beb16a640a1c240d53089b4093d5ae784c93d^` proves the education icon treatment.
- Owner: Homepage composition in `src/pages/Home.tsx`; graph visualization in `src/components/ExpertiseConstellation.tsx`; homepage type scale in `src/index.css` and `src/components/HeroHeadline.tsx`; documented rules in `DESIGN.md`.
- Scope and affected surfaces: Homepage hero, education line, hero actions, capability visualization, and homepage heading hierarchy at mobile and desktop sizes. `/work?tag=…` remains the destination for graph-node filtering.
- Uncertainty: None. The requested earlier graph and education treatment are recoverable from repository history, and the CTA issue is visible in the current rendered homepage.

## Design decision

Restore the functional node graph as the homepage’s distinctive visualization, but adapt it to the current Persian Blue/Manrope system rather than restoring obsolete serif, noise, glow, blur, or multicolor styling. Keep the hero actions inside the hero content flow without their own top divider, restore the education icon in the same restrained primary color, and make the hero title use the existing page-title scale so the homepage follows one explicit type hierarchy.

## Reuse

- `container-page`, `label-eyebrow`, `t-section-title`, `t-base`, `press`, and `focus-ring` from `src/index.css`
- `Reveal` from `src/components/Reveal.tsx`
- `GraduationCap` and `ArrowRight` from `lucide-react`
- `caseStudies` tags and cover images from `src/data/caseStudies.ts`
- `tagColor` from `src/lib/tagColors.ts`, whose values are restricted to the current blue/indigo family
- Exemplar: the graph interaction and responsive coordinate model from `53b093da63678810eaec4626b9607bf66ebfa2c7^:src/components/ExpertiseConstellation.tsx`
- Exemplar: the education row from `7f0beb16a640a1c240d53089b4093d5ae784c93d^:src/pages/Home.tsx`

## Changes

1. `src/components/ExpertiseConstellation.tsx`
   - Change: Replace the six-cell capability matrix with the earlier connected SVG node graph using the six current tags: AI, Experience Design, Interaction Design, Research, Conversational UI, and Healthcare.
   - Change: Preserve node click/keyboard navigation to `/work?tag=<tag>`, tag-derived case-study counts, desktop project previews, mobile-specific node positions, restrained traveling signals, and `prefers-reduced-motion` behavior.
   - Change: Restyle the restored graph for the current system: Manrope only, semantic foreground/border/primary tokens, blue/indigo tag tokens, flat opaque preview surfaces, no `hero-noise`, no serif class, no gradient, no glow, and no backdrop blur.
   - Change: Keep the section title “A representation of my work” and simplify its instruction to “Select a node to view related case studies.”
   - Preserve: Current section border, shared `container-page` alignment, real project imagery in previews, tag filtering, and accessible crawlable links.
   - Verify: Every node is connected visibly, each node filters the Work page, desktop hover/focus reveals matching projects without clipping, and the mobile graph fits without horizontal overflow.

2. `src/pages/Home.tsx`
   - Change: Import `GraduationCap` and render the education copy as an icon-and-text row. Use a 15–16px icon in `text-primary`, aligned to the first text line; allow the two degrees to wrap naturally on narrow screens without shrinking the text.
   - Change: Move the “View My Work” and “About Me” actions into the hero’s main content stack after the education row. Remove the actions’ `border-t` wrapper so no rule separates them from the supporting copy; use spacing alone to establish the action group.
   - Preserve: Button labels, destinations, button variants, focus/press states, hero copy, the hero’s outer bottom boundary, and shared container alignment.
   - Verify: The actions read as the conclusion of the hero on desktop and mobile, while the remaining bottom border still separates the hero from the graph section.

3. `src/components/HeroHeadline.tsx`
   - Change: Replace the raw `text-5xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-normal leading-[0.98]` list in `HeroHeadline` with the existing `.t-page-title` utility.
   - Change: Remove `font-mono` from any restored graph metadata so labels, counts, previews, hero copy, and headings all follow the single-family contract.
   - Preserve: Word-by-word reveal timing, primary emphasis on “AI products,” reduced-motion behavior, `.label-eyebrow`, `.t-page-title`, and `.t-section-title` sizes.
   - Verify: Computed font family is Manrope across all homepage text; the hero computes to 36px below 640px and 48px from 640px upward; section titles remain 24px mobile and 30px desktop.

4. `DESIGN.md`
   - Change: Replace the blanket prohibition on network diagrams with the accepted exception: the homepage may use one functional relationship graph when every node maps to real project tags and filtered work; decorative networks remain prohibited.
   - Preserve: Persian Blue as the only brand accent family, Manrope-only typography, zero letter spacing, flat surfaces, and the prohibitions on gradients, glow, blur, particles, and ornamental diagrams.
   - Verify: Documentation describes the implemented homepage without reintroducing superseded visual treatments.

## Scope

- Inherit: Homepage visitors at `/`, including keyboard and reduced-motion users.
- Verify: `/work?tag=AI`, `/work?tag=Experience%20Design`, and each sibling graph destination continue to show the existing filtered studies.
- Exclude: Case-study card redesign, Work page typography changes, global navigation/footer redesign, copy changes, case-study data changes, and any return to the previous dark/violet or multicolor visual systems.

## Validation

- Product: From `/`, activate each graph node and confirm the Work page opens with the corresponding tag filter; return and verify desktop preview cards show only matching studies.
- Interface: Capture `/` at 1280×1800 and 390×844 after animations settle. Confirm the education icon is visible, the CTA has no separating top rule, the graph is fully framed, project previews stay within the viewport, text does not overlap, and there is no horizontal overflow.
- Interface: Check keyboard focus on every node and both hero actions; check `prefers-reduced-motion: reduce` for a static graph and immediately visible headline.
- System: Confirm homepage text resolves to Manrope and uses `.t-page-title`, `.t-section-title`, or established body/metadata styles; confirm graph colors resolve through semantic or `--tag-*` tokens only.
- Repository: `bunx tsgo --noEmit && bunx vitest run` → both commands complete successfully.

## Stop conditions

- Stop if any of the six graph tags no longer maps to at least one case study, if Work page tag filtering no longer accepts the tag strings, or if restoring previews requires changing case-study data or routing outside this plan.

## Design documentation

- After acceptance and validation: record the functional homepage graph exception in `DESIGN.md` as described above.