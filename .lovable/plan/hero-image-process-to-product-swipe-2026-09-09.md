# Hero image: "Process to Product" swipe

Replace the cursor spotlight on the homepage hero image with a hover interaction: a clean, glassmorphic AI-product panel slides over the right portion of the workshop photo — messy human process on the left, polished product on the right.

## Changes

### `src/pages/Home.tsx`
- Remove the spotlight code: `heroImageRef`, `handleHeroImageMove`, `handleHeroImageLeave`, the `--spotlight-*` custom properties, and the `.hero-image-spotlight` overlay div.
- Keep the existing slow drift + hover zoom on the image.
- Add an absolutely positioned "product panel" overlay inside the hero image frame:
  - A small glassmorphic card (backdrop blur, subtle border, background tint) covering roughly the right 45% of the image.
  - Content: a minimal AI-product UI snippet, built in pure markup (no new assets) — e.g. an eyebrow like "AI synthesis", 2–3 short insight rows with accent dots ("3 themes clustered", "Sentiment: positive", "Journey map drafted"), and a thin progress/spark line. Copy stays generic and honest — it illustrates, not claims.
  - Default state: translated off-canvas to the right with opacity 0.
  - Hover/focus on the frame: panel slides in with a smooth transform + opacity transition (~400ms, project easing).
- Accessibility & mobile:
  - Add `group-focus-visible` support so keyboard users can trigger it.
  - On touch devices (no hover), show the panel at reduced opacity or reveal on tap via a simple `useState` toggle on click.
  - Panel text is decorative-illustrative; keep it out of the tab order and mark `aria-hidden` so it doesn't pollute the alt text.

### `src/index.css`
- Remove the `.hero-image-spotlight` rules and its reduced-motion entry.
- Keep `heroImageDrift` and the hover zoom.
- Add the panel slide transition inside the existing reduced-motion guard: under `prefers-reduced-motion`, the panel appears statically (no slide animation) at low opacity or is hidden.

## Verification
- `bunx tsc --noEmit` passes.
- Playwright: desktop screenshot at rest and while hovering the hero image (panel visible, no layout shift); mobile screenshot (no overflow, tap/toggle state sane); reduced-motion run.
