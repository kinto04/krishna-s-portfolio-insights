import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import HeroHeadline from "@/components/HeroHeadline";
import ExpertiseConstellation from "@/components/ExpertiseConstellation";


const heroVariant = {
  subtitle:
    "I'm a designer and engineer who's built consumer AI products across e-commerce, healthcare, and travel.",
};

const Home = () => {
  useEffect(() => {
    document.title = "Krishna Suresh — Product Designer Who Builds with AI";
  }, []);

  const featuredStudies = caseStudies.filter((s) => s.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border grid-rule">
        <div className="container-page border-x border-border/50">
          <div className="signal-stripe" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9">
              <p className="label-eyebrow mb-6 animate-fade-in-up-delay-1">Hey, I'm Krishna.</p>
              <div className="mb-8">
                <HeroHeadline />
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up-delay-3">
                {heroVariant.subtitle}
              </p>
            </div>
            <aside className="lg:col-span-3 lg:border-l lg:border-border lg:pl-6 flex flex-col justify-end animate-fade-in-up-delay-3">
              <p className="label-eyebrow mb-4">Background</p>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <GraduationCap size={15} className="mt-1 shrink-0 text-signal-green" aria-hidden="true" />
                <p>MS Engineering Design Innovation, Northwestern<br />BS Computer Science, Purdue</p>
              </div>
            </aside>
          </div>
          <div className="flex flex-wrap gap-3 border-t border-border py-5 animate-fade-in-up-delay-4">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-medium press t-base hover:bg-primary-hover focus-ring"
            >
              View My Work
              <ArrowRight
                size={14}
                className="transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-sm text-sm font-medium text-foreground press t-base hover:border-foreground hover:bg-card focus-ring"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      <ExpertiseConstellation />



      {/* Featured Work */}
      <section className="container-page section-y border-x border-border/50">
        <Reveal className="mb-10">
          <p className="label-eyebrow mb-3">Selected work</p>
          <h2 className="t-section-title text-foreground">Case studies</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {featuredStudies.map((study, i) => (
            <Reveal key={study.slug} index={i} className="h-full">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </section>

    </Layout>
  );
};

export default Home;
