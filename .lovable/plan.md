# About page bio sidebar — lighter Venn graphic

## Goal
Replace the current "Selected work" project-card sidebar in `src/pages/About.tsx` with a lighter, story-aligned Venn intersection graphic that visualizes the bio's opening line: the overlap of Research, Design, and Engineering.

## What will change
- Remove the three project-card thumbnails and "Selected work" label from the bio sidebar.
- Add an inline SVG Venn diagram showing three overlapping circles labeled Research, Design, and Engineering.
- Center the overlapping area with a small label or mark that represents the user's role (e.g., "UX Engineer" or "Designer & Engineer").
- Keep the sidebar sticky on desktop (`md:`+) and hidden on mobile, matching the current responsive behavior.
- Use only existing semantic design tokens (`--foreground`, `--muted-foreground`, `--primary`, `--border`) so the graphic feels native to the site palette.

## Design details
- Style: thin-stroke circles (`stroke-border` / `stroke-foreground/20`), small sans labels in `--muted-foreground`, intersection accent in `--primary`.
- Layout: three circles arranged in a compact triangular Venn, roughly 280×220 px, with the center overlap emphasized subtly.
- Motion: optional fade/slight draw-in on scroll using the existing `Reveal` wrapper; respect `prefers-reduced-motion`.
- Accessibility: SVG includes `role="img"`, an `aria-label` describing the diagram, and visible text labels.

## Implementation
1. Create a new component `src/components/AboutVenn.tsx` that renders the responsive SVG.
2. Update `src/pages/About.tsx` to import and use `AboutVenn` inside the bio sidebar, replacing the current card map.
3. Verify the change with `bunx tsc --noEmit` and a desktop/mobile screenshot pass.

## Out of scope
- No changes to the bio text, hero, or beyond-work collage.
- No new dependencies or animation libraries.
