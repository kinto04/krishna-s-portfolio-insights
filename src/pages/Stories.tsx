import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts, BlogPost } from "@/data/blogPosts";

const categories = ["All", "Photography", "Deep Dives", "Essays"] as const;

const Stories = () => {
  const [active, setActive] = useState<string>("All");

  useEffect(() => {
    document.title = "Stories — Krishna Suresh";
  }, []);

  const filtered: BlogPost[] =
    active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 section-y">
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-3">Stories</h1>
        <p className="text-muted-foreground mb-10 max-w-xl">
          Photography, deep dives, essays, and everything else worth sharing.
        </p>

        {/* Filter tabs */}
        <div className="flex gap-4 mb-12 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`pb-3 text-sm font-sans tracking-wide t-base border-b-2 -mb-px ${
                active === cat
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-16">No stories in this category yet.</p>
        )}
      </section>
    </Layout>
  );
};

export default Stories;
