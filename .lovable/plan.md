## Two quick fixes

### 1. Remove the orange hero gradient
The warm radial glow reads as generic "AI app" styling. Replace with a subtle neutral top-down vignette (very faint white at ~3-4% opacity from top center) — adds depth without color. Keep the noise texture. File: `src/index.css` (`.hero-glow` only).

### 2. Make case study cards uniform height
The middle card runs taller because subtitles vary in length. Fix:
- Make the card a flex column with `h-full`, so all 3 cards in the row match the tallest.
- Clamp title to 2 lines with a fixed min-height (handles 1- vs 2-line titles).
- Clamp subtitle to 2 lines with a fixed min-height.
- Pin the tag chips + hover CTA to the bottom with `mt-auto`.

Files: `src/components/CaseStudyCard.tsx`, `src/index.css` (add `.line-clamp-2` utility).

No content or layout changes beyond this.