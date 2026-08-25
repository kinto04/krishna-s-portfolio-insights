# Plan: Reusable Pill Component + Hero Expertise Section

## What we're building
1. A new reusable `Pill` component at `src/components/ui/pill.tsx`.
2. An "Expertise in" pill cluster in the `Home` hero.
3. Consistent pill styling in `CaseStudyCard` tags.

## Component spec

### `src/components/ui/pill.tsx`
- Props:
  - `variant: "outline" | "filled"`
  - `children: React.ReactNode`
  - `uppercase?: boolean` (default `false`)
  - Optional `className` passthrough
- `outline` variant:
  - Transparent background
  - `border border-border/60`
  - `text-foreground`
  - `rounded-full`
  - `px-4 py-2 text-sm`
  - `ChevronRight` icon on the right (small, from `lucide-react`)
- `filled` variant:
  - `bg-primary/10`
  - `text-primary`
  - No border
  - No chevron
  - Same padding/sizing
- Shared hover:
  - Subtle `scale-[1.02]`
  - Brighten border (`hover:border-border`) for outline
  - Brighten background (`hover:bg-primary/15`) for filled
  - Smooth `transition-all duration-200`

## Hero update

### `src/pages/Home.tsx`
- Add a new "Expertise in" label + pill row in the hero.
- Position: on desktop, place it on the right side of the hero text block (e.g., absolutely or flex-aligned to the right within the `max-w-3xl` container); on mobile, stack it below the heading/subtitle.
- Use 3–4 outline `Pill` components.
- Skill labels pulled from existing case study tags in `src/data/caseStudies.ts`:
  - Suggested set: "AI Product Design", "0→1 Product", "Design Systems", "Experience Design".
  - These map to real tags across the case studies (`AI`, `Product Strategy`, `Experience Design`, `Design Systems` not present literally, so choose the closest real ones).
- Keep the existing "Available for Work" pill untouched.

## Case study card update

### `src/components/CaseStudyCard.tsx`
- Replace the inline `<span>` tag styling for `study.tags.slice(0, 3)` with the new `Pill` component in `filled` variant.
- Keep `text-[10px]` sizing or adjust to `text-xs` if the new component's `text-sm` is too large for card tags. Decision: use a smaller size prop or keep compact via `className` override.
- Preserve tag limit (`slice(0, 3)`) and wrapping layout.

## Files to modify
- `src/components/ui/pill.tsx` (new)
- `src/pages/Home.tsx`
- `src/components/CaseStudyCard.tsx`

## Out of scope
- No changes to `src/data/caseStudies.ts` beyond reading tags for skill selection.
- No changes to other pages or global styles.
