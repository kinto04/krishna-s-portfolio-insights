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
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        <Link
          to="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
          {study.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-2">{study.subtitle}</p>

        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground mb-12 border-b border-border pb-8">
          <span><strong className="text-foreground">Role:</strong> {study.role}</span>
          <span><strong className="text-foreground">Context:</strong> {study.duration}</span>
        </div>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-3">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-3">Problem</h2>
          <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-3">Approach</h2>
          <p className="text-muted-foreground leading-relaxed">{study.approach}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-3">Outcome</h2>
          <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
        </section>
      </article>
    </Layout>
  );
};

export default WorkDetail;
