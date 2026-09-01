# Add Huelo case study (in progress)

## Goal
Add a new case study for Huelo, an AI-powered interior-design and shopping platform for urban renters. The study is still in progress and the full deck is not public, so the page should signal "in progress" and offer a one-click way to request the deck.

## Plan

### 1. Capture visual assets from huelo.co
- Use the agent gateway to capture the Huelo landing-page screenshot and key feature screenshots.
- Save optimized hero and cover images to `public/images/huelo/`.
- If high-resolution product UI shots are not cleanly downloadable, generate a clean cover mockup that matches the existing case-study card style.

### 2. Extend the case-study data model
- In `src/data/caseStudies.ts`, add optional fields to the `CaseStudy` interface:
  - `inProgress?: boolean`
  - `deckEmail?: string`
- These will drive the in-progress tag, banner, and "Request deck" CTA without hardcoding Huelo-specific text in components.

### 3. Write the Huelo case-study entry
Insert a new study at the top of `caseStudies` (or immediately after Jointly if Jointly should remain first) with:
- **slug:** `huelo`
- **title:** `Huelo`
- **subtitle:** AI-powered interior design and shopping platform for urban renters
- **role:** Founding UX Designer & AI Engineer
- **year:** 2026
- **context:** Ongoing
- **tags:** AI, Experience Design, Product Design
- **featured:** `false` initially (keep homepage curated; can flip to `true` if requested)
- **facts:** timeline `Ongoing`, team `Founding team`, role `Founding UX Designer & AI Engineer`, setting `New York`
- **toolkit:** e.g. Figma, Lovable, OpenAI, Replicate, Shopify
- **overview:** short context, role bullets, outcome placeholder
- **blocks:**
  1. The Challenge — renter pain points (can't renovate, visualization gap, decision paralysis, inspiration-to-purchase gap)
  2. Design Approach — core UI and product decisions for the shopping/design flow
  3. Where AI Powers the Design Experience — lead section; AI + platform architecture, user journey
  4. Reflection — what building an AI-native design tool taught me
- **inProgress:** `true`
- **deckEmail:** `work.krishnasuresh@gmail.com`

### 4. Update `CaseStudyCard` for in-progress state
- In `src/components/CaseStudyCard.tsx`, render an "In progress" pill next to the title when `study.inProgress` is true, using the existing Pill component.

### 5. Update `WorkDetail` page
- In `src/pages/WorkDetail.tsx`:
  - Add a top banner strip when `study.inProgress`: "Work in progress — full deck available on request."
  - Add a "Request deck" button that copies `study.deckEmail` to the clipboard and shows a brief inline confirmation (no external toast library needed).
  - Suppress or soften the "View live" CTA when the study is in progress; keep the link to huelo.co as a secondary action if useful.

### 6. Work-page ordering
- Decide final order after content is written. Default: Jointly, Airy, Northwestern Medicine, Nectar AI, Huelo — or place Huelo second-to-last before Nectar AI if it should feel current. Mention final ordering in implementation summary before building.

### 7. Verify
- Run `bunx tsc --noEmit` to confirm type safety.
- Open `/work/huelo` in the preview to check banner, copy-email flow, and image rendering.

## Out of scope
- Building a real contact form or backend for deck requests; email will be copied to clipboard.
- AI token-optimization section unless explicitly re-requested.
