# Add Coffee & Sports to the About Page

## Goal
Make the About page feel more personal by adding two new interests — specialty coffee and team sports — into a single, cohesive "Beyond work" section that sits alongside the existing photography block.

## Requirements from discussion
- Placement: one combined "Beyond work" section rather than separate cards.
- Sports framing: casual (playing soccer, loving team sports).
- Coffee copy: general specialty-coffee language, no specific shop name.
- Visuals: generate on-brand illustrations for coffee and sports; reuse existing Varanasi photography for the travel/photography part.

## What we'll build

### 1. New "Beyond work" section in `src/pages/About.tsx`
- Position it after the existing photography strip and before Experience.
- Use existing section primitives: `Reveal`, `label-eyebrow`, `t-section-title`.
- Intro paragraph that ties the three interests together (photography, coffee, sports) under the idea of curiosity, people, and slowing down.
- Three compact visual cards in a responsive grid:
  1. **Photography & film** — existing Varanasi photo strip + link to the full story.
  2. **Specialty coffee** — generated illustration + short paragraph about exploring coffee, tasting, brewing, and the ritual of it.
  3. **Team sports** — generated illustration + short paragraph about intramural soccer and loving the energy of bringing people together for a common cause.

### 2. Copy direction
- Sports: "I'm a big believer in team sports — there's nothing like the energy of people working toward the same goal. I led an intramural soccer team in undergrad and still love any chance to get on the field with friends."
- Coffee: "I'm deep into specialty coffee. I love exploring roasts, learning how origin and process show up in the cup, and treating brewing like a small daily ritual."
- Intro: "Outside of work I'm usually chasing curiosity — whether that's through a camera, a coffee cup, or a pickup game."

### 3. Generated illustrations
Generate two small landscape illustrations (≈ 800×600) saved to the project:
- `public/images/about/coffee.png` — warm, minimal, dark-themed still life: a pour-over setup, coffee cup, beans. Iris-violet accent lighting, muted palette, no text.
- `public/images/about/sports.png` — minimal illustration of a soccer ball / cleats / field scene at dusk. Same dark, muted palette with an iris-violet accent glow.

### 4. Visual treatment
- Cards use the existing `.surface` utility (rounded-lg, border, subtle background).
- Images inside cards get the same hover scale treatment as the photography grid (`group-hover:scale-105`).
- Keep mobile first: stack cards 1 column on mobile, 3 columns on `sm` and up.
- Maintain existing type scale and spacing rhythm; no new utility classes needed unless the grid calls for one.

## Files to change
- `src/pages/About.tsx` — add the new section, update imports if needed.
- Generate `public/images/about/coffee.png`.
- Generate `public/images/about/sports.png`.

## Out of scope
- No new routes or navigation changes.
- No changes to the homepage, case studies, or footer.
- No backend or data file changes.