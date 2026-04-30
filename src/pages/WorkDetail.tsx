import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { caseStudies } from "@/data/caseStudies";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`scroll-fade-in ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
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
      <article className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        {/* Back link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        {/* Header */}
        <div className="mb-10 animate-fade-in-up max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-wider text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-3">
            {study.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">{study.subtitle}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground border-b border-border pb-6 mb-6">
            <span><strong className="text-foreground">Role:</strong> {study.role}</span>
            <span><strong className="text-foreground">Year:</strong> {study.year}</span>
            <span><strong className="text-foreground">Context:</strong> {study.context}</span>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            {study.summary}
          </p>
          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-border rounded-full px-4 py-2 hover:bg-card transition-colors"
            >
              View live <ExternalLink size={13} />
            </a>
          )}
        </div>

        {/* Native metrics — rendered before slides if present */}
        {study.metrics && study.metrics.length > 0 && (
          <FadeIn className="mb-4">
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

        {/* Slides */}
        {study.slides && study.slides.length > 0 ? (
          <div className="mt-6">
            {study.slides.map((slide, i) => (
              <FadeIn key={i}>
                {slide.sectionLabel && (
                  <div className="flex items-center gap-4 mt-10 mb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                      {slide.sectionLabel}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                )}
                <div className={`rounded-lg overflow-hidden bg-card mb-2 ${!slide.sectionLabel && i > 0 ? "mt-3" : ""}`}>
                  <img
                    src={slide.image}
                    alt={slide.caption ?? slide.sectionLabel ?? ""}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                {slide.caption && (
                  <p className="text-xs text-muted-foreground px-1 leading-relaxed mb-1">{slide.caption}</p>
                )}
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-dashed border-border p-16 text-center">
            <p className="text-muted-foreground text-sm">Case study assets coming soon.</p>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default WorkDetail;
