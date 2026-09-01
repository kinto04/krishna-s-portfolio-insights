import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { usePointerGlow } from "@/hooks/usePointerGlow";

const photos = [
  {
    src: "/images/varanasi/flower-market.jpg",
    alt: "A woman selling flowers at a market in Varanasi",
    caption: "Flower market, Varanasi",
  },
  {
    src: "/images/varanasi/alley-evening.jpg",
    alt: "A narrow alley in Varanasi lit by evening light",
    caption: "Alley at dusk, Varanasi",
  },
  {
    src: "/images/varanasi/quiet-afternoon.jpg",
    alt: "A quiet afternoon scene by the ghats of Varanasi",
    caption: "Quiet afternoon, Varanasi",
  },
  {
    src: "/images/varanasi/sugarcane.jpg",
    alt: "Fresh sugarcane juice being pressed on the street in Varanasi",
    caption: "Sugarcane juice, Varanasi",
  },
];

const experience = [
  {
    period: "2026 —",
    role: "Founding UX Designer & AI Engineer",
    org: "Huelo · 2026–Present",
    blurb:
      "Designing and building an AI-powered interior design and shopping platform for urban renters — 1,000+ users since launch, with Gemini-powered recommendations, evals for output quality, and research-driven roadmap decisions that grew activation 20% and engagement 21%.",
  },
  {
    period: "2025–26",
    role: "Founder and Designer · Jointly Travel (MS Thesis)",
    org: "Northwestern University · 2025–2026",
    blurb:
      "End-to-end product: user research, design, and development of an AI travel app for friend groups. Shipped to 40+ beta users with journey maps, archetypes, and a weekly automated behavioral insights pipeline.",
  },
  {
    period: "2025",
    role: "Design Researcher",
    org: "Northwestern Medicine · 2025",
    blurb:
      "Led design research for a digital health tool for pediatric GI patients. Ran focus groups and 12+ clinician interviews, built journey maps, and delivered validated prototypes; research supported a paper submitted to JMIR.",
  },
  {
    period: "2025",
    role: "Product & Experience Designer · Southwest Airlines",
    org: "Northwestern Sponsored Project · 2025",
    blurb:
      "Designed \"Relaxed Rebooking\" after airport field research during irregular operations — projecting a 225,000-hour annual efficiency gain and a 40% improvement in prototype confidence.",
  },
  {
    period: "2021–24",
    role: "UX Engineer & PM",
    org: "NectarOM · 2021–2024",
    blurb:
      "Built Nectar.ai end-to-end — drove +30% add-to-cart, +18% checkout completion, and ~99% improvement in chatbot response rates. Also shipped NectarCares, a platform connecting donors to families in need.",
  },
  {
    period: "2020",
    role: "Software Engineering Intern",
    org: "Ampersand · 2020",
    blurb:
      "Supported API access management and security during the company's transition to Okta as an Identity Provider.",
  },
];

