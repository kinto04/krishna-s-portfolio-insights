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
            <p className="text-muted-foreground text-sm">Product Manager · Designer · Engineer</p>
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
            Based in New York, NY. Looking for <strong className="text-foreground">PM and Design roles</strong> in AI, e-commerce, travel, and healthcare.
          </p>
        </div>

        {/* Experience */}
        <div>
          <p className="label-eyebrow mb-3">Where I've worked</p>
          <h2 className="font-serif t-section-title tracking-tight text-foreground mb-6">Experience</h2>
          <div className="space-y-5">
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">Product Manager & Designer · Jointly (MS Thesis)</p>
              <p className="text-sm text-muted-foreground mb-1">Northwestern University · 2025–2026</p>
              <p className="text-sm text-muted-foreground">End-to-end product: user research, design, and development of an AI-powered group travel coordination app. Currently in beta with 40+ users.</p>
            </div>
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">Product Lead</p>
              <p className="text-sm text-muted-foreground mb-1">Northwestern Medicine · 2025</p>
              <p className="text-sm text-muted-foreground">Led product strategy and design for a clinical diagnostic tool for pediatric gut-brain disorders. Facilitated research across 12+ clinicians and delivered validated prototypes.</p>
            </div>
            <div className="border-l-2 border-border hover:border-primary t-base pl-4">
              <p className="text-foreground font-medium">Product Manager & Full Stack Developer</p>
              <p className="text-sm text-muted-foreground mb-1">NectarOM · 2021–2025</p>
              <p className="text-sm text-muted-foreground">Built Nectar.ai end-to-end using RAG architecture — drove +30% add-to-cart, +18% checkout completion, and ~99% improvement in chatbot response rates. Also shipped NectarCares, a platform connecting donors to families in need.</p>
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
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Building Jointly — an AI-powered group travel coordination app (in beta)</li>
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Street and travel photography</li>
            <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary" />Exploring the intersection of AI and product design</li>
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
