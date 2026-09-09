# Hero Image Motion Plan

## Goal
Add a tasteful, subtle interaction to the single hero image on the landing page so it feels alive without becoming decorative noise.

## Current State
The hero already has a 20s slow drift (`heroImageDrift`) and a hover zoom. The motion is so gentle it is almost invisible, which is good, but the image currently lacks a human response to the visitor.

## Proposed Approach: Soft Cursor-Reactive Reveal
Introduce a quiet cursor-following spotlight inside the image frame.

- A radial gradient overlay tracks the cursor position at a low lerp speed (smooth follow).
- The gradient subtly lightens/darkens a small area of the image, as if a soft light is moving across it.
- No blur, no particles, no rotation, no scale changes beyond what already exists.
- Disabled when `prefers-reduced-motion` is active.
- Implementation uses a single overlay `div` and React state for mouse position; the image itself stays untouched.

## Alternative Options

### Option A: Subtle 3D Tilt
The image tilts slightly (max 4–5deg) toward the cursor using `perspective` + `rotateX/Y`.
- More playful and dimensional.
- Slightly more "effect-y"; can feel like a card.

### Option B: Slow Breathing Border
A thin border gradient shifts hue/position very slowly around the image frame.
- Adds a pulse of life without touching the image.
- Less about interaction, more about ambient motion.

### Option C: Combined Soft Reveal + Tilt
Layer the cursor spotlight with a very restrained tilt (max 3deg).
- Maximum craft, but risk of feeling over-produced.

## Recommendation
Proceed with the **Soft Cursor-Reactive Reveal** (default). It is the most restrained, responds to the user, and complements the existing drift without competing.

## Files to Update
- `src/pages/Home.tsx` — add cursor-tracking state and overlay markup around the hero image.
- `src/index.css` — add `.hero-image-spotlight` styles and reduced-motion guard.

## Acceptance Criteria
- Image still loads and centers correctly on desktop and mobile.
- Spotlight follows cursor smoothly inside the image bounds.
- No layout shift or jank.
- Motion disabled for `prefers-reduced-motion`.
