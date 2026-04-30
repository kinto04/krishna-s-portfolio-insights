# Jointly: pull slide content into the page

Right now slides do the talking and the page narrates around them. We'll flip that: the page becomes the narrative (typography, pull-quotes, structured blocks) and slide images become supporting visuals — used selectively, often cropped to the part that matters.

Scope: only the Jointly case study. We'll build a small set of reusable narrative blocks so we can apply the same treatment to Nectar.ai and Airy later.

## Narrative restructure (what each chapter becomes)

**Hero / Opening**
- Keep cover hero as-is.
- Add an opening statement block right after the meta strip:
  > "Group trips are supposed to bring people together. Jointly. makes sure the planning does too." (from slides 2 + 22)
- Replaces slides 1, 2, 22 as visuals.

**01 The Research — "Understanding the problem"**
- Lead paragraph: "I wanted to understand what actually happens between inspiration and booking."
- Three-column research-method block (icon + label + one line each), built from slide 4:
  - User interviews — deep-dives with planners, contributors, easy-going members
  - Secondary & market research — group dynamics, travel behavior, competitive landscape
  - Travel community — 60k+ views on a single post, unfiltered stories
- Featured pull-quote card (Reddit-style) from slide 3:
  > "As a planning person I stopped planning group trips years ago… I'd rather go alone than compromise." — r/travel
- "Three frustrations, every time" — rendered as three numbered native cards (01/02/03) from slide 7 (Planner's Burden, Money as the Friendship Minefield, Death by Group Chat). Slide 7 image is dropped; we render this in HTML. Keep small inline quote: "'What do you guys want to do?' is pretty much a trap."

**02 The Users — Behavioral archetypes**
- Three-card grid built from slide 9, native typography:
  - Patrick / The Planner — "I end up planning the whole thing, and somehow I'm still the one who gets blamed."
  - Sam / The Supportive — "I'd love to help more but I don't want to step on anyone's toes."
  - Emma / The Easy-going — "I'm honestly fine with anything — just tell me where to be."
- Each card: archetype number, name, one-line role, pull-quote.
- Slide 9 image dropped (replaced by native cards).

**03 The Opportunity — Market landscape**
- Short lead: "Every existing tool is either built for one person, or built without intelligence."
- Keep slide 10 (the 2x2 matrix) — it's a diagram, works as image. Render it cleanly (max-width, centered, with a one-line caption pinning Jointly in the smart + group-native quadrant).

**04 The Product**
- Lead block: "Jointly. — the collaborative decision-making layer between inspiration and booking." Large serif statement.
- "Four features that turn group chaos into a plan" — replace slide 27 (overview) with a 2x2 native feature grid (Capture Ideas / Smart Budget / Curated Itinerary / Map View), each with one-line description and a small thumbnail crop.
- Then four feature deep-dives, each as a two-column row (screen on one side, narrative on the other):
  1. **Trip creation** (slide 12) — "Set a destination, pick interests, indicate budget priority. Two steps."
  2. **Capture ideas in natural language** (slide 14) — "Describe your idea. Jointly parses it and surfaces structured suggestions."
  3. **Curated itinerary** (slide 18) — "Generated from the group's voted ideas, day by day."
  4. **Smart budgeting** (slide 19) — "The tool handles the awkward money conversation, not the users."
- Each row: short headline + one-sentence body pulled from slide copy. No more long captions under images.

**05 Early Signal**
- Native stat block from slide 21:
  - Big number: **12** signups · first week · no paid acquisition
  - Three small bullets: "Value lands immediately · Suggestions feature is a hit · Budget flexibility resonates"
- Drop slide 21 image; keep a small thumbnail of planjointly.com or link out.

**Closing**
- Existing reflection block stays.

## New / changed components

- `NarrativeStatement` — large serif pull statement, used for opening and product lead.
- `MethodGrid` — 3-col icon+label+line block (Research methods).
- `QuoteCard` — featured pull-quote with attribution (Reddit quote).
- `NumberedList` — 01/02/03 cards (Three frustrations).
- `ArchetypeGrid` — 3-col archetype cards with quote.
- `FeatureGrid` — 2x2 product overview tiles with thumb + line.
- `FeatureRow` — image + headline + one-liner (alternating sides). Replaces the current `SlideBlock` two-col layout for product chapters.
- `StatBlock` — big number + supporting bullets.

These live in `src/components/casestudy/` so Nectar and Airy can adopt them later.

## Data model change

The current `Slide[]` model is too thin to express this. Add a discriminated union `Block` to `CaseStudy.blocks` (optional, additive — `slides` stays for studies we haven't migrated):

```
type Block =
  | { kind: "statement"; text: string }
  | { kind: "methods"; items: { label: string; line: string }[] }
  | { kind: "quote"; text: string; source: string }
  | { kind: "numberedList"; title?: string; items: { title: string; body: string }[] }
  | { kind: "archetypes"; items: { name: string; role: string; line: string; quote: string }[] }
  | { kind: "image"; src: string; caption?: string; fullWidth?: boolean }
  | { kind: "featureGrid"; intro?: string; items: { title: string; line: string; thumb: string }[] }
  | { kind: "featureRow"; image: string; title: string; body: string }
  | { kind: "stat"; value: string; label: string; bullets?: string[] }
  | { kind: "chapter"; id: string; number: string; label: string; intro?: string };
```

`WorkDetail.tsx` renders `study.blocks` if present, else falls back to today's chapter/slide rendering. Jointly gets migrated to `blocks`; Nectar and Airy stay on `slides` for now.

## Visual rules

- Native blocks share the same horizontal rhythm as image rows (max-w-5xl, generous vertical spacing).
- Pull-quotes use Playfair, large, with a thin left rule in `--accent`.
- Numbered lists / archetypes: tabular-num serif numerals, same treatment as chapter numbers — keeps the page visually consistent.
- Images shrink in role: most are 60% column width inside a `FeatureRow`; only the cover and the matrix (slide 10) go wide.
- Slides 1, 2, 7, 9, 22, 27 are removed as images (their content is now native).

## Files touched

- `src/data/caseStudies.ts` — add `Block` types; add `blocks` array to Jointly.
- `src/pages/WorkDetail.tsx` — render `blocks` when present.
- `src/components/casestudy/*` — new block components listed above.
- `src/index.css` — minor: pull-quote rule, numbered-list numeral style if not already covered.

## Out of scope

- Nectar.ai and Airy stay on the existing slide layout. Once you're happy with Jointly, we apply the same treatment to them in a follow-up.
