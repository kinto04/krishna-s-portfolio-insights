import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import HeroHeadline from "@/components/HeroHeadline";
import ExpertiseConstellation from "@/components/ExpertiseConstellation";
const heroImage = "/images/hero/collaborative-design-session.png";


const heroVariant = {
  subtitle:
    "I'm a designer and engineer who's built consumer AI products across e-commerce, healthcare, and travel.",
};

const Home = () => {
  useEffect(() => {
    document.title = "Krishna Suresh — Product Designer Who Builds with AI";
  }, []);

  const [panelOpen, setPanelOpen] = useState(false);

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

            {/* A single, living view into the work */}
            <Reveal index={2} className="mx-auto w-full max-w-lg lg:max-w-[28rem]">
              <div
                className={`hero-image group relative cursor-pointer overflow-hidden rounded-md border border-border bg-card${panelOpen ? " hero-panel-open" : ""}`}
                onClick={() => setPanelOpen((open) => !open)}
              >
                <img
                  src={heroImage}
                  alt="A team brainstorming session with colorful sticky notes on a whiteboard"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />

                {/* "Process to Product": hover reveals a polished AI layer over the messy human process */}
                <div
                  aria-hidden="true"
                  className="hero-product-panel absolute inset-y-0 right-0 flex w-[46%] flex-col justify-center border-l border-white/10 bg-background/70 px-4 py-5 backdrop-blur-md sm:px-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">AI synthesis</p>
                  <ul className="mt-3 space-y-2.5 text-[11px] leading-snug text-foreground sm:text-xs">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      3 themes clustered
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Sentiment: positive
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Journey map drafted
                    </li>
                  </ul>
                  <div className="mt-4 h-px w-full bg-border" />
                  <div className="mt-3 flex items-end gap-1" aria-hidden="true">
                    {[35, 55, 40, 70, 60, 85, 75].map((h, i) => (
                      <span
                        key={i}
                        className="w-1.5 rounded-sm bg-primary/70"
                        style={{ height: `${h * 0.28}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ExpertiseConstellation />



      {/* Featured Work */}
      <section className="container-page section-y">
        <Reveal className="mb-7">
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
