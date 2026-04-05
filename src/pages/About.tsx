import { useEffect } from "react";
import Layout from "@/components/Layout";

const About = () => {
  useEffect(() => {
    document.title = "About — Krishna Suresh";
  }, []);

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <h1 className="font-serif text-4xl tracking-tight text-foreground mb-8">About</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed mb-16">
          <p>
            I'm Krishna Suresh — a Product Manager who codes, designs, and builds.
            I believe the best PMs don't just write specs; they understand systems
            deeply enough to make better decisions at every stage.
          </p>
          <p>
            I have 3+ years of experience building products in AI, healthcare,
            e-commerce, and travel. I've worn every hat — sole engineer, PM, design
            lead, strategy consultant — and I'm happiest when I'm building
            end-to-end.
          </p>
          <p>
            Right now I'm finishing my MS in Engineering Design Innovation at
            Northwestern University (3.9 GPA, Entrepreneurship minor, graduating
            March 2026). Before that, I studied Computer Science at Purdue
            University.
          </p>
          <p>
            Based in New York, NY. Currently looking for PM roles in AI,
            e-commerce, travel, and healthcare.
          </p>
        </div>

        {/* Current Focus */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Current Focus</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Building Jointly Travel — an AI-powered group travel coordination app (Master's thesis)</li>
            <li>• Street and travel photography</li>
            <li>• Exploring the intersection of AI and product design</li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-foreground mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="text-foreground font-medium">Northwestern University</p>
              <p className="text-sm text-muted-foreground">MS Engineering Design Innovation · 3.9 GPA · Entrepreneurship Minor · 2026</p>
            </div>
            <div>
              <p className="text-foreground font-medium">Purdue University</p>
              <p className="text-sm text-muted-foreground">BS Computer Science</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-border pt-10">
          <h2 className="font-serif text-2xl text-foreground mb-4">Get in Touch</h2>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Email
            </a>
            <a
              href="#"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Resume (PDF)
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
