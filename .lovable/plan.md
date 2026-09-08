# Portfolio Visual Redesign

## Direction
Replace the current violet, serif, glow-heavy language with a disciplined product-design system:
- Geist Sans throughout, with Geist Mono for labels and project metadata
- Neutral black/white/gray surfaces
- Google blue, red, yellow, and green as controlled signals rather than ambient decoration
- An asymmetric, grid-led layout with crisp rules and compact spacing
- Fast, precise motion without blur, floating particles, magnetic effects, or pulsing glows

## What changes

### 1. Rebuild the visual foundation
- Update semantic color tokens, typography, radius, shadows, motion, section rhythm, and container widths
- Remove gradient washes, noise overlays, blur-based reveals, violet tag colors, and soft floating elevation
- Add a reusable four-color registration stripe and mono metadata treatment
- Update `DESIGN.md` so the new system remains the source of truth

### 2. Redesign the homepage
- Turn the hero into an asymmetric 12-column composition with stronger hierarchy and a compact project/evidence rail
- Replace the decorative expertise constellation with a functional capability-to-project matrix that still filters work by tag
- Restyle selected work as image-led project tiles with consistent proportions, numbered metadata, and precise hover states

### 3. Carry the system across the portfolio
- Restyle navigation, footer, Work, Stories, About, story pages, and case-study pages using the same grid, typography, borders, and interactions
- Remove serif classes and violet/glow effects from headings, imagery, panels, metrics, and timeline elements
- Keep all existing content, routes, project themes, photos, and filtering behavior intact

## Validation
- Check the homepage, Work, About, Stories, and a case study on desktop and mobile
- Verify navigation, tag filtering, project links, and reduced-motion behavior
- Run the existing TypeScript checks and targeted tests
