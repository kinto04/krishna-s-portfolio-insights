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
            An <strong className="text-foreground">MS Engineering Design Innovation (EDI) student
            at Northwestern University</strong> with a passion for storytelling and design.
          </p>
          <p>
            With three years of experience as a software engineer, I recognized gaps
            in Human-Centered Innovation process both personally and in industry,
            driving my desire to make a change. <strong className="text-foreground">I've
            built and designed software across e-commerce, social impact, AI,</strong> and{" "}
            <strong className="text-foreground">healthcare spaces</strong>, always focusing on
            creating meaningful products that solve real problems.
          </p>
          <p>
            As a Designer and Product Manager, <strong className="text-foreground">I aim to
            advocate for users, influence product direction, and engage business
            stakeholders</strong>. I thrive in collaborative environments, leveraging my
            creative problem-solving skills and analytical thinking to make a
            significant impact.
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
