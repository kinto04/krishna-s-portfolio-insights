# Node hover preview on the skills graph

Hovering (or keyboard-focusing) a node in the "What I design and build" graph will show which projects carry that tag, instead of only the current "N case studies" count.

## What it looks like

A small preview card appears next to the graph, anchored to the hovered node:

- Project cover thumbnail (small, rounded)
- Project title
- One-line summary (clamped to one line)
- Multiple matches stack vertically (max 3)

Card uses existing tokens: `bg-card/90`, `backdrop-blur`, `border-border/60`, radius `lg`, and the standard reveal easing for a quick fade + 4px rise. Clicking a row goes straight to that case study (`/work/<slug>`); clicking the node itself still goes to `/work?tag=...`.

## Behaviour

- Desktop: card is HTML positioned over the SVG (absolute, inside the existing relative wrapper) near the node, flipped to the opposite side when the node sits close to an edge so it never overflows.
- Keyboard: focusing a node shows the same card; blur hides it.
- Mobile: no floating card (touch has no hover) — the existing tap-to-filter behaviour and the inline count label stay as-is.
- Reduced motion: card appears without the rise/fade transition.
- The existing dim/highlight of other nodes and edges stays unchanged.

## Technical notes

- `src/components/ExpertiseConstellation.tsx` only; no data-model changes.
- Build a `tag -> CaseStudy[]` map with `useMemo` from `caseStudies` (`slug`, `title`, `summary`, `coverImage`).
- Reuse the existing `active` state as the hover source of truth; add the node's base `x/y` converted to percentage offsets of the `viewBox` for card placement (drift offset ignored so the card doesn't jitter).
- Keep the `sr-only` link list as the crawlable/accessible equivalent.
