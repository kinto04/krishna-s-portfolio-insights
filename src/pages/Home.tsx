import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { usePointerGlow } from "@/hooks/usePointerGlow";
import { Pill } from "@/components/ui/pill";


const heroVariants: Record<string, { heading: string; subtitle: string }> = {
  startup: {
    heading: "A 0-1 Product\nManager.",
    subtitle: "I transform ideas into Market-Ready Solutions by bridging Strategy, Design, and Development to create products people love and use.",
  },
  product: {
    heading: "I'm a Product\nManager",
    subtitle: "I combine data-driven insights with user-centered design to enhance existing products and develop new features that drive retention and expansion.",
  },
  design: {
    heading: "I design human\nexperiences.",
    subtitle: "I shape end-to-end experiences across interaction, service, and product design, translating research into digital products that can actually ship.",
  },
};




const Home = () => {
  const [searchParams] = useSearchParams();
  const variant = useMemo(() => {
    const v = searchParams.get("v") || "design";
    return heroVariants[v] || heroVariants.startup;
  }, [searchParams]);

  useEffect(() => {
    document.title = "Krishna Suresh — Product Manager, Builder, Writer";
  }, []);

  const featuredStudies = caseStudies.filter((s) => s.featured);
  const { containerRef: heroRef, glowRef } = usePointerGlow<HTMLElement>();

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div ref={glowRef} className="hero-glow" aria-hidden="true" data-active="false" />
        <div className="hero-noise" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-16 sm:pt-32 sm:pb-24">
          <div className="animate-fade-in-up">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-end gap-4 mb-6">
              <div className="flex flex-col gap-2 sm:text-right">
                <span className="label-eyebrow">Expertise in</span>
                <div className="flex flex-wrap sm:justify-end gap-2">
                  <Pill variant="outline" size="sm" uppercase chevron={false}>AI Product Design</Pill>
                  <Pill variant="outline" size="sm" uppercase chevron={false}>0→1 Product</Pill>
                  <Pill variant="outline" size="sm" uppercase chevron={false}>Experience Design</Pill>
                  <Pill variant="outline" size="sm" uppercase chevron={false}>Interaction Design</Pill>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-2 animate-fade-in-up-delay-1">Hey, I'm Krishna.</p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground mb-6 leading-[1.1] animate-fade-in-up-delay-2 whitespace-pre-line">
            {variant.heading}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8 animate-fade-in-up-delay-3">
            {variant.subtitle}
          </p>
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

      {/* Featured Work */}
      <section className="max-w-5xl mx-auto px-6 pb-16 sm:pb-24">
        <Reveal className="mb-10">
          <p className="label-eyebrow mb-3">Selected work</p>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">Selected Projects</h2>
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
