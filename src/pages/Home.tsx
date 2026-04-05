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
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground bg-card px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-available" />
            Available for Work
          </span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground mb-6 leading-[1.1]">
          Product Manager.
          <br />
          Designer. Builder.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          I'm Krishna — a PM who codes, designs, and ships. 3+ years building
          products in AI, healthcare, and travel. CS from Purdue, MS from
          Northwestern. Based in New York, NY.
        </p>
      </section>

      {/* Featured Work */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-2xl text-foreground">Featured Work</h2>
          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Stories Teaser */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-2xl text-foreground">Stories</h2>
          <Link
            to="/stories"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All stories <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
