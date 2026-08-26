# Make the expertise map functional

The constellation below the hero becomes a real navigation device: every node is a live case-study tag, tiers read differently, and the motion has a purpose.

## 1. Tags drive everything

Nodes are generated from the actual tags in `src/data/caseStudies.ts` — no invented labels. Current set:

- Jointly: Experience Design, Mobile, AI, Service Design
- Airy: Healthcare, Interaction Design, Product Strategy
- Nectar.ai: AI, E-Commerce, Conversational UI

Each node knows how many studies carry that tag, which feeds both its size and its click target.

## 2. Three tiers instead of a flat starburst

```text
  core (craft)          domain (context)        sub-skill
  Experience Design     Healthcare              Conversational UI
  Interaction Design    E-Commerce              Mobile
  Service Design        AI
  Product Strategy
```

- Core disciplines sit on a tight inner ring: larger dots, foreground labels, brighter spokes into the "Krishna" centre.
- Domain nodes sit further out, smaller, muted labels, thinner edges.
- Sub-skills hang off their parent node rather than off the centre, so the graph reads as a hierarchy, not a sunburst.
- Node radius also nudges up with the number of case studies behind it.

## 3. Clicking filters the work

- Clicking a node navigates to `/work?tag=<tag>`.
- `src/pages/Work.tsx` reads `?tag=` and shows only matching studies, with an active filter chip (existing `Pill`) plus a "Clear" affordance and a live count. No match state falls back to all studies with a short note.
- Hovering a node in the map dims unrelated nodes and shows the study count in the label area.

## 4. Deliberate pulses

- One pulse per spoke, staggered on a shared timeline so at most a couple travel at once instead of all nine at all times.
- A pulse fades in at the node, travels inward, and on arrival briefly brightens the centre; hovering a node sends a pulse outward and brightens that node instead.
- Idle spokes stay static — no constant twinkle.

## 5. Mobile and accessibility

- Mobile keeps the tiered layout but drops sub-skill nodes, uses a compact radius, larger tap targets (invisible ~44px hit circles), and no cursor-pull.
- Nodes become real focusable controls: rendered as SVG `<a>`/`role="link"` with `tabIndex`, visible focus ring, Enter/Space activation, and an accessible name like "Experience Design — 1 case study".
- `prefers-reduced-motion`: static graph, no drift, no pulses; interaction still works.
- A visually hidden list of the same tag links sits alongside the SVG for screen readers and crawlers.

## Technical notes

- `src/components/ExpertiseConstellation.tsx`: derive nodes from `caseStudies`, add a `tier` field (`core` | `domain` | `sub`), replace the always-on pulse loop with a staggered scheduler, add keyboard/focus handling and `useNavigate`.
- `src/pages/Work.tsx`: `useSearchParams` filtering + filter chip UI, using existing `Pill` and `Reveal`.
- Colors/easing stay on existing tokens (`--primary`, `--primary-deep`, `--muted-foreground`, `--ease-*`). No new dependencies.

## Out of scope

- Hero copy, case-study content, and the Selected Projects grid stay as they are.
