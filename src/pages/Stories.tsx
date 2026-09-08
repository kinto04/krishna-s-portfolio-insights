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
      <section className="container-page section-y">
        <h1 className="t-page-title text-foreground mb-10">Stories</h1>

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
