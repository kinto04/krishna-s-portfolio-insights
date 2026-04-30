import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { caseStudies, type CaseStudy, type Slide } from "@/data/caseStudies";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { RenderBlock, getChapterAnchors } from "@/components/casestudy/Blocks";

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

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

const SlideBlock = ({ slide, index, forceFullWidth }: { slide: Slide; index: number; forceFullWidth?: boolean }) => {
  const fullWidth = forceFullWidth || slide.fullWidth || !slide.caption;
  const reverse = index % 2 === 1;

  if (fullWidth) {
    return (
      <FadeIn className="mb-6">
        <div className="rounded-lg overflow-hidden bg-card">
          <img src={slide.image} alt={slide.caption ?? ""} className="w-full" loading="lazy" />
        </div>
        {slide.caption && (
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl leading-relaxed">{slide.caption}</p>
        )}
      </FadeIn>
    );
  }

  return (
    <FadeIn className="mb-10">
      <div className={`grid md:grid-cols-5 gap-6 md:gap-8 items-center`}>
        <div className={`md:col-span-3 rounded-lg overflow-hidden bg-card ${reverse ? "md:order-2" : ""}`}>
          <img src={slide.image} alt={slide.caption ?? ""} className="w-full" loading="lazy" />
        </div>
        <div className={`md:col-span-2 ${reverse ? "md:order-1" : ""}`}>
          <p className="font-serif text-lg text-foreground leading-relaxed">{slide.caption}</p>
        </div>
      </div>
    </FadeIn>
  );
};

const ChapterBlock = ({ chapter, number }: { chapter: Chapter; number: number }) => {
  return (
    <section id={chapter.id} className="scroll-mt-24 mt-20 first:mt-8">
      {chapter.label && (
        <FadeIn className="mb-10">
          <div className="flex items-baseline gap-5">
            <span className="font-serif text-5xl text-primary/70 tabular-nums leading-none">
              {String(number).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight">
                {chapter.label}
              </h2>
            </div>
          </div>
          {chapter.intro && (
            <p className="text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl pl-0 sm:pl-[4.5rem]">
              {chapter.intro}
            </p>
          )}
        </FadeIn>
      )}
      <div>
        {chapter.slides.map((slide, i) => (
          <SlideBlock key={i} slide={slide} index={i} forceFullWidth={i === 0 && !!chapter.label} />
        ))}
      </div>
    </section>
  );
};

const Hero = ({ study }: { study: CaseStudy }) => (
  <header className="relative">
    {study.coverImage && (
      <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-card mb-8">
        <img src={study.coverImage} alt={study.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    )}
    <div className="animate-fade-in-up max-w-3xl">
      <div className="flex flex-wrap gap-2 mb-4">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border/60 rounded-full px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground mb-3 leading-[1.05]">
        {study.title}
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground">{study.subtitle}</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border">
      <MetaCol label="Role" value={study.role} />
      <MetaCol label="Year" value={study.year} />
      <MetaCol label="Context" value={study.context} />
      {study.liveUrl && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Live</p>
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
          >
            View live <ExternalLink size={12} />
          </a>
        </div>
      )}
    </div>
  </header>
);

const MetaCol = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
    <p className="text-sm text-foreground leading-snug">{value}</p>
  </div>
);

type Anchor = { id: string; label: string; number?: string };

const Overview = ({ study, anchors }: { study: CaseStudy; anchors: Anchor[] }) => {
  if (!study.overview) {
    // Fallback: show summary as overview when overview field absent
    return (
      <FadeIn className="mt-12">
        <div className="border border-border rounded-xl p-6 sm:p-8 bg-card/30">
          <p className="text-base text-foreground leading-relaxed">{study.summary}</p>
        </div>
      </FadeIn>
    );
  }
  const labeled = anchors;
  return (
    <FadeIn className="mt-12">
      <div className="border border-border rounded-xl p-6 sm:p-8 bg-card/30">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
            <p className="text-sm text-foreground leading-relaxed">{study.overview.context}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">My Role</p>
            <ul className="space-y-1.5">
              {study.overview.roleDetail.map((r) => (
                <li key={r} className="text-sm text-foreground leading-relaxed">
                  — {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Outcome</p>
            <p className="text-sm text-foreground leading-relaxed">{study.overview.outcome}</p>
          </div>
        </div>
        {labeled.length > 0 && (
          <div className="pt-6 border-t border-border">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Jump to</p>
            <div className="flex flex-wrap gap-2">
              {labeled.map((c, i) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="text-xs text-foreground border border-border/60 rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
                >
                  {c.number ?? String(i + 1).padStart(2, "0")} · {c.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
};

const Closing = ({ study }: { study: CaseStudy }) => {
  const idx = caseStudies.findIndex((s) => s.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  return (
    <div className="mt-24 space-y-12">
      {study.reflection && (
        <FadeIn>
          <div className="border-l-2 border-primary pl-6 max-w-2xl">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">What I took away</p>
            <p className="font-serif text-xl text-foreground leading-relaxed">{study.reflection}</p>
          </div>
        </FadeIn>
      )}
      {next && next.slug !== study.slug && (
        <FadeIn>
          <Link
            to={`/work/${next.slug}`}
            className="group block border border-border rounded-xl p-6 sm:p-8 hover:border-primary transition-colors"
          >
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Next case study</p>
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-primary transition-colors mb-1">
                  {next.title}
                </h3>
                <p className="text-sm text-muted-foreground">{next.subtitle}</p>
              </div>
              <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" size={24} />
            </div>
          </Link>
        </FadeIn>
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

  if (!study) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-20">
          <p className="text-muted-foreground">Case study not found.</p>
          <Link to="/work" className="text-sm text-foreground underline mt-4 inline-block">
            ← Back to work
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-5xl mx-auto px-6 pt-10 pb-24">
        <Link
          to="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        <Hero study={study} />

        <Overview study={study} chapters={chapters} />

        {/* Native metrics */}
        {study.metrics && study.metrics.length > 0 && (
          <FadeIn className="mt-12">
            <div className="border-y border-border py-10 grid grid-cols-3 gap-6 text-center">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-4xl sm:text-5xl text-foreground mb-1">{m.value}</p>
                  <p className="text-sm font-medium text-foreground mb-0.5">{m.label}</p>
                  {m.sublabel && <p className="text-xs text-muted-foreground">{m.sublabel}</p>}
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Chapters */}
        {chapters.length > 0 ? (
          <div className="mt-8">
            {chapters.map((chapter, i) => {
              // Number only labeled chapters; intro chapter (no label) gets number 0/skipped
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
    </Layout>
  );
};

export default WorkDetail;
