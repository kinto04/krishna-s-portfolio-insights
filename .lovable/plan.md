# Hero Subline & Education Refinement

## Goal
Improve the hero subline so it reads as one flowing sentence instead of two clipped statements, and make the education line feel intentional rather than an afterthought.

## Proposed changes

### 1. Hero subline rewrite
Replace the current subtitle in `src/pages/Home.tsx`:

> Engineer and designer. I've designed and built consumer AI products across e-commerce, healthcare, and travel.

with a complete, smoother sentence:

> I'm an engineer and designer who's built consumer AI products across e-commerce, healthcare, and travel.

This keeps the same information (engineering + design background, AI products, three domains) but removes the abrupt period and repetition of "design/designer".

### 2. Education line visual refinement
Replace the plain muted paragraph with a compact, structured education row:

- Render as a flex row with a small vertical divider between the two degrees.
- Add a subtle `GraduationCap` icon from `lucide-react` at 14px, muted.
- Keep the text at `text-sm text-muted-foreground/70` but tighten spacing.
- Wrap the whole element in a `max-w-xl` so it aligns with the subtitle and CTAs.

Example structure:

```text
[icon]  MS Engineering Design Innovation, Northwestern  ·  BS Computer Science, Purdue
```

The icon and divider give it the same quiet hierarchy as a résumé header line without competing with the subtitle.

## Files touched
- `src/pages/Home.tsx` only.

## Out of scope
- No changes to the headline, CTAs, ExpertiseConstellation, or case-study cards.
- No new components or dependencies beyond the existing `lucide-react` icon set.
