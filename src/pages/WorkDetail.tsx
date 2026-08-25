import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { caseStudies, type CaseStudy, type Slide } from "@/data/caseStudies";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Pill } from "@/components/ui/pill";
import { RenderBlock, getChapterAnchors } from "@/components/casestudy/Blocks";

// Group consecutive slides by sectionLabel into chapters.
// Slides before the first sectionLabel become an unlabeled intro chapter.
type Chapter = { label?: string; intro?: string; slides: Slide[]; id: string };

const groupIntoChapters = (slides: Slide[]): Chapter[] => {
  const chapters: Chapter[] = [];
  let current: Chapter | null = null;
  slides.forEach((slide) => {
    if (slide.sectionLabel || !current) {
      current = {
        label: slide.sectionLabel,
        intro: slide.sectionIntro,
        slides: [],
        id: slide.sectionLabel
          ? slide.sectionLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-")
          : "intro",
      };
      chapters.push(current);
    }
    current!.slides.push(slide);
  });
  return chapters;
};

const SlideBlock = ({ slide }: { slide: Slide; index: number; forceFullWidth?: boolean }) => {
  return (
    <Reveal className="mb-12">
      <div className="rounded-lg overflow-hidden bg-card border border-border">
        <img src={slide.image} alt={slide.caption ?? ""} className="w-full" loading="lazy" />
      </div>
      {slide.caption && (
        <p className="text-xs text-muted-foreground mt-3 max-w-2xl leading-relaxed">{slide.caption}</p>
      )}
    </Reveal>
  );
};

const ChapterBlock = ({ chapter, number }: { chapter: Chapter; number: number }) => {
  const numStr = String(number).padStart(2, "0");
  return (
    <section id={chapter.id} className="scroll-mt-24 mt-28 first:mt-8">
      {chapter.label && (
        <Reveal className="mb-12 pt-10 border-t border-border">
          <p className="label-eyebrow mb-5">
            Chapter {numStr}
          </p>
          <div className="flex items-baseline gap-5">
            <span className="font-serif text-5xl text-primary/70 tabular-nums leading-none">
              {numStr}
            </span>
            <div className="flex-1">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
                {chapter.label}
              </h2>
            </div>
          </div>
          {chapter.intro && (
            <p className="text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl pl-0 sm:pl-[4.5rem]">
              {chapter.intro}
            </p>
          )}
        </Reveal>
      )}
      <div>
        {chapter.slides.map((slide, i) => (
          <SlideBlock key={i} slide={slide} index={i} />
        ))}
      </div>
    </section>
  );
};

