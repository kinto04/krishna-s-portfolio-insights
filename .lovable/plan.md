# Tighten Portfolio for Experience Design Role

Three changes: remove Stories, remove My Stack, replace the placeholder Jointly entry with a real, detailed case study sourced from the Jointly. sister project.

## 1. Remove Stories

- `src/components/Navbar.tsx` — drop the `/stories` link from `navLinks`
- `src/pages/Home.tsx` — remove the entire "Stories Teaser" section and the `BlogPostCard` / `blogPosts` imports
- `src/App.tsx` — remove `/stories` and `/stories/:slug` routes plus the `Stories` and `StoryPost` imports
- Leave the page files (`Stories.tsx`, `StoryPost.tsx`, `BlogPostCard.tsx`, `blogPosts.ts`) on disk untouched so they're easy to restore later

## 2. Remove My Stack

- `src/pages/Home.tsx` — delete the "My Stack" section and the `stackTools` array

## 3. Rewrite the Jointly Case Study

Update the `jointly-travel` entry in `src/data/caseStudies.ts` with real content drawn from the Jointly. sister project (Brand Bible + product surface). The case study is framed for an experience design audience: research → design system → product surfaces → outcomes.

**Key content to bake in:**

- **Title / subtitle**: "Jointly." / "Group travel made simple — a research-led mobile product"
- **Role**: Founder, Product Designer & PM (Master's Thesis, Northwestern)
- **Tags**: Experience Design, Mobile, AI, Service Design
- **Tools**: Figma, Lovable, Supabase, OpenAI, Mapbox
- **Overview**: Jointly. absorbs the social friction of group travel — it sends the reminders, aggregates preferences, and turns scattered group chats into a shared itinerary. Designed and built end-to-end as a master's thesis at Northwestern.
- **Goal**: Eliminate the coordination tax of group travel — the chasing, the polling, the "did anyone book the Airbnb?" — by giving groups one warm, opinionated source of truth.
- **Responsibilities (3)**:
  1. Led generative + evaluative research with frequent group travelers to map the coordination journey and pain points
  2. Built the Jointly. brand system (Warm Ink + Terracotta palette, Plus Jakarta Sans / Inter type, two-tier color rule for structure vs. engagement) and component library
  3. Designed and shipped core surfaces — Trip dashboard, Ideas board with voting, Smart Itinerary, Budget split, AI suggestions
- **Impact**: Editorial, warm product identity translated into a working mobile-first app. Two-tier color system (Warm Ink for structure, Terracotta for engagement) gives every screen a clear action hierarchy. AI-attributed micro-copy ("Jointly suggested…") makes automation feel like a helpful friend, not a bot.
- **Process**: Started with journey mapping of past group trips with 8+ participants. Identified that the friction isn't planning — it's the social cost of nagging. Reframed the product as a "warm friend who's organized the trip before." Built a brand bible first (voice, tone, color, type) so every design decision had a reference. Prototyped in Figma, then shipped in Lovable with Supabase + OpenAI for AI suggestions.
- **Challenges**:
  - *Group dynamics*: Polling features felt cold in early tests. Mitigation: redesigned voting as terracotta "ideas" with warm copy instead of forms.
  - *AI trust*: Users dismissed generic suggestions. Mitigation: always attribute AI to Jointly. ("Jointly suggested a 6pm dinner") so it reads as a curated recommendation, not a guess.
  - *Scope as a solo build*: Mitigation: ruthless MVP — Trips, Ideas, Itinerary, Budget. Cut everything else.
- **Outcome / Learnings**: A brand-led product where design system and product strategy were built in lockstep. Validated that warmth + opinion beats neutrality in coordination tools — people want a friend, not a spreadsheet.
- **coverImage**: keep `/images/b5e5jhjsubr4uyzipwyrnjmywp4.png` (also remove the same image from the Southwest entry's `coverImage` since it was a placeholder dupe — leave Southwest with no cover for now)
- **featured**: true (already set)

No new image assets — the sister project doesn't expose product screenshots in its public assets, so we'll keep the existing cover. Easy to add screenshots later by exporting from the Jointly. project.

## Files Modified

- `src/components/Navbar.tsx`
- `src/App.tsx`
- `src/pages/Home.tsx`
- `src/data/caseStudies.ts`

## What stays the same

- Dark theme, animations, hero variants (`?v=design` will be the link you share)
- Routing for `/work`, `/work/:slug`, `/about`
- All other case studies
