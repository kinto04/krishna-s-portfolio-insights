# Logo, Favicon, and OG Placeholder

## Goal
Introduce a reusable "KS" monogram logo component and matching favicon, then wire it into the navbar and prepare the Open Graph image path.

## Changes

1. **Create `src/components/Logo.tsx`**
   - Inline SVG monogram of initials "KS".
   - Geometric sans-serif strokes, bold weight, roughly square aspect ratio.
   - Use `currentColor` so the mark inherits text color; default color set to `hsl(var(--primary))` (the blue accent).
   - Accept an optional `className` / `size` prop so it sits cleanly at 32–40 px in the navbar.

2. **Update `src/components/Navbar.tsx`**
   - Replace the plain-text "Krishna Suresh" home link with the new `<Logo />` component.
   - Keep the `to="/"` route and existing link styling/alignment.

3. **Replace `/public/favicon.svg`**
   - Overwrite the current favicon with the same "KS" mark.
   - Use `currentColor` in the SVG so browser tabs inherit the mark correctly against the dark theme.

4. **Update `index.html`**
   - Add `<meta property="og:image" content="/og-image.png" />`.
   - Include an HTML comment noting that `/public/og-image.png` is a placeholder and must be generated separately.

## Out of scope
- No layout, spacing, or typography changes beyond what is needed to swap the logo into the navbar.
- The page title/meta description in `index.html` will not be changed in this pass.
