# Expertise Constellation

Replace the awkward "Expertise in" pill row at the top of the hero with a full-width neural-map band directly below the hero.

## What it looks like

A wide, quiet band (`.section-y`, max-w-5xl) with the eyebrow label "Mapped to my brain" and a live SVG constellation:

- A central node labelled "Krishna" with a soft Iris Violet halo.
- 8–10 skill nodes orbiting at organic (non-symmetric) positions, each a small dot plus a label.
- Thin violet hairline edges connecting centre to skills, and a few skill-to-skill edges so it reads as a network, not a starburst.
- Nodes drift slowly on individual sine offsets; edges have a faint travelling pulse so signal appears to flow toward the centre.
- Cursor proximity gently pulls nearby nodes and brightens their edges; hovering a node raises its label and dims the rest.
- Layered under the existing `hero-noise` texture so it belongs to the hero family.

```text
            0→1 Product
                 \
 Design Systems ──●───── AI Product Design
                 /│\
     Research ───┼─●─── Prototyping
                 │  \
        Interaction   Service Design
```

## Content

Skill nodes pulled from real case-study tags in `src/data/caseStudies.ts` (no invented skills). Nodes carry a weight so primary skills render larger/brighter than secondary ones.

## Behaviour and accessibility

- The SVG is `aria-hidden`; a visually hidden list of the same skills sits alongside it for screen readers and SEO.
- Mobile: fewer nodes, tighter radius, no cursor interaction (touch), labels sized to stay legible; nothing overlaps.
- `prefers-reduced-motion`: static composition, no drift, no pulse — reveals only.

## Technical notes

- New `src/components/ExpertiseConstellation.tsx` — inline SVG with a `requestAnimationFrame` loop writing transform/opacity only (composited, single rAF, paused when off-screen via the existing `useInView` hook).
- Reuses `usePointerGlow`-style pointer tracking for the cursor pull; no new dependencies.
- Skill data lives in a small typed array inside the component, derived from existing case-study tags.
- Colors strictly from tokens (`--primary`, `--primary-deep`, `--muted-foreground`); easing from the existing `--ease-*` tokens.
- `src/pages/Home.tsx`: remove the hero "Expertise in" pill cluster, render `<ExpertiseConstellation />` between the hero and Selected Projects.

## Out of scope

- No change to hero copy, CTAs, or the Selected Projects grid.
- `Pill` stays as-is for case study cards.
