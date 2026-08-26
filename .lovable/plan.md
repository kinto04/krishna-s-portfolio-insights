# Consistent spacing and typography

## What's off today

- **Home hero** uses one-off padding (`pt-16 pb-16 sm:pt-32 sm:pb-24`) instead of the shared `.section-y` rhythm.
- **"Selected work" section** has only bottom padding (`pb-16 sm:pb-24`) and no top padding, so its eyebrow/heading sits right under the constellation graphic with almost no breathing room.
- **Case study page** (`WorkDetail`) opens with `pt-10 pb-16 sm:pb-24` — a third distinct rhythm.
- **Heading scale drifts**: Home h1 is `text-4xl/6xl/7xl`, About and Work h1 are `text-4xl/5xl`, case study h1 is `4xl/5xl/6xl`. Section h2s are mostly `2xl/3xl` but the case study chapter h2 is `3xl/4xl/5xl`.
- **About page** uses hand-rolled `mb-12 / mb-16 / pt-10` gaps between blocks rather than one rhythm value; its subtitle reads "Product Manager · Designer · Engineer" in a different type treatment than other page subheads.

## What I'll do

1. **One vertical rhythm.** Add a small set of rhythm utilities in `src/index.css` alongside the existing `.section-y`:
   - `.section-y` (unchanged, 4rem / 6rem) for standalone sections
   - `.section-y-tight` for stacked sections that share a background (top spacing preserved, not zeroed)
   - `.stack-lg` for the gap between blocks inside a page
   Apply `.section-y` to the Home hero and to the "Selected work" section so it gets real top spacing — this directly fixes the cramped fold.

2. **One heading scale.** Define page-title (`h1`) and section-title (`h2`) sizes as reusable classes and apply them on Home, About, Work, and WorkDetail. Hero h1 stays the one intentional exception (larger), everything else aligns to `4xl/5xl` for page titles and `2xl/3xl` for section titles.

3. **One body scale.** Body copy `text-base leading-relaxed text-muted-foreground`, secondary/footnote `text-sm`, eyebrows always `.label-eyebrow` with the same `mb-3`.

4. **About page cleanup.** Replace ad-hoc `mb-12/16` and `pt-10` gaps with the shared rhythm, and match its intro subtitle treatment to the rest of the site.

5. **Case study page.** Bring the article's top/bottom padding onto the shared rhythm and align chapter headings to the section-title scale (keeping the numbered editorial treatment).

## Technical notes

Files touched: `src/index.css` (rhythm + heading utilities), `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/pages/Work.tsx`, `src/pages/WorkDetail.tsx`, and `src/components/ExpertiseConstellation.tsx` (bottom spacing so it hands off cleanly to Selected work). No content or copy changes, no data model changes.
