# Jointly: less text, more visual

You're right — we over-corrected. The native blocks gave us editorial structure but lost the visual punch the slides had. Here are three honest options, then my recommendation.

## Three options

**A. Revert to slides, full-width**
Drop the `blocks` array on Jointly. Render every slide full-bleed, one per scroll, with a one-line caption underneath. Fastest path. Looks like a deck. Loses the chapter structure and the nice overview/reflection framing.

**B. Keep blocks, but lead with images** (recommended)
Keep the chapter structure, overview, reflection, and stat block — those are working. Replace the text-heavy native blocks (numbered lists, archetype cards, methods grid, feature grid, feature rows) with the original slide images, full-bleed, with a single tight caption. Native typography stays only where it earns its place: chapter headers, the opening statement, the Reddit pull-quote, the closing stat, the reflection.

**C. Hybrid per-chapter**
Some chapters native (Research, Closing), some slide-led (Users, Product). More work, more inconsistency. Not recommended right now.

## Recommendation: Option B

The slides are good. They were designed to be looked at. The job of the page is to frame them, not replace them. We trim native text down to the connective tissue between visuals.

### New Jointly structure

```text
HERO (cover image + meta strip)            unchanged
OVERVIEW (context / role / outcome + jump) unchanged
METRICS strip                              unchanged

OPENING STATEMENT (native, large serif)
  "Group trips are supposed to bring people together.
   Jointly. makes sure the planning does too."

01 The Research
  chapter header
  slide 4   full-bleed   caption: "Three research tracks: 21 interviews, market scan, 60k+ Reddit views."
  slide 3   full-bleed   caption: "One Reddit thread surfaced what people won't say to friends."
  slide 7   full-bleed   caption: "Three frustrations showed up in every conversation."

02 The Users
  chapter header
  slide 9   full-bleed   caption: "Three archetypes. Same trip, three different burdens."

03 The Opportunity
  chapter header
  one-line lead: "Every existing tool is built for one person, or built without intelligence."
  slide 10  full-bleed   caption: "Jointly sits in the smart + group-native quadrant."

04 The Product
  chapter header
  slide 27  full-bleed   caption: "Four features that turn group chaos into a plan."
  slide 12  full-bleed   caption: "Trip creation: destination, interests, budget priority. Two steps."
  slide 14  full-bleed   caption: "Capture ideas in natural language."
  slide 18  full-bleed   caption: "Curated itinerary, generated from the group's voted ideas."
  slide 19  full-bleed   caption: "Smart budgeting handles the awkward money conversation."

05 Early Signal
  chapter header
  STAT BLOCK (native): 12 signups · first week · no paid acquisition
  link out to planjointly.com

CLOSING REFLECTION (native, branded)        unchanged
NEXT CASE STUDY                             unchanged
```

### Hierarchy rules

- **One H2 per chapter** (the chapter header). Nothing else competes.
- **Captions are one line, max 90 characters**, muted color, sit directly under the image. No paragraph captions.
- **Native text only appears 4 times in the body**: opening statement, opportunity lead, stat block, reflection. Everything else is image-led.
- **Vertical rhythm**: every slide gets the same `mb-16` gap. Chapter headers get `mt-24`. No more dense block stacking.
- **Images**: full-bleed within the `max-w-5xl` article column, rounded, subtle border. No card padding around them.

### What gets removed

- `methods`, `numberedList`, `archetypes`, `featureGrid`, `featureRow` blocks from Jointly's data (the components stay in the file, unused, in case we want them later for Nectar/Airy or revisit).
- The Reddit `quote` block — slide 3 already shows the quote visually. Keeping it native duplicates content.
- Long captions on slides.

### What stays native (and why)

- **Opening statement** — sets tone before any image.
- **Opportunity lead** — slide 10 needs one line of context to land.
- **Stat block** — the "12 signups" number deserves typographic weight, not a screenshot.
- **Reflection** — closing voice should be the writer's, not a slide.

## Technical changes

- `src/data/caseStudies.ts` — rewrite Jointly's `blocks` array to the structure above. Most blocks become `{ kind: "image", fullWidth: true, caption: "..." }`. Keep `chapter`, `statement`, `lead`, `stat`.
- `src/components/casestudy/Blocks.tsx` — tighten the `Image` block: full-bleed by default inside the article column, `rounded-lg`, single-line caption styled as `text-xs text-muted-foreground mt-3`. Increase default vertical spacing between blocks to `mb-16`.
- `src/pages/WorkDetail.tsx` — no logic changes; it already renders blocks. Possibly drop the metrics strip since the stat block now covers the same ground (or keep it — your call, noted as open question below).
- No component deletions. Unused block components stay for future studies.

## Open questions

1. **Metrics strip vs stat block** — they say similar things. Keep both, drop the top metrics strip on Jointly, or drop the stat block? My vote: drop the top metrics strip on Jointly only; the stat block in chapter 05 has more narrative weight.
2. **Slide 10 (the 2x2 matrix)** — keep one-line lead above it, or let the diagram speak alone? My vote: keep the lead, it's the only slide that needs context.

Want me to proceed with Option B as specified, or pick a different option / tweak the structure first?
