# About Page: Real Photos, Simpler Copy

## Goal
Make the "Beyond work" section feel real — swap the AI-generated illustrations for the actual photos, and cut the copy down to almost nothing.

## Changes

### 1. Use the uploaded photos
- Coffee card → the pop-up photo (making coffee at the pop-up I hosted).
- Sports card → the indoor soccer team photo.
- Photography card → keep the existing Varanasi shot.
- Photos get added as project assets and replace `/images/about/coffee.png` and `/images/about/sports.png` (the generated illustrations get deleted).
- Note: the latte/Araku photo is held in reserve — one photo per card keeps the grid clean. Say the word if you'd rather use that one for coffee.

### 2. Simplify the headings
- "Off the clock" → drop the heading; keep only the eyebrow **"Beyond work"**.
- "Current Focus" → **"Right now"** (matching its eyebrow, which is removed to avoid repeating).

### 3. Cut the copy to one line per card
- Remove the "chasing curiosity" intro paragraph entirely.
- Photography & film — "Street photography and filmmaking." + existing "Scenes from Varanasi →" link.
- Specialty coffee — "Pourover, or a cortado. Hosted a coffee pop-up."
- Team sports — "Soccer. Led an intramural team in undergrad."

## Files to change
- `src/pages/About.tsx` — image sources, headings, and card copy.
- Add the two uploaded photos as assets; remove the two generated illustration files.

## Out of scope
No layout, grid, or section-order changes. No edits to bio, experience, education, or contact.
