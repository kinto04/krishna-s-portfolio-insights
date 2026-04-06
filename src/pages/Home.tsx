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
        <p className="text-lg text-muted-foreground mb-2">Hey, I'm Krishna.</p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-foreground mb-6 leading-[1.1]">
          A 0-1 Product
          <br />
          Manager.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
          I transform ideas into Market-Ready Solutions by bridging Strategy,
          Design, and Development to create products people love and use.
        </p>
        <div className="flex gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View My Work <ArrowRight size={14} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-card transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-2xl text-foreground">Selected Projects</h2>
          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All Projects <ArrowRight size={14} />
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
