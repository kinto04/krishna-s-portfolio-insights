import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

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
    subtitle: "I shape end-to-end experiences across interaction, service, and product design — translating research into flows, prototypes, and systems that teams can actually ship.",
  },
};

const ScrollSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`scroll-fade-in ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
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

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-16 sm:pt-32 sm:pb-24">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground bg-card/80 backdrop-blur-sm border border-border/60 px-3 py-1.5 rounded-full">
                <span className="relative w-2 h-2 rounded-full bg-available pulse-halo" />
                Available for Work
              </span>
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
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View My Work <ArrowRight size={14} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-card transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <ScrollSection>
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-foreground">Selected Projects</h2>
          </div>
        </ScrollSection>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {featuredStudies.map((study, i) => (
            <ScrollSection key={study.slug} className={`h-full transition-all delay-[${i * 100}ms]`}>
              <CaseStudyCard study={study} />
            </ScrollSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
