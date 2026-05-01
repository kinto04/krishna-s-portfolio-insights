## Goals

1. Show the "Jump to" chapter nav on **Airy** and **Nectar.ai** (currently only Jointly has it).
2. Make the **Airy** case study flow uniform — no more small image + side-text rows. Slides become full-width with caption underneath.
3. Strengthen the visual hierarchy so a scrolling reader can clearly tell apart primary section headers vs. slides/sub-content.

## Why "Jump to" is missing today

In `WorkDetail.tsx`, `Overview` returns an early fallback (just the summary) whenever `study.overview` is absent. Airy and Nectar.ai don't have an `overview` block, so the chapter chips never render even though the anchors are computed.

## Changes

### 1. `src/pages/WorkDetail.tsx`

- **Always render the "Jump to" strip when anchors exist**, even for studies without a full `overview` object. Refactor `Overview` so the chapter nav is a separate concern that renders whenever `anchors.length > 0`.
  - When `study.overview` is present → keep the current Context / My Role / Outcome grid + the Jump-to row beneath it (Jointly unchanged).
  - When `study.overview` is absent → render the summary card *and* the Jump-to strip below it on the same border-top section (Airy, Nectar.ai).
- **Force every slide-based case study to use full-width slides.** Update `SlideBlock` to always render the full-width layout (image on top, caption below). Drop the side-by-side `md:grid-cols-5` branch entirely. This removes the "small image with text beside it" pattern from Airy and Nectar.ai in one place, and matches the look the user already likes from Jointly's blocks-based renderer.
- **Stronger primary section headers** (applies to `ChapterBlock`, the slide-path renderer):
  - Add a top divider rule (`border-t border-border pt-10`) above each labeled chapter so primary sections visually separate from the previous section's content.
  - Add a small uppercase eyebrow (e.g. `CHAPTER 02`) above the serif title for extra scanability.
  - Increase top spacing (`mt-24` → `mt-28`) and keep the large serif numeral + 3xl/4xl serif title.
  - Captions under slides become the "sub-content" tier: smaller (`text-xs`), muted, max-width constrained — visually distinct from chapter intros (`text-base`, foreground-leaning).
- Mirror the same divider + eyebrow treatment in `ChapterHeader` inside `Blocks.tsx` so Jointly stays consistent with the new hierarchy.

### 2. `src/components/casestudy/Blocks.tsx`

- Update `ChapterHeader` to match the new primary-section treatment (top divider, uppercase "Chapter NN" eyebrow, same serif title + intro). Jointly already uses chapters, so it gets the upgrade for free.

### 3. `src/data/caseStudies.ts`

- No structural changes required. Airy and Nectar.ai already have `sectionLabel` markers on the right slides, which become the chapter anchors.
- Optional small polish: add a one-line `sectionIntro` to a few of Airy's sections (e.g. The Problem, The Solution, The Product, Validation) so each chapter has a brief lead-in like Jointly's. I'll add concise intros that don't duplicate slide captions.

## Visual hierarchy summary (after changes)

```text
══════════════════════════════════════  ← top divider
CHAPTER 02                              ← uppercase eyebrow (muted)
02  The Problem                         ← serif numeral + serif 3xl/4xl title
    Short intro paragraph here.         ← base muted-foreground lead

[ full-width slide image ]              ← uniform full-bleed visual
small muted caption beneath             ← xs muted = sub-content tier

[ full-width slide image ]
small muted caption beneath
══════════════════════════════════════  ← next chapter divider
CHAPTER 03
…
```

## Out of scope

- Migrating Airy/Nectar.ai from `slides` to the richer `blocks` system (bigger rewrite; not needed to solve the stated problems).
- Changing the Jointly case study's content.