const About = () => {
  const { containerRef, glowRef } = usePointerGlow<HTMLDivElement>();

  useEffect(() => {
    document.title = "About — Krishna Suresh";
  }, []);

  return (
    <Layout>
      <div
        ref={containerRef}
        className="relative max-w-3xl mx-auto px-6 section-y stack-lg overflow-visible"
      >
        {/* cursor-reactive glow behind the hero */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full opacity-0 transition-opacity duration-700 data-[active=true]:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.14), transparent 65%)",
          }}
        />

        {/* Hero */}
        <Reveal className="relative flex flex-col sm:flex-row gap-8 items-center">
          <div className="group relative shrink-0">
            <img
              src="/images/headshot.jpeg"
              alt="Portrait of Krishna Suresh"
              className="w-40 h-40 rounded-2xl object-cover object-top border border-border ring-1 ring-primary/20 shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.35)] rotate-[-2deg] transition-transform duration-500 ease-out group-hover:rotate-0"
            />
          </div>
          <div>
            <h1 className="font-serif t-page-title tracking-tight text-foreground mb-2">
              Krishna Suresh<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground text-sm">
              Designer · Engineer
            </p>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a <strong className="text-foreground">Designer and UX Engineer</strong> who builds at the intersection of research, design, and engineering. CS degree from Purdue. Just graduated with an{" "}
            <strong className="text-foreground">MS in Engineering Design Innovation from Northwestern</strong>.
          </p>
          <p>
            Early in my career as a software engineer, I kept noticing the same pattern: teams building solutions in search of a problem. Tech first, users second. By the time we tried to ship what we'd built, we'd already lost the thread of what people actually needed.
          </p>
          <p>
            That observation changed how I work. I started with the user, mapped the problem space, and built tight feedback loops with real stakeholders at every stage.{" "}
            <strong className="text-foreground">That shift led me to human-centered design — and eventually to Northwestern.</strong>
          </p>
          <p>
            Since then I've built products across <strong className="text-foreground">AI, e-commerce, healthcare, and social impact</strong> — from a conversational AI agent that drove measurable e-commerce lifts, to a clinical diagnostic tool co-designed with 12+ healthcare professionals, to a group travel app I launched as my master's thesis.
          </p>
          <p className="text-sm">
            Based in New York, NY. Looking for <strong className="text-foreground">Design roles</strong> in AI, e-commerce, travel, and healthcare.
          </p>
        </Reveal>

        {/* Beyond work */}
        <Reveal>
          <p className="label-eyebrow mb-3">Beyond work</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-3">Off the clock</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Outside of work I'm usually chasing curiosity — whether that's through a camera, a coffee cup, or a pickup game.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Photography */}
            <div className="surface p-4 flex flex-col">
              <figure className="group relative overflow-hidden rounded-lg border border-border mb-4">
                <img
                  src="/images/varanasi/flower-market.jpg"
                  alt="A woman selling flowers at a market in Varanasi"
                  loading="lazy"
                  width={600}
                  height={450}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </figure>
              <p className="text-foreground font-medium mb-1">Photography &amp; film</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                My explorations of street photography and filmmaking. I enjoy slowing down and observing people, food, and culture.
              </p>
              <Link
                to="/stories/scenes-from-varanasi"
                className="mt-auto inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-4 hover:text-primary t-base"
              >
                Scenes from Varanasi →
              </Link>
            </div>

            {/* Coffee */}
            <div className="surface p-4 flex flex-col">
              <figure className="group relative overflow-hidden rounded-lg border border-border mb-4">
                <img
                  src="/images/about/coffee.png"
                  alt="Minimal illustration of a pour-over coffee setup"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </figure>
              <p className="text-foreground font-medium mb-1">Specialty coffee</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm deep into specialty coffee. I love exploring roasts, learning how origin and process show up in the cup, and treating brewing like a small daily ritual.
              </p>
            </div>

            {/* Sports */}
            <div className="surface p-4 flex flex-col">
              <figure className="group relative overflow-hidden rounded-lg border border-border mb-4">
                <img
                  src="/images/about/sports.png"
                  alt="Minimal illustration of a soccer ball on a field at dusk"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </figure>
              <p className="text-foreground font-medium mb-1">Team sports</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm a big believer in team sports — there's nothing like the energy of people working toward the same goal. I led an intramural soccer team in undergrad and still love any chance to get on the field with friends.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Experience */}
        <Reveal>
          <p className="label-eyebrow mb-3">Where I've worked</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-6">Experience</h2>
          <div className="space-y-5">
            {experience.map((job) => (
              <div
                key={job.role}
                className="group border-l-2 border-border hover:border-primary t-base pl-4 flex gap-4"
              >
                <span className="hidden sm:block w-16 shrink-0 pt-0.5 text-xs font-mono text-muted-foreground/80 group-hover:text-primary t-base">
                  {job.period}
                </span>
                <div>
                  <p className="text-foreground font-medium">{job.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">{job.org}</p>
                  <p className="text-sm text-muted-foreground">{job.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Education */}
        <Reveal>
          <p className="label-eyebrow mb-3">Background</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="text-foreground font-medium">Northwestern University</p>
              <p className="text-sm text-muted-foreground">MS Engineering Design Innovation · 3.9 GPA · Entrepreneurship Minor · 2026</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Purdue University</p>
              <p className="text-sm text-muted-foreground">BS Computer Science · 2020</p>
            </div>
          </div>
        </Reveal>

        {/* Current Focus */}
        <Reveal>
          <p className="label-eyebrow mb-3">Right now</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-4">Current Focus</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Building Huelo - AI-powered interior design and shopping for urban renters</li>
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Building AI tools that help other designers design and build with AI</li>
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Learning how to evaluate &amp; improve LLM output quality</li>
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Street and travel photography</li>
          </ul>
        </Reveal>

        {/* A few more things */}
        <Reveal>
          <p className="label-eyebrow mb-3">The small print</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-4">A few more things</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg border border-border p-4">
              <p className="text-foreground font-medium mb-1">Based in</p>
              <p className="text-muted-foreground">New York, NY</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-foreground font-medium mb-1">Usually doing</p>
              <p className="text-muted-foreground">Wandering a city with a camera, trying new cuisines, vibe coding solutions to my problems</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-foreground font-medium mb-1">Favorite trip</p>
              <p className="text-muted-foreground">Varanasi — the photos above say why</p>
            </div>
          </div>
        </Reveal>

        {/* Links */}
        <Reveal className="border-t border-border pt-10">
          <p className="label-eyebrow mb-3">Contact</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-4">Get in Touch</h2>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://linkedin.com/in/krishna-suresh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary t-base"
            >
              LinkedIn
            </a>
            <a
              href="mailto:work.krishnasuresh@gmail.com"
              className="text-foreground underline underline-offset-4 hover:text-primary t-base"
            >
              Email
            </a>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
};

export default About;
