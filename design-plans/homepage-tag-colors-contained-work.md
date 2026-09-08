# Restore tag color coding and contain homepage case studies

Written against: 8ce8d0ce9b4bc76926953ae3dfb147daa64db8f7

## Evidence chain

- Surface: `/` through `src/pages/Home.tsx`, `src/components/ExpertiseConstellation.tsx`, and `src/components/CaseStudyCard.tsx`; shared card consumer at `/work` through `src/pages/Work.tsx`
- Problem: Case-study tags currently use the same primary dot and neutral text, while graph labels become tag-colored only during hover. This obscures the established tag-to-color relationship. The homepage featured cards are bare top-ruled columns on the page background, so their image and copy do not read as one contained project unit.
- Design evidence: `src/lib/tagColors.ts` is the current shared owner mapping the six project tags to `--tag-*` tokens. `src/index.css` defines those tokens as related blue and indigo hues. `DESIGN.md` explicitly permits related blue/indigo shades for capability metadata, requires project tiles to lead with real imagery and metadata, and allows flat surfaces with border contrast.
- Owner: Tag color resolution in `src/lib/tagColors.ts`; tag rendering in `src/components/CaseStudyCard.tsx`; graph rendering in `src/components/ExpertiseConstellation.tsx`; homepage composition in `src/pages/Home.tsx`.
- Scope and affected surfaces: Tag indicators on every shared case-study card, persistent node color coding on the homepage graph, and the homepage-only presentation of featured case studies.
- Uncertainty: None. Existing tag tokens determine every requested color, and the existing flat card surface defines the containment treatment.

## Design decision

Use the existing blue/indigo tag palette consistently: each case-study tag gets its mapped dot, border tint, and text emphasis, while each graph node keeps its mapped color in both dot and label rather than only on hover. Contain the three homepage case studies inside a single flat bordered group with internal dividers, while preserving the more open staggered layout on the full Work page.

## Reuse

- `tagColor()` from `src/lib/tagColors.ts`
- `--tag-*`, `--card`, `--border`, and semantic foreground tokens from `src/index.css`
- `CaseStudyCard` as the shared card owner, extended with a homepage presentation variant rather than duplicating markup
- `.t-base`, `.focus-ring`, and existing image hover behavior
- Exemplar: flat border-and-surface containment documented in `DESIGN.md`

## Changes

1. `src/components/CaseStudyCard.tsx`
   - Change: Import `tagColor` and apply the mapped token to each tag’s dot, top border, and label with restrained opacity; remove the one-color `bg-primary/70` dot and monospace treatment.
   - Change: Add a `presentation` prop with `open` as the default and `contained` for the homepage. The contained variant uses one continuous card surface, border, internal padding, and image flush to the card’s top edge; the open variant preserves the Work page composition.
   - Preserve: Shared content order, fixed image ratio, in-progress status, title/subtitle clamps, hover image scale, arrow feedback, keyboard focus, and equal-height behavior.
   - Verify: The same tag has the same color across all cards and the graph; homepage cards read as complete bounded units; Work cards retain their current open layout.

2. `src/components/ExpertiseConstellation.tsx`
   - Change: Keep every node label permanently colored with `tagColor(node.tag)`, with active state communicated by the existing outer ring, count label, and de-emphasis of unrelated nodes.
   - Change: Color each connection from its source node toward its destination using the two mapped tag colors at low opacity, implemented with SVG linear gradients defined per edge; traveling signals use the destination tag color.
   - Preserve: Current node positions, hierarchy, filtering destinations, previews, keyboard behavior, mobile fit, and reduced-motion handling.
   - Verify: All six categories are distinguishable without hover, connections remain quiet enough for labels to lead, and no gradient is used as decorative surface styling—the edge interpolation only communicates the relationship between two coded nodes.

3. `src/pages/Home.tsx`
   - Change: Pass `presentation="contained"` to featured cards and wrap the featured-work grid in one flat card-colored surface with a perimeter border and desktop internal column dividers; use stacked dividers on mobile.
   - Change: Tighten the gap between the featured-work heading and the contained group so the heading clearly owns the cards.
   - Preserve: Three-column desktop arrangement, current project order, section copy, Reveal behavior, section rhythm, and shared container alignment.
   - Verify: Featured work reads as one intentional portfolio chapter, each project remains individually clickable, and borders do not double up.

4. `DESIGN.md`
   - Change: Document that project-tag dots/labels and graph nodes share the canonical blue/indigo tag palette, and that homepage featured work uses a contained group while the Work index remains open for scanning.
   - Preserve: Persian Blue as the sole brand accent, related blue/indigo metadata exception, flat surfaces, Manrope typography, and no decorative gradients or glow.
   - Verify: Documentation matches both card presentations and the graph’s functional color encoding.

## Scope

- Inherit: Tag color indicators on homepage and Work-page cards because they share `CaseStudyCard`.
- Verify: `/`, `/work`, `/work?tag=AI`, and `/work?tag=Experience%20Design`.
- Exclude: Case-study detail-page tags, card content/copy, featured-study selection, graph topology, global palette changes, case-study themes, and Work-page layout redesign.

## Validation

- Product: Activate each graph node and confirm the corresponding filtered Work page opens; activate each homepage case-study card and confirm its detail page opens.
- Interface: Capture `/` at 1280×1800 and 390×844. Confirm persistent tag colors, contained featured cards, clean single dividers, equal card heights, no clipping, and no horizontal overflow.
- Interface: Capture `/work` at desktop and mobile to confirm the open card layout remains intact while tags inherit the shared color coding.
- Interface: Check graph hover/focus previews and reduced-motion mode; labels remain colored and traveling signals disappear for reduced-motion users.
- System: Confirm all tag colors resolve through `tagColor()` and `--tag-*`; no raw color values or second card implementation are introduced.
- Repository: `bunx tsgo --noEmit && bunx vitest run` → both complete successfully.

## Stop conditions

- Stop if a displayed tag lacks a canonical `--tag-*` mapping, or if the contained homepage treatment cannot be expressed as a `CaseStudyCard` presentation without changing the Work-page layout.

## Design documentation

- After acceptance and validation: update the Components and Colors sections of `DESIGN.md` with the shared tag-color contract and homepage contained-card exception.
