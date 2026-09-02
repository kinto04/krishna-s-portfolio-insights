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
<h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-3">Stories</h1>
        <p className="text-muted-foreground mb-10 max-w-xl">
          A photo and movie journal from my visit to one of the world's oldest living cities.
        </p>

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
