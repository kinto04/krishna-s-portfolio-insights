# At-a-glance project facts on case studies

Pull timeline, team, role, setting, and tools out of prose into one scannable strip near the top of every case study.

## What changes

A new "At a glance" band sits directly under the hero, above the narrative Overview. It reads as a compact fact table, visually distinct from prose:

```text
AT A GLANCE
Timeline            Team                 My Role              Setting
9 months            Solo founder         Product strategy,    Master's thesis
2025–2026                                research, UX, build  Northwestern EDI

Tools  Figma / React / Supabase / OpenAI          Platform  iOS + Web
```

- Label/value pairs in small uppercase labels with larger foreground values — same typographic system already used for hero meta and chapter eyebrows.
- Framed by hairline top/bottom borders with column dividers on desktop; stacks to two columns on mobile.
- Tools and Platform render as a single wrapping chip row underneath (reusing the existing toolkit chip style), so the fact grid stays clean.
- Inherits per-study themes (Airy's off-white) automatically since it uses semantic tokens only.

## Content per study

- Jointly. — Timeline: 9 months (2025–2026) · Team: Solo founder · Role: research, product strategy, UX, build · Setting: Master's thesis, Northwestern EDI
- Airy — Timeline: 10 weeks (2025) · Team: Team of 6 · Role: product strategy, research, hi-fi prototyping, BRD · Setting: Interaction Design Studio, Northwestern
- Nectar AI — Timeline: ~3 months alongside other work (2023) · Team: Sole designer and developer, working with the CEO and clients · Role: PM and development · Setting: NectarOM, client product

Prose that duplicates these facts (e.g. Airy's summary listing weeks/interviews, Jointly's overview context line) gets trimmed so the fact strip is the single source for context.

## Technical notes

- `src/data/caseStudies.ts`: add an optional `facts` object to `CaseStudy` — `{ timeline: string; timelineNote?: string; team: string; role: string; setting: string; platform?: string }`. Existing `role`/`year`/`context`/`toolkit` fields stay for cards and listings; `facts` is the detail-page source of truth. Populate `facts` for all three studies.
- `src/pages/WorkDetail.tsx`: new `AtAGlance` component rendered between `Hero` and `Overview`, wrapped in the existing `FadeIn`. Remove the now-redundant Role/Year/Context `MetaCol` grid and the standalone toolkit row from `Hero` (their content moves into the strip), keeping the Live link in the hero.
- No new dependencies; `Overview` keeps Context/My Role/Outcome only where it adds narrative beyond the facts (Outcome stays, duplicated context is dropped).
