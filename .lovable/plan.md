## 1. Reorder case studies

In `src/data/caseStudies.ts`, reorder the `caseStudies` array to: **Jointly → Airy → Nectar.ai**. This automatically updates the Work index page, Home featured grid, and the "Next case study" link cycle on each detail page.

## 2. Make the Airy case study cohesive

The Airy slides are a soft off-white canvas with lavender/lilac accents, so the current dark page chrome fights them. We'll give the Airy detail page a per-study light theme that matches the slides, while leaving Jointly and Nectar.ai untouched.

### Approach

Add an optional `theme` field to the `CaseStudy` interface:

```ts
theme?: {
  background: string;   // page bg, e.g. "#F5F1EC"
  foreground: string;   // body text
  muted: string;        // muted text
  border: string;       // hairlines
  card: string;         // image frame bg
  primary: string;      // accent (chapter numbers, links)
};
```

Set Airy's theme to a warm off-white palette pulled from the slides:
- background `#F4F0EA` (warm paper)
- foreground `#1F1B2E` (deep ink, near-black with violet undertone)
- muted `#6B6577`
- border `#E2DCD2`
- card `#ECE6DD`
- primary `#7C6BB0` (lavender accent from slides)

In `src/pages/WorkDetail.tsx`, when `study.theme` exists, wrap the article in a `<div style={{ ... CSS vars override ...}}>` that overrides the Tailwind semantic tokens (`--background`, `--foreground`, `--muted-foreground`, `--border`, `--card`, `--primary`) for that subtree only. Also set the wrapper's `background-color` so the themed surface extends edge-to-edge behind the article (negative-margin / full-bleed band, or apply via a wrapping section with `bg-[var(--background)]`).

Because every existing element already uses semantic classes (`text-foreground`, `bg-card`, `border-border`, `text-primary`, etc.), no component markup needs to change — the Hero, Overview, chapter numbers, captions, metric divider, reflection quote bar, and "Next case study" card all retheme automatically.

### Small refinements for Airy specifically

- Hero image: keep the rounded frame but set its `bg-card` to the themed card color so letterboxing on the 21:9 crop blends in.
- "Next case study" card at the bottom: stays themed (light) to avoid a jarring transition; the Layout's footer/nav remain the global dark theme — the themed band ends with the article.

### Technical notes

- CSS variables in `src/index.css` are HSL triplets (e.g. `--background: 0 0% 4%;`). The override needs to use the same HSL-triplet format so Tailwind's `hsl(var(--background))` resolves correctly. Convert each hex above to `H S% L%` and apply via inline `style` on the wrapper.
- Scope the override to the article wrapper only so the global Navbar/Footer keep the site's dark identity.
- No changes needed to `Blocks.tsx` or `CaseStudyCard` — Airy's card on Work/Home keeps the dark grid styling.

## Files to change

- `src/data/caseStudies.ts` — reorder array; add `theme` to interface; add theme object to Airy.
- `src/pages/WorkDetail.tsx` — read `study.theme`, render a themed wrapper around the `<article>` that overrides the semantic CSS variables and paints the background.
