import { useEffect } from "react";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const Work = () => {
  useEffect(() => {
    document.title = "Work — Krishna Suresh";
  }, []);

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-24">
        <h1 className="font-serif text-4xl tracking-tight text-foreground mb-3">Work</h1>
        <p className="text-muted-foreground mb-14 max-w-xl">
          A selection of products I've built, designed, and managed — from AI chatbots to clinical tools.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Work;
