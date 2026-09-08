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
      <section className="border-b border-border">
        <div className="container-page">
          <div className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="label-eyebrow mb-6 animate-fade-in-up-delay-1">Hey, I'm Krishna.</p>
              <div className="mb-8">
                <HeroHeadline />
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up-delay-3">
                {heroVariant.subtitle}
              </p>
              <div className="mt-5 flex items-start gap-2 text-sm text-muted-foreground animate-fade-in-up-delay-3">
                <GraduationCap size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <p>MS Engineering Design Innovation, Northwestern · BS Computer Science, Purdue</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up-delay-4">
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

            {/* Portrait */}
            <Reveal index={2} className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 -rotate-2 rounded-md border border-primary/20 bg-card" aria-hidden="true" />
              <img
                src="/images/headshot.jpeg"
                alt="Portrait of Krishna Suresh"
                className="relative aspect-[4/5] w-full rounded-md border border-border object-cover shadow-[0_24px_48px_-24px_hsl(var(--foreground)/0.25)]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -bottom-4 left-4 flex items-center gap-2.5 rounded-md border border-border bg-card px-4 py-3 shadow-[0_16px_32px_-16px_hsl(var(--foreground)/0.25)]">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ExpertiseConstellation />



      {/* Featured Work */}
      <section className="container-page section-y">
        <Reveal className="mb-7">
          <p className="label-eyebrow mb-3">Selected work</p>
          <h2 className="t-section-title text-foreground">Case studies</h2>
        </Reveal>

        <div className="grid overflow-hidden rounded-md border border-border bg-card md:grid-cols-3">
          {featuredStudies.map((study, i) => (
            <Reveal
              key={study.slug}
              index={i}
              className="h-full border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <CaseStudyCard study={study} presentation="contained" />
            </Reveal>
          ))}
        </div>
      </section>

    </Layout>
  );
};

export default Home;
