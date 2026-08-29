import { useEffect } from "react";
import Layout from "@/components/Layout";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blogPosts";

const Stories = () => {
  useEffect(() => {
    document.title = "Stories — Krishna Suresh";
  }, []);

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 section-y">
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-3">Stories</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Stories;
