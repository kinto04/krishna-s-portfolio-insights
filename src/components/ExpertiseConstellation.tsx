import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";

const TAGS = ["AI", "Experience Design", "Interaction Design", "Research", "Conversational UI", "Healthcare"];

const ExpertiseConstellation = () => {
  return (
    <section className="border-b border-border">
      <div className="container-page py-14 sm:py-16">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end mb-8">
          <div className="md:col-span-7">
          <p className="label-eyebrow mb-3">Capabilities × projects</p>
          <h2 className="t-section-title text-foreground">
            A representation of my work
          </h2>
          </div>
          <p className="md:col-span-5 text-sm text-muted-foreground md:text-right">Select a capability to view the related case studies.</p>
        </Reveal>
        <Reveal index={1}>
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {TAGS.map((tag, index) => {
              const studies = caseStudies.filter((study) => study.tags.includes(tag));
              return (
                <Link
                  key={tag}
                  to={`/work?tag=${encodeURIComponent(tag)}`}
                  className="group relative min-h-40 border-b border-r border-border p-5 t-base hover:bg-card focus-ring"
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary t-base group-hover:scale-x-100" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <span className="h-2 w-2 bg-primary/70" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-foreground group-hover:text-primary t-base">{tag}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{studies.map((study) => study.title).join(" · ")}</p>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ExpertiseConstellation;
