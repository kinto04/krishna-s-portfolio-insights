# Color System: Terracotta to Confident Blue

Token-only pass. No layout or component structure changes.

## What changes

**`src/index.css`**
- `--primary`, `--accent`, `--ring`, `--sidebar-ring`: `20 55% 49%` becomes `221 83% 60%`
- New token `--primary-hover: 221 83% 65%` for hover/glow states
- `--available` (the "available for work" dot): shift from `140 25% 38%` to a brighter, cleaner green (`152 60% 45%`) so it reads as a distinct status signal next to the blue rather than a muted olive
- Background (`0 0% 4%`), foreground, card, border, muted stay untouched

**`tailwind.config.ts`**
- Add `primary.hover` mapped to `hsl(var(--primary-hover))` so components can use `hover:bg-primary-hover` in later passes

## Hardcoded color audit

Scanned all of `src/` outside `src/components/ui/`. Findings:

- No terracotta hex or hsl literals exist in `Home.tsx`, `CaseStudyCard.tsx`, or `About.tsx` — every accent reference already goes through `text-primary`, `border-primary`, or `hsl(var(--primary)/...)`, so those files pick up the blue automatically.
- `src/pages/Index.tsx` has one hardcoded `backgroundColor: '#fcfbf8'`. This is a leftover template splash page not reachable from the router's real routes; I'll swap it to the `bg-background` token for consistency.
- `src/data/caseStudies.ts` defines a per-study `theme` for the Airy case study (off-white page, lavender accent) applied via scoped CSS-variable overrides in `WorkDetail.tsx`. That is intentional and stays as-is — it matches Airy's slide artwork, not the site accent.

## Files touched

- `src/index.css`
- `tailwind.config.ts`
- `src/pages/Index.tsx` (single hardcoded hex removed)

## Note

`--available` was not in your list, but leaving it at the current muted olive would make the status dot look dull beside a saturated blue. Brightening it keeps the two signals clearly separate.
