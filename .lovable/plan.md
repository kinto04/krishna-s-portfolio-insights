# Humanize the About Page Copy

## Goal
Replace the AI-tinged section titles and interest descriptions on the About page with simpler, more direct language that sounds like the actual person behind the portfolio.

## What we'll change

### 1. Simplify section titles in `src/pages/About.tsx`
- **"Off the clock"** heading → remove the heading and rely on the existing eyebrow label **"Beyond work"**, or replace it with the simpler **"Outside work"**.
- **"Current Focus"** heading → replace with **"Right now"** to match its eyebrow and feel conversational.

### 2. Rewrite the "Beyond work" intro
Replace the flowy "chasing curiosity" line with a direct, plainspoken opening:
> "When I'm not designing, I'm usually taking photos, brewing coffee, or playing soccer."

### 3. Rewrite the coffee card copy
Make it specific and grounded without the generic "small daily ritual" framing:
> "I geek out on specialty coffee—exploring different roasts, tasting how origin and process show up in the cup, and experimenting with brewing methods."

### 4. Rewrite the team sports card copy
Keep it casual and concrete:
> "I love team sports. I led an intramural soccer team in undergrad and still play pickup games with friends whenever I can."

## Files to change
- `src/pages/About.tsx` — update headings and three short paragraphs; no layout or visual changes.

## Out of scope
- No new sections, images, or routes.
- No changes to the bio, experience, education, or contact blocks.
