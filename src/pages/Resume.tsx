import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume — Krishna Suresh";
  }, []);

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 section-y">
        <div className="flex items-center justify-between mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground">Resume</h1>
          <Button variant="outline" size="sm" asChild>
            <a href="#" download>
              <Download size={14} />
              Download PDF
            </a>
          </Button>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="label-eyebrow mb-6">
            Experience
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="font-semibold text-foreground">Product Manager & Lead Software Engineer</h3>
                <span className="text-sm text-muted-foreground">NectarOM</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Built Nectar.ai (AI customer support chatbot) and NectarCares (sole engineer — owned design, engineering, research, and stakeholder management end-to-end).
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="font-semibold text-foreground">Product Manager & Design Lead</h3>
                <span className="text-sm text-muted-foreground">Northwestern Medicine</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Led product and design on a clinical diagnostic tool, working closely with clinicians to translate complex medical workflows into intuitive software.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="font-semibold text-foreground">Product Manager — Master's Thesis</h3>
                <span className="text-sm text-muted-foreground">Jointly Travel</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Mobile-first group travel coordination app with AI-assisted group planning features.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="font-semibold text-foreground">Operations & Efficiency Partnership</h3>
                <span className="text-sm text-muted-foreground">Southwest Airlines</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Partnership project focused on operational efficiency improvements.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="font-semibold text-foreground">Design Strategist</h3>
                <span className="text-sm text-muted-foreground">Yeti</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Team of 5. Conducted 14 primary interviews. Developed a three-tier go-to-market model.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="label-eyebrow mb-6">
            Education
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="font-semibold text-foreground">MS in Engineering Design Innovation</h3>
                <span className="text-sm text-muted-foreground">Northwestern University</span>
              </div>
              <p className="text-sm text-muted-foreground">
                3.9 GPA · Entrepreneurship Minor · Graduating March 2026
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="font-semibold text-foreground">BS in Computer Science</h3>
                <span className="text-sm text-muted-foreground">Purdue University</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="label-eyebrow mb-6">
            Interests
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI · E-commerce · Travel · Healthcare · Photography · Writing
          </p>
        </section>
      </section>
    </Layout>
  );
};

export default Resume;
