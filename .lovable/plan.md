## Case Study Audit — Jointly (and a reusable template for all 3)

### What's working
- Strong content: clear problem, real research, named archetypes, shipped product, early signal.
- Good `sectionLabel` rhythm gives implicit chapters: Research → Users → Opportunity → Product → Early Signal.
- Captions are concise and outcome-oriented.

### What's not working
1. **It reads like a deck dump.** Every slide is the same width, same treatment, same vertical rhythm. There's no hierarchy — the hero image, a research chart, and a product screen all get equal visual weight.
2. **No narrative scaffolding.** A reader has to consume all 15 slides linearly to understand the project. There's no TL;DR, no chapter index, no way to skim.
3. **Chapters aren't real chapters.** `sectionLabel` is a tiny dot + text. It doesn't break the page or set up what's coming. Sections like "The Research" and "The Product" should feel like turning a page.
4. **Captions are buried.** They're 12px muted text under each image, easy to miss. Often the caption is the actual insight, the image is the supporting evidence.
5. **Header metadata gets lost.** Role / Year / Context sit in a single line above a wall of summary text. No visual anchor.
6. **No closing.** The case study just ends on the last image. No reflection, no "what I learned", no link to the next project.
7. **Mobile**: slides at full width on phone are tiny; UI screenshots become unreadable.

### Proposed redesign — a 4-part narrative structure

Rebuild `WorkDetail.tsx` around four named regions, applied to all case studies:

```text
┌─────────────────────────────────────────────┐
│ 1. HERO         large title + cover image   │
│                 + at-a-glance meta sidebar  │
├─────────────────────────────────────────────┤
│ 2. OVERVIEW     TL;DR card with: context,   │
│                 my role, outcome, chapter   │
│                 jump links                  │
├─────────────────────────────────────────────┤
│ 3. CHAPTERS     each sectionLabel becomes   │
│                 a real chapter with         │
│                 number, title, and intro    │
│                 paragraph                   │
├─────────────────────────────────────────────┤
│ 4. CLOSING      reflection + next project   │
└─────────────────────────────────────────────┘
```

#### 1. Hero (replaces current header)
- Full-bleed cover image with subtle dark gradient overlay, title + subtitle layered on top OR (alt) split layout: title on left, cover on right.
- Below hero: a clean meta strip — Role / Year / Context / Live link — as labeled columns, not crammed in one row.

#### 2. Overview block
- A bordered card right after the hero containing:
  - **Context** (1 sentence — what + where)
  - **My role** (bulleted: 3 things I owned)
  - **Outcome** (1 sentence — what shipped, what changed)
  - **Jump to chapter** chips that scroll-to each section
- This is the 30-second version. Recruiters who don't read the rest still get the story.

#### 3. Chapter sections (the real upgrade)
Group consecutive slides by `sectionLabel`. Each chapter renders as:
- A **chapter header**: large number ("01"), serif chapter title ("The Research"), and a short intro paragraph (new optional field `intro` on the section).
- The slides inside the chapter render in a **mixed layout** rather than uniform stack:
  - Slides with no caption → full-width image, minimal margin (visual beat).
  - Slides with a caption → **two-column**: image on one side (60%), caption + (optional) callout on the other (40%). Caption gets promoted from 12px muted to ~16px foreground with serif accent. Alternates side per slide for rhythm.
  - First slide of each chapter is always full-width to establish the chapter visually.
- Add a thin progress indicator down the left edge (sticky) showing chapter position.

#### 4. Closing block
- A "What I took away" card (1-2 sentences per study, new optional `reflection` field).
- "Next case study →" card with cover thumbnail of the next project in the array (loops).

### Schema additions (`caseStudies.ts`)

Add optional fields, fully backward compatible:

```ts
interface CaseStudy {
  // existing fields...
  overview?: {
    context: string;
    roleDetail: string[];   // 3 bullets
    outcome: string;
  };
  reflection?: string;
}

interface Slide {
  image: string;
  caption?: string;
  sectionLabel?: string;
  sectionIntro?: string;    // NEW: intro paragraph for the chapter
  fullWidth?: boolean;      // NEW: force full-bleed treatment
}
```

I'll populate these for **Jointly** (the audit subject) and leave the other two studies rendering with sensible defaults — you can fill them in when ready.

### Mobile behavior
- Two-column slide+caption collapses to stacked (image, then caption below) under `md`.
- Chapter numbers shrink and move inline with the chapter title.
- Hero overlay simplifies to a stacked title above cover.
- Sticky chapter rail hidden under `lg`.

### Files modified
- `src/pages/WorkDetail.tsx` — full rewrite around the 4-part structure
- `src/data/caseStudies.ts` — add optional schema fields, populate Jointly's `overview` + `reflection` + chapter `sectionIntro`s
- `src/components/CaseStudyChapter.tsx` (NEW) — chapter renderer with mixed-layout slide grouping
- `src/components/CaseStudyHero.tsx` (NEW) — hero + meta strip
- `src/components/CaseStudyOverview.tsx` (NEW) — TL;DR card with chapter jumps
- `src/components/CaseStudyClosing.tsx` (NEW) — reflection + next-project CTA

### What I'm NOT doing (worth flagging)
- Not adding a sticky in-page TOC sidebar — overkill for 4-6 chapters; jump chips in the overview are enough.
- Not adding scroll-progress bar at top — already mentioned in earlier polish list, holding off until you say go.
- Not changing the case study **content** (no new copy beyond the 3 new fields for Jointly, which I'll draft from existing material).

### Drafted Jointly content (so you can sanity-check before I write it)

- **overview.context**: "Master's thesis at Northwestern EDI. 9 months, solo founder."
- **overview.roleDetail**: ["End-to-end product strategy and research (60+ users, 21 interviews)", "UX and visual design across 40+ screens", "Built and launched the live product at planjointly.com"]
- **overview.outcome**: "Live in beta. 12 signups in week one with no paid acquisition."
- **reflection**: "Group decisions aren't a planning problem — they're a social one. The most useful thing the product does is take the awkward conversations off the group's plate."
- Chapter intros (1 sentence each) for Research, Users, Opportunity, Product, Early Signal.

Approve and I'll ship it. If you want me to wait on populating Jointly's new fields and just ship the structure with placeholders, say so.