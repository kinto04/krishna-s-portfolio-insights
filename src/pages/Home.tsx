import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CaseStudyCard from "@/components/CaseStudyCard";
import BlogPostCard from "@/components/BlogPostCard";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

const Home = () => {
  useEffect(() => {
    document.title = "Krishna Suresh — Product Manager, Builder, Writer";
  }, []);

  const featuredStudies = caseStudies.filter((s) => s.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
          Product Manager.
          <br />
          Builder. Writer.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          I'm Krishna — a PM with 3+ years of experience building products in AI,
          healthcare, and travel. CS background from Purdue, currently finishing my
          MS at Northwestern. Based in Chicago.
        </p>
      </section>

      {/* Featured Work */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-foreground">Featured Work</h2>
          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {featuredStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Recent Writing */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Recent Writing</h2>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All posts <ArrowRight size={14} />
          </Link>
        </div>
        {recentPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </section>
    </Layout>
  );
};

export default Home;
