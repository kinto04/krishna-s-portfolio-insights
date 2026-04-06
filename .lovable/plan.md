

# Bring Personality & Real Images into the Portfolio

## The Problem

The current build is clean but feels generic -- warm cream background, no images, no motion. Your Framer portfolio had a **dark theme**, real project visuals, and Framer's built-in animations that gave it life. We need to bring that energy back while keeping the architecture.

## What Changes

### 1. Dark Theme (Default)

Switch the entire site to a dark palette inspired by the Framer version:

- **Background**: `#0A0A0A` (near-black)
- **Foreground/text**: `#FAFAF9` (warm white)
- **Muted text**: `#A8A29E` (warm gray)
- **Card surfaces**: `#171717` (dark gray)
- **Borders**: `#262626`
- **Accent**: Keep Terracotta `#C1683A` -- it pops beautifully on dark

Update CSS variables in `src/index.css`. No light/dark toggle for now -- dark is the identity.

### 2. Pull in Real Images from GitHub

Download project cover images and case study detail images from the Framer repo and place them in `public/images/`. Use the raw GitHub URLs as the source.

**Cover images** (for cards on Home + Work pages):
- Nectar.ai: `vybyrthkmzby5rgc0wcwhoacmai.webp`
- Northwestern Medicine: `j6g8dxzfacf3uedeafwcupybxu.png`
- Airy/Clinical Therapists: `ydnsfcgdfyybptikhi77i1h9ay.png`
- Airline Travel: `b5e5jhjsubr4uyzipwyrnjmywp4.png`

**Nectar.ai detail images** (6 images for the case study page):
- Overview screenshot, research charts, prototyping flow, RAG architecture, challenges diagram

**Northwestern Medicine detail images** (9 images for the case study page):
- NM logo, impact diagram, service blueprint, prototypes, focus group photos, research artifacts

Add a `coverImage` and `images` array field to the `CaseStudy` interface.

### 3. Scroll Animations

Add subtle fade-in-up animations that trigger as elements enter the viewport. Use Intersection Observer (no library needed):

- Hero text staggers in on load
- Project cards fade up on scroll
- Case study sections animate in sequence
- "My Stack" tools slide in

Create a reusable `useInView` hook and apply `animate-fade-in` classes.

### 4. Hover Effects on Cards

- Project cards: slight scale-up + shadow lift on hover
- Image zoom effect inside card frame on hover
- Smooth transition (200-300ms)

### 5. "My Stack" Section on Homepage

The Framer site had a tools/stack section showing Figma, Lovable, Perplexity, Miro, Google Docs. Add this between "Selected Projects" and "Stories" on the homepage as a horizontal scroll or grid of small icon cards.

### 6. Northwestern Medicine Case Study -- Real Content

Replace placeholder text with the full content extracted from the Framer repo:
- Goal: "Make it easier for clinicians to diagnose and treat pediatric patients with potential Disorders of Gut-Brain Interaction (DGBI)"
- Role: Design Lead, Product Manager
- Tools: Figma, Miro, Lovable, Google Sheets
- Year: 2025
- Full process details (9 focus group participants, 1 in-context observation, 4 user interviews)
- Challenges and mitigations
- Learnings and next steps

## Files Modified

- `src/index.css` -- dark color tokens
- `src/data/caseStudies.ts` -- add `coverImage`, `images` fields; update NW Medicine content
- `src/components/CaseStudyCard.tsx` -- render cover image, hover effects
- `src/components/BlogPostCard.tsx` -- hover effects
- `src/pages/Home.tsx` -- scroll animations, "My Stack" section, staggered hero
- `src/pages/WorkDetail.tsx` -- render inline images in process/challenges sections
- `src/pages/Work.tsx` -- card animations

## New Files

- `src/hooks/useInView.ts` -- Intersection Observer hook for scroll animations
- `public/images/` -- downloaded project images (covers + detail)

## Technical Notes

- Images will be downloaded from `https://raw.githubusercontent.com/kinto04/Framer-Portfolio/main/images/` during implementation and placed in `public/images/`
- Scroll animations use CSS + Intersection Observer -- no external animation library
- Dark theme is set at the CSS variable level so all existing components automatically adapt

