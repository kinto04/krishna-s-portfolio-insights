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

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (0.5 - y) * 10,
      y: (x - 0.5) * 10,
    });
  };

  const handleHeroMouseLeave = () => setTilt({ x: 0, y: 0 });

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
                className="hero-image group relative overflow-hidden rounded-md border border-border bg-card"
                onMouseMove={handleHeroMouseMove}
                onMouseLeave={handleHeroMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                <img
                  src={heroImage}
                  alt="A team brainstorming session with colorful sticky notes on a whiteboard"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />

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
