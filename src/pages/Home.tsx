import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import { usePointerGlow } from "@/hooks/usePointerGlow";
import ExpertiseConstellation from "@/components/ExpertiseConstellation";


const heroVariant = {
  heading: "I design AI products that solve human problems.",
  subtitle:
    "I'm an engineer and designer who's built consumer AI products across e-commerce, healthcare, and travel.",
};

const Home = () => {
  useEffect(() => {
    document.title = "Krishna Suresh — Product Designer Who Builds with AI";
  }, []);

  const featuredStudies = caseStudies.filter((s) => s.featured);
  const { containerRef: heroRef, glowRef } = usePointerGlow<HTMLElement>();

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div ref={glowRef} className="hero-glow" aria-hidden="true" data-active="false" />
        <div className="hero-noise" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 section-y">

          <p className="text-lg text-muted-foreground mb-2 animate-fade-in-up-delay-1">Hey, I'm Krishna.</p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground mb-6 leading-[1.1] animate-fade-in-up-delay-2 whitespace-pre-line">
            {heroVariant.heading}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-4 animate-fade-in-up-delay-3">
            {heroVariant.subtitle}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground/70 max-w-xl mb-8 animate-fade-in-up-delay-3">
            <GraduationCap size={14} className="shrink-0" aria-hidden="true" />
            <span>MS Engineering Design Innovation, Northwestern</span>
            <span className="text-muted-foreground/40" aria-hidden="true">·</span>
            <span>BS Computer Science, Purdue</span>
          </div>
          <div className="flex gap-4 animate-fade-in-up-delay-4">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium lift-hover t-base hover:bg-primary-hover"
            >
              View My Work
              <ArrowRight
                size={14}
                className="transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-md text-sm font-medium text-foreground lift-hover t-base hover:border-primary/60 hover:bg-card"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      <ExpertiseConstellation />



      {/* Featured Work */}
      <section className="max-w-5xl mx-auto px-6 section-y">
        <Reveal className="mb-10">
          <p className="label-eyebrow mb-3">Selected work</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground">Case studies</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
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
