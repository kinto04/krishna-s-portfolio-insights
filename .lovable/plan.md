# Plan: Give the About page character

## Goal
Make the About page feel like a person, not a resume — add photography, stronger visual identity, and a couple of personal sections, without breaking the site's dark minimal system.

## Changes

### 1. Hero: bigger, more personal headshot treatment
- Upgrade the header from a small circular avatar row to a more editorial intro: larger headshot (rounded-lg, subtle primary border ring, slight rotation/hover straighten), name + role, and a short personal one-liner (e.g. "Designer · Engineer · Photographer — New York").
- Add a soft cursor-reactive glow behind the headshot, reusing the existing pointer-glow pattern from the home hero (subtle, reduced-motion safe).

### 2. Photography strip: "Off the clock"
- New section after the bio prose titled **"Off the clock"** (eyebrow: "Photography").
- A horizontal photo strip / 3-up grid using the best Varanasi shots already in the repo (`flower-market.jpg`, `alley-evening.jpg`, `quiet-afternoon.jpg`, `sugarcane.jpg` — pick 3–4).
- Each image: rounded-lg, subtle hover scale, short caption. Link card at the end: "More in Scenes from Varanasi →" routing to the story.
- One line of copy tying photography to design practice (observation, noticing people).

### 3. Experience timeline: visual rhythm
- Keep the left-border timeline but add a small year "badge" column so the chronology scans visually, and keep the hover border accent. (Light touch — no content changes.)

### 4. Personal details row
- Add a compact "A few more things" line-grid near Current Focus: location (New York), languages or interests, current read/obsession — drawn only from what's already known (street & travel photography, AI tooling, cooking/travel if confirmed).

### 5. Consistency
- Apply the same `.section-y` / `.label-eyebrow` rhythm, scroll `Reveal` wrappers on new sections, and keep all colors semantic (no hardcoded values).

## Technical notes
- Files: `src/pages/About.tsx` (main edits), no new data files needed; images already exist under `public/images/varanasi/`.
- Reuses existing `Reveal`, `Pill`, pointer-glow hook — no new dependencies.
- Nothing removed; all existing bio/experience/education copy stays as-is.

## Open question
- For the personal-details row, confirm 2–3 facts to include (e.g. languages spoken, favorite travel spot, current hobby) — otherwise I'll keep it to location + photography + AI tinkering only.
