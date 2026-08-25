import { useEffect } from "react";
import Layout from "@/components/Layout";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog — Krishna Suresh";
  }, []);

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 section-y">
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-2">Blog</h1>
        <p className="text-muted-foreground mb-10">
          Writing about product, AI, photography, and whatever else I'm thinking about.
        </p>
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </section>
    </Layout>
  );
};

export default Blog;
