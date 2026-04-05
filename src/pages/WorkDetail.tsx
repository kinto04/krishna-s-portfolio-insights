import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { caseStudies } from "@/data/caseStudies";
import { ArrowLeft } from "lucide-react";

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
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <Link
          to="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        {/* Header */}
        <div className="mb-12">
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
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground border-b border-border pb-8">
            <span><strong className="text-foreground">Role:</strong> {study.role}</span>
            <span><strong className="text-foreground">Year:</strong> {study.year}</span>
            <span><strong className="text-foreground">Context:</strong> {study.duration}</span>
          </div>
          {study.tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {study.tools.map((tool) => (
                <span key={tool} className="text-xs px-2 py-1 rounded bg-card text-muted-foreground">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Goal */}
        <section className="mb-16 text-center py-8 border-y border-border">
          <p className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed max-w-2xl mx-auto">
            {study.goal}
          </p>
        </section>

        {/* My Role */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl text-foreground mb-6">My Role</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {study.responsibilities.map((resp, i) => (
              <div key={i} className="bg-card rounded-lg p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{resp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl text-foreground mb-4">Impact & Deliverables</h2>
          <p className="text-muted-foreground leading-relaxed">{study.impact}</p>
        </section>

        {/* Process */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl text-foreground mb-4">Process</h2>
          <p className="text-muted-foreground leading-relaxed">{study.process}</p>
        </section>

        {/* Challenges */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl text-foreground mb-4">Challenges & Mitigations</h2>
          <p className="text-muted-foreground leading-relaxed">{study.challenges}</p>
        </section>

        {/* Outcome */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl text-foreground mb-4">Outcome</h2>
          <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
        </section>
      </article>
    </Layout>
  );
};

export default WorkDetail;
