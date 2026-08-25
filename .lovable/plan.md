# Design Audit: One System, Our Own Identity

## What's wrong today

**Cohesion**
- Four unrelated border radii in use (`md` on buttons, `lg` on images, `xl` on cards, `2xl` on the case study hero) with no rule.
- Three pill implementations: the `Pill` component, hand-rolled spans in WorkDetail (tools chips, hero meta) and Home ("Available for Work"), and `bg-secondary` tags in BlogPost.
- The same eyebrow label ships with five different letter-spacings (`tracking-wider`, `[0.14em]`, `[0.16em]`, `[0.18em]`, `[0.2em]`) and two sizes.
- Page rhythm drifts per page: tops `pt-24` / `pt-16 sm:pt-32` / `pt-10`, bottoms `pb-20` vs `pb-24`, widths `max-w-3xl` / `max-w-5xl` / `max-w-[65ch]`.
- The new motion tokens only reached Home and the case study card. WorkDetail, About, Blog, Contact still use bare `transition-colors`. `delay-[${i * 100}ms]` in Home and Work is a dynamic class Tailwind never compiles, so the card stagger does nothing.
- Accent color has no usage rule: it's the link color, the focus ring, the hero glow, the card hover shadow, and a 2px glowing ring around the headshot at the same time.

**Derivative**
- `hsl(221 83% 60%)` is effectively Tailwind's stock blue — the default "AI startup" accent.
- The logo is initials-as-strokes inside a rounded square, blue on dark: the reference site's exact treatment.

## The fix

### 1. Identity — Iris Violet + a real wordmark
- Replace the accent with a violet carrying a deliberate magenta bias, not Tailwind's `violet-500`: `--primary: 258 88% 68%`, hover `258 88% 74%`, deep shade `--primary-deep: 256 62% 52%` for shadows and glows. Support token `--primary-soft: 258 40% 16%` for tinted surfaces.
- Retune neutrals so the theme reads as one family instead of grey plus an accent: background `252 12% 6%`, card `252 10% 10%`, border `252 8% 17%`, muted-foreground `252 6% 64%`. Availability dot moves to a cooler mint (`160 55% 48%`) so it sits in the same family.
- Delete the monogram. `src/components/Logo.tsx` becomes a **name wordmark**: "Krishna Suresh" in Playfair Display, tight tracking, with the accent used as a single small detail — a violet period after the name that scales up on nav hover. No container shape, no initials, no circle.
- `public/favicon.svg` becomes a lowercase `k` letterform cut from the wordmark's serif on a `252 12% 6%` field — no rounded-square badge.
- Regenerate `public/og-image.png` in the new palette.

### 2. Accent usage rules (applied everywhere)
- `primary` = interactive and emphasis only (links, hover states, focus rings, active nav, key numbers).
- `primary-deep` at low opacity = ambient depth only (hero glow, card hover shadow).
- Decorative accent gets removed where it shouts: the About headshot loses the ring + glow and gets a plain `border border-border` with a subtle inner shadow.

### 3. One spacing and type scale
- Section rhythm standardized: every page section is `pt-24 pb-24` on desktop, `pt-16 pb-16` on mobile; Home hero keeps the taller `sm:pt-32` as the single intentional exception.
- Container rule: reading pages (`About`, `Blog`, `BlogPost`, `Contact`, `Resume`, `StoryPost`) use `max-w-3xl`; index/grid pages (`Home` featured, `Work`, `Stories`, `WorkDetail` body) use `max-w-5xl`. `max-w-[65ch]` is removed.
- Radius scale collapses to three tokens driven by `--radius`: `sm` for chips/inputs, `md` for buttons, `lg` for cards and media. `rounded-2xl` and `rounded-xl` literals are removed.
- One eyebrow/label style extracted as a `.label-eyebrow` utility (10px, uppercase, `0.16em`, muted) and used for every micro-label on the site.

### 4. Pills become one component
- `Pill` gains `outline`, `filled`, and a new `subtle` variant (bordered, for the tools/meta chips), plus an optional leading dot slot so "Available for Work" is a Pill too.
- Every hand-rolled chip in `Home.tsx`, `WorkDetail.tsx` (hero meta, tools chips), `BlogPostCard.tsx`, and `BlogPost.tsx` is replaced with `Pill`.

### 5. Motion applied uniformly
- Fix the broken stagger: replace dynamic `delay-[${i*100}ms]` classes with an inline `transitionDelay` style on the reveal wrapper in `Home.tsx` and `Work.tsx`.
- Promote the shared reveal wrapper into `src/components/Reveal.tsx` (currently duplicated as a local `ScrollSection` in Home and Work and `FadeIn` in WorkDetail) so all three pages animate identically.
- Every `transition-colors` gains the shared duration/easing tokens; hover lifts on cards and CTA buttons all route through `.lift-hover` instead of ad-hoc transforms.
- All of it stays inside the existing `prefers-reduced-motion` block.

### 6. Leftover pages restyled
`Blog`, `BlogPost`, `Stories`, `StoryPost`, `Resume`, `Contact` and `NotFound` get the same containers, eyebrow style, radii, Pills and reveal wrapper as the main pages, so nothing is left on the old ad-hoc styling.

## Technical notes
- Files touched: `src/index.css`, `tailwind.config.ts`, `src/components/Logo.tsx`, `public/favicon.svg`, `public/og-image.png`, `src/components/ui/pill.tsx`, new `src/components/Reveal.tsx`, `src/components/{Navbar,Footer,CaseStudyCard,BlogPostCard,Layout}.tsx`, `src/components/casestudy/Blocks.tsx`, and all pages under `src/pages/`.
- All new colors added as HSL CSS variables in `index.css` and exposed through `tailwind.config.ts` (`primary.deep`, `primary.soft`) — no hardcoded hex in components.
- No content, data model, or routing changes; `src/data/caseStudies.ts` copy stays as-is.
- Verified after the pass with a typecheck and Playwright screenshots of Home, Work, a case study, and About at desktop and mobile widths.
