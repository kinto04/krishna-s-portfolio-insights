import { useEffect } from "react";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import Reveal from "@/components/Reveal";

const Work = () => {
  useEffect(() => {
    document.title = "Work — Krishna Suresh";
  }, []);

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 section-y">
        <div className="animate-fade-in-up">
          <p className="label-eyebrow mb-3">Case studies</p>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-3">Work</h1>
          <p className="text-muted-foreground mb-14 max-w-xl">
            A selection of products I've built, designed, and managed — from AI chatbots to clinical tools.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {caseStudies.map((study, i) => (
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
