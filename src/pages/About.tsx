import { useEffect } from "react";
import Layout from "@/components/Layout";

const About = () => {
  useEffect(() => {
    document.title = "About — Krishna Suresh";
  }, []);

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 section-y stack-lg">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <img
            src="/images/headshot.jpeg"
            alt="Krishna Suresh"
            className="w-32 h-32 rounded-full object-cover object-top flex-shrink-0 border border-border"
          />
          <div>
            <h1 className="font-serif t-page-title tracking-tight text-foreground mb-2">Krishna Suresh<span className="text-primary">.</span></h1>
            <p className="text-muted-foreground text-sm">Designer · Engineer · Product Manager</p>
          </div>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
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
        </div>

        {/* Experience */}
        <div>
          <p className="label-eyebrow mb-3">Where I've worked</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-6">Experience</h2>
          <div className="space-y-5">
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">Founding UX Designer & AI Engineer</p>
              <p className="text-sm text-muted-foreground mb-1">Huelo · 2026–Present</p>
              <p className="text-sm text-muted-foreground">Designing and building an AI-powered interior design and shopping platform for urban renters — 1,000+ users since launch, with Gemini-powered recommendations, evals for output quality, and research-driven roadmap decisions that grew activation 20% and engagement 21%.</p>
            </div>
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">Founder, Product Manager & Engineer · Jointly Travel (MS Thesis)</p>
              <p className="text-sm text-muted-foreground mb-1">Northwestern University · 2025–2026</p>
              <p className="text-sm text-muted-foreground">End-to-end product: user research, design, and development of an AI travel app for friend groups. Shipped to 40+ beta users with journey maps, archetypes, and a weekly automated behavioral insights pipeline.</p>
            </div>
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">Design Researcher</p>
              <p className="text-sm text-muted-foreground mb-1">Northwestern Medicine · 2025</p>
              <p className="text-sm text-muted-foreground">Led design research for a digital health tool for pediatric GI patients. Ran focus groups and 12+ clinician interviews, built journey maps, and delivered validated prototypes; research supported a paper submitted to JMIR.</p>
            </div>
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">Product & Experience Designer · Southwest Airlines</p>
              <p className="text-sm text-muted-foreground mb-1">Northwestern Sponsored Project · 2025</p>
              <p className="text-sm text-muted-foreground">Designed "Relaxed Rebooking" after airport field research during irregular operations — projecting a 225,000-hour annual efficiency gain and a 40% improvement in prototype confidence.</p>
            </div>
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">UX Engineer & PM</p>
              <p className="text-sm text-muted-foreground mb-1">NectarOM · 2021–2024</p>
              <p className="text-sm text-muted-foreground">Built Nectar.ai end-to-end — drove +30% add-to-cart, +18% checkout completion, and ~99% improvement in chatbot response rates. Also shipped NectarCares, a platform connecting donors to families in need.</p>
            </div>
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">Software Engineering Intern</p>
              <p className="text-sm text-muted-foreground mb-1">Ampersand · 2020</p>
              <p className="text-sm text-muted-foreground">Supported API access management and security during the company's transition to Okta as an Identity Provider.</p>
            </div>
          </div>

        </div>

        {/* Education */}
        <div>
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
        </div>

        {/* Current Focus */}
        <div>
          <p className="label-eyebrow mb-3">Right now</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-4">Current Focus</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Building Huelo — AI-powered interior design and shopping for urban renters</li>
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Building AI tools that help other designers design and build with AI</li>
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Writing evals and shipping fast — keeping AI output quality honest</li>
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Street and travel photography</li>

          </ul>
        </div>

        {/* Links */}
        <div className="border-t border-border pt-10">
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
        </div>
      </section>
    </Layout>
  );
};

export default About;
