import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} — Krishna Suresh` : "Not Found";
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-20">
          <p className="text-muted-foreground">Post not found.</p>
          <Link to="/blog" className="text-sm text-foreground underline mt-4 inline-block">
            ← Back to blog
          </Link>
        </div>
      </Layout>
    );
  }

  // Simple markdown-like rendering for the content
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("---")) {
        return <hr key={i} className="my-8 border-border" />;
      }
      if (block.startsWith("1. ") || block.startsWith("2. ") || block.startsWith("3. ")) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed mb-4">
            {items.map((item, j) => {
              const text = item.replace(/^\d+\.\s/, "");
              return <li key={j} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
            })}
          </ol>
        );
      }
      if (block.startsWith("*") && block.endsWith("*") && !block.startsWith("**")) {
        return (
          <p key={i} className="text-sm text-muted-foreground italic mb-4">
            {block.replace(/^\*|\*$/g, "")}
          </p>
        );
      }
      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
          }}
        />
      );
    });
  };

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All posts
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <time className="text-sm text-muted-foreground">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8">
          {post.title}
        </h1>

        <div className="border-t border-border pt-8">{renderContent(post.content)}</div>
      </article>
    </Layout>
  );
};

export default BlogPost;
