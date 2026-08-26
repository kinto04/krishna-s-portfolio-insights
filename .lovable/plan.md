# Hero Copy Rewrite — Real Voice, Design + AI

## Goal
Replace the current hero copy, which reads as generic AI-generated ("I design with AI, not just for it."), with copy grounded in Krishna's actual story from his LinkedIn profile. The strongest authentic material: the "solutions in search of a problem / tech first, users second" arc, his CS-to-design trajectory, and concrete AI builder credentials (RAG, Claude, Lovable, PostHog pipeline).

## Proposed copy

**Eyebrow (unchanged):** "Hey, I'm Krishna."

**Headline (chosen by user):**
> I design products that start with people,\nand ship with AI.

**Subtitle:**
> Product designer with an engineer's toolkit. I've shipped an AI commerce agent that lifted add-to-cart 30%, co-designed a clinical diagnostic tool with 12+ clinicians, and built my thesis app — research, design, and code — with AI doing the heavy lifting. Now I help teams close the gap between what they build and what people need.

This leads with his actual differentiator: he's not a designer who talks about AI, he's one who *builds* with it — and it preserves the "user first" philosophy that makes his positioning credible rather than hype.

## Changes
1. **`src/pages/Home.tsx`** — replace `heroVariant.heading` and `heroVariant.subtitle` with the new copy. Keep the `whitespace-pre-line` layout; adjust the line break in the heading if needed.
2. **`index.html`** — update `<title>` and meta description to match ("Product designer who builds with AI — Krishna Suresh" direction).
3. No other pages touched. No layout/motion changes.

## Voice rules applied
- No buzzword stacking ("passionate", "cutting-edge", "leverage").
- Every claim traceable to the LinkedIn profile (30% add-to-cart, 12+ clinicians, thesis app).
- First-person, direct, conversational.

## Optional alternate headlines (will ask before finalizing)
- "Design that starts with people. Products that ship with AI."
- "I turn AI capability into products people actually use."
