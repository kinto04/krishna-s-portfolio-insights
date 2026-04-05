

# Krishna Suresh — Portfolio & Blog

## Overview
A minimal, clean portfolio site with generous whitespace, black/white palette, and a subtle accent color (warm indigo or muted blue). Pages: Home, Case Studies, Blog/Stories, Resume, Contact.

## Design System
- **Colors**: Near-white background (#FAFAFA), near-black text (#1A1A1A), subtle accent (indigo-600), light gray borders
- **Typography**: Inter or system sans-serif, large headings, comfortable reading line-height
- **Spacing**: Generous padding, max-width ~720px for content, ~1100px for layouts

## Pages & Structure

### 1. Home (`/`)
- Name + one-liner ("Product Manager. Builder. Writer.")
- Brief intro paragraph (2-3 sentences, conversational tone)
- Featured case studies (3 cards linking to case study pages)
- Latest blog posts (2-3 recent entries)
- Simple nav: Home, Work, Blog, Resume, Contact

### 2. Case Studies (`/work` + `/work/:slug`)
- List page: Grid of project cards with title, one-liner, and tag
- Detail pages for: Nectar.ai, NectarCares, Northwestern Medicine, Jointly Travel, Southwest Airlines, Yeti
- Each detail page: hero, problem/context, approach, outcome, role callout
- Placeholder content — accurate titles and roles, but marked for Krishna to fill in details

### 3. Blog / Stories (`/blog` + `/blog/:slug`)
- List page with post cards (title, date, tag, excerpt)
- Detail page with clean article layout
- Tags/categories: Product, AI, Photography, Tech
- 2-3 hardcoded sample posts as placeholders

### 4. Resume (`/resume`)
- Clean typographic layout of experience, education, skills
- Download PDF button (placeholder link)

### 5. Contact (`/contact`)
- Simple message: email link, LinkedIn link
- Optional lightweight contact form

## Navigation
- Top nav bar: logo/name left, links right
- Mobile: hamburger menu
- Sticky, minimal, with subtle bottom border

## File Structure
- `src/pages/` — Home, Work, WorkDetail, Blog, BlogPost, Resume, Contact
- `src/components/` — Navbar, Footer, CaseStudyCard, BlogPostCard, Layout
- `src/data/` — caseStudies.ts, blogPosts.ts (hardcoded content)
- Update App.tsx with all routes
- Update index.css with new color tokens

## Technical Notes
- React Router for all pages
- No backend needed — all content hardcoded in TypeScript files
- Responsive throughout
- Smooth page transitions via CSS
- SEO-friendly document titles via useEffect

