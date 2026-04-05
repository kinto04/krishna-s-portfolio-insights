

# Portfolio Update Plan — Applying Brief v3

The uploaded brief has significant differences from the current build. Here's what changes and what stays.

## Key Changes

### 1. Design System Overhaul — Warm Minimal

The current site uses a cold black/white palette with indigo accent. The brief calls for a warm palette:

- **Background**: `#FAF8F4` (warm off-white) instead of `#FAFAFA`
- **Text**: `#1C1917` (warm near-black) instead of cold `#1A1A1A`
- **Secondary text**: `#6B5E54` (warm brown-gray)
- **Card surfaces**: `#F0EBE1` (warm cream)
- **Accent**: Terracotta `#C1683A` instead of indigo
- **No pure white anywhere**

### 2. Typography — Playfair Display + Inter

- Add **Playfair Display** (serif) for headings — editorial, confident feel
- Keep **Inter** for body text
- Scale: Hero 72-96px, H1 48px, H2 32px, Body 17px/1.75, Captions 13px uppercase tracked
- Generous spacing: section padding 96-120px vertical

### 3. Navigation Changes

- Links: **Work, Stories, About** (drop Resume from nav, drop Contact — it goes in About/Footer)
- Add subtle "Available for Work" badge with muted green dot on homepage

### 4. Page Restructuring

| Current | Updated |
|---------|---------|
| `/blog` | `/stories` — renamed, with category filter tabs (Photography, Deep Dives, Essays) |
| `/resume` | Removed as standalone page — link to PDF download from About |
| `/contact` | Removed as standalone page — contact info moves to About + Footer |
| No About page | `/about` — new page with bio, education, current focus, links |

### 5. Homepage Updates

- Hero heading in Playfair Display serif — "Product Manager. Designer. Builder."
- Add "Available for Work" badge (muted green dot + text)
- Stories teaser section instead of "Recent Writing"
- Footer: add GitHub link alongside LinkedIn and Email

### 6. Case Study Detail Restructure

Current: Overview, Problem, Approach, Outcome
Updated per brief:
1. Header — project name, role, year, tools
2. Project Goal — one bold centered statement
3. My Role — 3 key responsibilities
4. Impact & Deliverables
5. Process
6. Challenges & Mitigations
7. Outcome

Add `tools`, `year`, `goal`, `impact`, `process`, `challenges` fields to case study data.

### 7. Stories (formerly Blog)

- Card grid layout with cover image placeholder, title, date, category tag
- Category filter tabs at top
- Individual post: centered ~65ch column, support for full-bleed images
- Update blog data: categories become Photography, Deep Dives, Essays
- Update routes from `/blog` to `/stories`

### 8. Case Study Data — Reorder

Per brief, NectarCares comes first, then Nectar.ai (swapped from current order).

### 9. Location Update

Change "Based in Chicago" to "Based in New York, NY" per the brief.

## Files Modified

- `src/index.css` — warm color tokens, Playfair Display font import, typography scale
- `tailwind.config.ts` — add font family config for serif/sans
- `src/components/Navbar.tsx` — update nav links (Work, Stories, About), remove Resume/Contact
- `src/components/Footer.tsx` — add GitHub link
- `src/pages/Home.tsx` — warm serif hero, "Available for Work" badge, Stories teaser, location update
- `src/pages/Work.tsx` — minor styling updates
- `src/pages/WorkDetail.tsx` — new section structure (Goal, Role, Impact, Process, Challenges, Outcome)
- `src/data/caseStudies.ts` — add new fields, reorder, update NectarCares role description
- `src/data/blogPosts.ts` — rename to stories categories, add `category` field
- `src/components/CaseStudyCard.tsx` — warm styling
- `src/components/BlogPostCard.tsx` — grid card layout with cover image placeholder
- `src/App.tsx` — update routes: `/stories`, `/stories/:slug`, `/about`, remove `/resume`, `/contact`

## New Files

- `src/pages/About.tsx` — bio, education, current focus, resume PDF link, contact links
- `src/pages/Stories.tsx` — replaces Blog with category filter tabs and grid layout
- `src/pages/StoryPost.tsx` — replaces BlogPost with wider image support

## Removed Pages

- `src/pages/Resume.tsx` — content moves to About
- `src/pages/Contact.tsx` — content moves to About + Footer

