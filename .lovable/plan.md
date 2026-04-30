## Visual & Interaction Polish Pass

Goal: bring the portfolio from "clean but flat" to feeling crafted and tactile — without changing content or structure. Focused on the highest-impact surfaces (Home + Case Studies) plus the global touches you called out.

### 1. Case study cards (Home + Work)
File: `src/components/CaseStudyCard.tsx`
- Wrap card in a group container with a soft 1px border that strengthens on hover.
- On hover: card lifts (`-translate-y-1`), a subtle warm-tinted shadow appears, cover image scales to ~1.04, title shifts to brand accent (#C1683A).
- Stronger hierarchy: title gets slightly larger/tighter tracking; subtitle de-emphasized; tags become small pill chips with a faint border instead of bare uppercase text.
- Add a small "View case study →" affordance that fades in on hover at the bottom of the card.
- Smooth all transitions over 300–400ms with ease-out.

### 2. Home hero
File: `src/pages/Home.tsx` + `src/index.css`
- Add a low-opacity radial gradient backdrop behind the hero (warm orange glow top-left, fading to background) — purely decorative, `pointer-events-none`, no perf cost.
- Layer a faint SVG noise texture at ~3% opacity over the gradient for depth (inline data URI, no asset).
- "Available for Work" badge: add a soft pulsing halo on the green dot (custom keyframe — outer ring fades out as it scales). Keep the dot itself solid.
- Slightly tighten hero vertical rhythm on mobile (reduce top padding from `pt-24` to `pt-16` under `sm`).

### 3. Work detail — section dividers + slide reveals
File: `src/pages/WorkDetail.tsx`
- Replace the `label + flex-1 h-px bg-border` divider with an editorial treatment:
  - Larger label (uppercase, tracked, ~sm size, foreground color)
  - Small accent mark in brand orange (a 6px dot or short 24px bar) to the left of the label
  - Drop the full-width rule; use generous top margin instead for separation
- Upgrade slide reveal: replace plain fade with a fade + 16px upward translate + 600ms ease-out, staggered slightly so adjacent slides don't pop in unison. Use the existing `useInView` hook (no new deps).

### 4. About page
File: `src/pages/About.tsx`
- Headshot: add a 2px ring in brand accent with a small offset (`ring-2 ring-primary ring-offset-4 ring-offset-background`) and a very subtle outer glow.
- Experience entries: add a 2px left border in `border-border` that brightens to `border-primary` on hover, with `pl-4` spacing. Each entry becomes its own visually distinct block.

### 5. Global polish
- **Navbar** (`src/components/Navbar.tsx`): currently always blurred. Make it transparent at top of page, then transition to blurred + bordered on scroll (use a small scroll listener). Subtle but feels premium.
- **Page transitions** (`src/components/Layout.tsx`): wrap `main` in a keyed fade-in (200ms) on route change using `useLocation().pathname` as key. No router rewrite needed.
- **Mobile typography/spacing audit** (`src/index.css` + page files): bump base body line-height slightly on small screens, ensure hero headline doesn't overflow at 375px (drop to `text-4xl` at base, `text-5xl` from `sm`), tighten section vertical paddings under `sm`.

### Additional improvements I'd recommend (not in your list)

These came out of reviewing the codebase. Ranked by impact:

1. **Featured projects grid (Home)** — currently 3 equal cards in a `md:grid-cols-3`. With only a handful of featured projects, consider making the first card span 2 columns (bento-style) so the hero project gets visual priority. Same data, more editorial.
2. **Work page filtering / grouping** — silent suggestion. If projects span PM / Design / Research, a simple set of filter chips at the top would help recruiters scan. Optional, only worth it if you have 6+ projects.
3. **Case study reading experience** — add a thin progress bar at the very top of `WorkDetail` that fills as the reader scrolls. Tiny detail, signals craft.
4. **"Next project" CTA at end of WorkDetail** — currently the case study just ends. Add a "Next: [project name] →" block so readers flow into the next study instead of bouncing.
5. **Footer** — add a one-line tagline above the copyright ("Designing human experiences from New York.") and bump the spacing. Currently feels like an afterthought.
6. **Focus states** — audit interactive elements for visible focus rings (keyboard accessibility); the brand orange ring is already defined, just needs to be applied via `focus-visible:ring-2`.

### Technical notes
- No new dependencies. All animations via Tailwind utilities + a couple of custom keyframes in `index.css`.
- Hero gradient/noise uses a single absolutely-positioned div with inline SVG data URI — no network cost.
- Scroll listener in Navbar uses a single `useEffect` with passive listener; debounced via `requestAnimationFrame`.
- Page transition uses React's natural remount on `key` change — no `framer-motion`.

### Files modified
- `src/components/CaseStudyCard.tsx`
- `src/components/Navbar.tsx`
- `src/components/Layout.tsx`
- `src/components/Footer.tsx` (item #5 above, if approved)
- `src/pages/Home.tsx`
- `src/pages/WorkDetail.tsx`
- `src/pages/About.tsx`
- `src/index.css` (keyframes, noise texture, mobile tweaks)
- `tailwind.config.ts` (register pulse-halo keyframe)

Let me know which of the "Additional improvements" you want included, or if you'd rather ship just the original five and iterate on the rest after.