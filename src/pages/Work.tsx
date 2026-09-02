import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import Reveal from "@/components/Reveal";

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  useEffect(() => {
    document.title = tag ? `${tag} work — Krishna Suresh` : "Work — Krishna Suresh";
  }, [tag]);

  const matches = useMemo(
    () => (tag ? caseStudies.filter((s) => s.tags.includes(tag)) : caseStudies),
    [tag]
  );
  const noMatch = Boolean(tag) && matches.length === 0;
  const shown = noMatch ? caseStudies : matches;

  return (
    <Layout>
      <section className="container-page section-y">
        <div className="animate-fade-in-up">
          <p className="label-eyebrow mb-3">Case studies</p>
          <h1 className="font-serif t-page-title tracking-tight text-foreground mb-3">Work</h1>
          <p className="text-muted-foreground mb-6">
            A selection of products I've built, designed, and managed - from AI chatbots to clinical tools.
          </p>

          {tag && (
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                {tag}
                <span className="text-primary/60">
                  {matches.length} {matches.length === 1 ? "study" : "studies"}
                </span>
              </span>
              <button
                type="button"
                onClick={() => setSearchParams({}, { replace: true })}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground t-base press focus-ring hover:border-primary/50 hover:text-foreground"
                aria-label="Clear filter"
              >
                <X size={12} /> Clear filter
              </button>
              {noMatch && (
                <p className="text-sm text-muted-foreground">
                  Nothing tagged “{tag}” yet — showing everything.
                </p>
              )}
            </div>
          )}
          {!tag && <div className="mb-10" />}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {shown.map((study, i) => (
            <Reveal key={study.slug} index={i}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Work;