const Hero = ({ study }: { study: CaseStudy }) => (
  <header className="relative">
    {(study.heroImage || study.coverImage) && (
      <div className="relative aspect-[21/9] rounded-lg overflow-hidden bg-card mb-8">
        <img src={study.heroImage || study.coverImage} alt={study.title} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="animate-fade-in-up max-w-3xl">
      <div className="flex flex-wrap gap-2 mb-4">
        {study.tags.map((tag) => (
          <Pill key={tag} variant="subtle" size="sm" uppercase>
            {tag}
          </Pill>
        ))}
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground mb-3 leading-[1.05]">
        {study.title}
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground">{study.subtitle}</p>
      {study.liveUrl && (
        <a
          href={study.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary t-base mt-5"
        >
          View live <ExternalLink size={12} />
        </a>
      )}
    </div>
  </header>
);

const FactCell = ({ label, value, note }: { label: string; value: string; note?: string }) => (
  <div className="min-w-0">
    <p className="label-eyebrow mb-2">{label}</p>
    <p className="text-[15px] sm:text-base text-foreground leading-snug">{value}</p>
    {note && <p className="text-xs text-muted-foreground mt-1 leading-snug">{note}</p>}
  </div>
);

const AtAGlance = ({ study }: { study: CaseStudy }) => {
  const facts = study.facts;
  if (!facts) return null;
  const cells = [
    { label: "Timeline", value: facts.timeline, note: facts.timelineNote },
    { label: "Team", value: facts.team },
    { label: "My Role", value: facts.role },
    { label: "Setting", value: facts.setting },
  ];
  const chips = study.toolkit ?? [];
  return (
    <Reveal className="mt-10">
      <div className="border-t border-border pt-8">
        <p className="label-eyebrow mb-6">At a glance</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-7 stagger-children">
          {cells.map((c, i) => (
            <div
              key={c.label}
              className={i > 0 ? "md:border-l md:border-border md:pl-8" : undefined}
            >
              <FactCell {...c} />
            </div>
          ))}
        </div>
        {(chips.length > 0 || facts.platform) && (
          <div className="mt-7 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center gap-x-10 gap-y-4">
            {chips.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="label-eyebrow">Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {chips.map((t) => (
                    <Pill key={t} variant="subtle" size="sm">
                      {t}
                    </Pill>
                  ))}
                </div>
              </div>
            )}
            {facts.platform && (
              <div className="flex items-center gap-3">
                <p className="label-eyebrow">Platform</p>
                <p className="text-xs text-foreground/90">{facts.platform}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
};


type Anchor = { id: string; label: string; number?: string };

const JumpTo = ({ anchors }: { anchors: Anchor[] }) => {
  if (anchors.length === 0) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <p className="label-eyebrow shrink-0">Jump to</p>
      <div className="flex flex-wrap gap-2">
        {anchors.map((c, i) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group inline-flex items-baseline gap-2 text-xs text-muted-foreground hover:text-primary t-base"
          >
            <span className="font-serif tabular-nums text-foreground/60 group-hover:text-primary t-base">
              {c.number ?? String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-foreground group-hover:text-primary t-base">{c.label}</span>
            {i < anchors.length - 1 && <span className="text-border ml-2">/</span>}
          </a>
        ))}
      </div>
    </div>
  );
};

const Overview = ({ study, anchors }: { study: CaseStudy; anchors: Anchor[] }) => {
  if (!study.overview) {
    // Studies without a full overview: show summary + (if any) Jump-to strip on one section.
    return (
      <Reveal className="mt-12">
        <div className="border border-border rounded-lg p-6 sm:p-8 bg-card/30">
          <p className="text-base text-foreground leading-relaxed">{study.summary}</p>
        </div>
        {anchors.length > 0 && (
          <div className="mt-8 pt-8 border-t border-border">
            <JumpTo anchors={anchors} />
          </div>
        )}
      </Reveal>
    );
  }
  return (
    <Reveal className="mt-14">
      <div className="border-t border-border pt-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <p className="label-eyebrow mb-2.5">Context</p>
            <p className="text-sm text-foreground/90 leading-snug">{study.overview.context}</p>
          </div>
          <div className="md:border-l md:border-border md:pl-12">
            <p className="label-eyebrow mb-2.5">My Role</p>
            <ul className="space-y-1.5">
              {study.overview.roleDetail.map((r) => (
                <li key={r} className="text-sm text-foreground/90 leading-snug">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:border-l md:border-border md:pl-12">
            <p className="label-eyebrow mb-2.5">Outcome</p>
            <p className="text-sm text-foreground/90 leading-snug">{study.overview.outcome}</p>
          </div>
        </div>
        {anchors.length > 0 && (
          <div className="pt-8 border-t border-border">
            <JumpTo anchors={anchors} />
          </div>
        )}
      </div>
    </Reveal>
  );
};

const Closing = ({ study }: { study: CaseStudy }) => {
  const idx = caseStudies.findIndex((s) => s.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  return (
    <div className="mt-24 space-y-12">
      {study.reflection && (
        <Reveal>
          <div className="border-l-2 border-primary/70 pl-6 max-w-2xl">
            <p className="label-eyebrow mb-3">What I took away</p>
            <p className="font-serif text-xl text-foreground leading-relaxed">{study.reflection}</p>
          </div>
        </Reveal>
      )}
      {next && next.slug !== study.slug && (
        <Reveal>
          <Link
            to={`/work/${next.slug}`}
            className="group block border border-border rounded-lg p-6 sm:p-8 hover:border-primary t-base"
          >
            <p className="label-eyebrow mb-3">Next case study</p>
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-primary t-base mb-1">
                  {next.title}
                </h3>
                <p className="text-sm text-muted-foreground">{next.subtitle}</p>
              </div>
              <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" size={24} />
            </div>
          </Link>
        </Reveal>
      )}
    </div>
  );
};

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  useEffect(() => {
    document.title = study ? `${study.title} — Krishna Suresh` : "Not Found";
    window.scrollTo(0, 0);
  }, [study]);

  const chapters = useMemo(() => (study?.slides ? groupIntoChapters(study.slides) : []), [study]);
  const blockAnchors = useMemo<Anchor[]>(
    () => (study?.blocks ? getChapterAnchors(study.blocks) : []),
    [study]
  );
  const slideAnchors = useMemo<Anchor[]>(
    () =>
      chapters
        .filter((c) => c.label)
        .map((c, i) => ({ id: c.id, label: c.label!, number: String(i + 1).padStart(2, "0") })),
    [chapters]
  );
  const anchors = study?.blocks ? blockAnchors : slideAnchors;

  if (!study) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-6 section-y">
          <p className="text-muted-foreground">Case study not found.</p>
          <Link to="/work" className="text-sm text-foreground underline mt-4 inline-block">
            ← Back to work
          </Link>
        </div>
      </Layout>
    );
  }

  const themed = !!study.theme;
  const themeStyle = study.theme
    ? ({
        ["--background" as any]: study.theme.background,
        ["--foreground" as any]: study.theme.foreground,
        ["--muted-foreground" as any]: study.theme.mutedForeground,
        ["--border" as any]: study.theme.border,
        ["--card" as any]: study.theme.card,
        ["--primary" as any]: study.theme.primary,
        backgroundColor: `hsl(${study.theme.background})`,
        color: `hsl(${study.theme.foreground})`,
      } as React.CSSProperties)
    : undefined;

  return (
    <Layout>
      <div style={themeStyle} className={themed ? "w-full" : undefined}>
        <article className="max-w-5xl mx-auto px-6 pt-10 pb-16 sm:pb-24">
          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground t-base mb-8"
          >
            <ArrowLeft size={14} /> All projects
          </Link>

          <Hero study={study} />

          <AtAGlance study={study} />

          <Overview study={study} anchors={anchors} />


          {/* Native metrics */}
          {study.metrics && study.metrics.length > 0 && (
            <Reveal className="mt-12">
              <div className="border-y border-border py-10 grid grid-cols-3 gap-6 text-center">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-serif text-4xl sm:text-5xl text-foreground mb-1">{m.value}</p>
                    <p className="text-sm font-medium text-foreground mb-0.5">{m.label}</p>
                    {m.sublabel && <p className="text-xs text-muted-foreground">{m.sublabel}</p>}
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* Body: blocks (preferred) or chapters fallback */}
          {study.blocks && study.blocks.length > 0 ? (
            <div className="mt-8">
              {study.blocks.map((block, i) => {
                if (block.kind === "chapter") {
                  return (
                    <section key={block.id} id={block.id} className="scroll-mt-24">
                      <RenderBlock block={block} index={i} />
                    </section>
                  );
                }
                return <RenderBlock key={i} block={block} index={i} />;
              })}
            </div>
          ) : chapters.length > 0 ? (
            <div className="mt-8">
              {chapters.map((chapter, i) => {
                const labeledBefore = chapters.slice(0, i).filter((c) => c.label).length;
                const number = chapter.label ? labeledBefore + 1 : 0;
                return <ChapterBlock key={chapter.id + i} chapter={chapter} number={number} />;
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-dashed border-border p-16 text-center">
              <p className="text-muted-foreground text-sm">Case study assets coming soon.</p>
            </div>
          )}

          <Closing study={study} />
        </article>
      </div>
    </Layout>
  );
};

export default WorkDetail;
