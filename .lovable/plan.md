# Recreate Jointly Chapter 01 slide as native cards

## Goal
Replace the slide image `/images/jointly/4.png` in Chapter 01 ("Validating the problem") with real page elements: three stacked research-track cards, sharper than the image and consistent with the rest of the rebuilt study.

## What the cards show
1. **User interviews** — people icon — "Deep-dives with lead planners, contributors, and easy-going members."
2. **Secondary & market research** — book icon — "Group dynamics, travel behavior, and competitive landscape."
3. **Travel community** — globe icon — "60k+ views on a single post; unfiltered experiences from the travel community." plus a coral badge: "60k+ views · 50+ responses".

## Design
- Each card: white/ivory surface, thin border, rounded corners; icon in a small tinted rounded square, bold title, one muted description line.
- The Travel community card gets the coral accent treatment (tinted background, coral border, coral icon + badge) — matching the slide and the existing Jointly light-chapter `--primary` coral token (`20 76% 55%`).
- Cards stack vertically like the slide; sit within the reading width (max-w-3xl) of the chapter band.
- Cards reveal with the existing staggered scroll-fade motion, reduced-motion safe.
- The chapter intro already carries the framing, so the slide's left-hand heading is not duplicated; the image's caption line is dropped.

## Technical details
- Add a new `researchTracks` block kind to the `Block` union in `src/data/caseStudies.ts` and a matching renderer in `src/components/casestudy/Blocks.tsx` (lucide icons: Users, BookOpen, Globe).
- Swap the `{ kind: "image", src: "/images/jointly/4.png", ... }` block for the new block in the Jointly entry; no other case studies touched.
- All colors via the Jointly chapter CSS variables — no hardcoded hex.
- Icons are decorative (aria-hidden); card text carries the meaning.

## Validation
- Typecheck passes.
- Playwright check of `/work/jointly-travel` on desktop and mobile: cards render crisply, coral highlight reads correctly, reveal motion staggers, no overflow.
