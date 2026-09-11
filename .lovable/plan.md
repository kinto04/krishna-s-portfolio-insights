# Jointly case study audit and immersive redesign

## Direction
Turn Jointly from a sequence of framed deck slides into a concise product story. Preserve the strongest deck visuals, but place them inside alternating warm-ivory and near-black chapter bands sampled from the deck so each slide feels native to the page.

## Content improvements
- Correct the project facts to **September 2025–March 2026**, **two quarters**, and **Founder and Designer**.
- Tighten the opening summary around the core problem: group travel planning creates social and decision-making friction.
- Reframe the overview into three scannable outcomes: research and validation, product/design execution, and live learning.
- Strengthen the research chapter with the verified signals: interviews, secondary research, and online community outreach reaching 60K+ people.
- Connect research to design by explicitly showing the progression from evidence to journey maps, behavioral archetypes, and product priorities.
- Add the missing design-and-build story: AI-assisted product development, design system, brand guidelines, and the working beta.
- Replace vague launch language with factual evidence: 40+ beta users and an automated weekly pipeline reviewing activation, engagement, and retention patterns.
- Keep claims conservative: do not imply paid growth, business impact, or retention improvement beyond the supplied facts.

## Visual improvements
- Give Jointly its own semantic theme based on the deck: warm ivory, near-black, soft warm gray, and restrained coral.
- Group each chapter and its content into a full-width visual band rather than leaving headings and slides as disconnected blocks.
- Use light bands for research and synthesis; dark bands for the product and launch chapters, matching the slide backgrounds.
- Remove redundant borders around slide images where their background matches the surrounding band.
- Keep captions outside the slide artwork, with consistent contrast and spacing.
- Preserve the existing global portfolio typography, navigation, responsiveness, and reduced-motion behavior.

## Technical details
- Extend narrative chapter data with an optional light/dark tone.
- Group blocks by chapter in the Jointly detail renderer so a chapter heading and its following content share one themed section.
- Apply the immersive chapter treatment only to Jointly; other case studies remain unchanged.
- Update the Jointly entry and chapter structure in `src/data/caseStudies.ts`, then adjust `WorkDetail.tsx` and `Blocks.tsx` only as needed for the chapter bands.

## Validation
- Review Jointly on desktop and mobile for readable contrast, clean chapter transitions, consistent image sizing, and no horizontal overflow.
- Verify Jump to links, the live-product link, and the next-case-study link.
- Run the existing checks and tests.
