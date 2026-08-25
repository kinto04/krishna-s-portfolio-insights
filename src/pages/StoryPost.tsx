import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";

const StoryPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} — Krishna Suresh` : "Not Found";
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-6 section-y">
          <p className="text-muted-foreground">Story not found.</p>
          <Link to="/stories" className="text-sm text-foreground underline mt-4 inline-block">
            ← Back to stories
          </Link>
        </div>
      </Layout>
    );
  }

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="font-serif text-2xl text-foreground mt-10 mb-4">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("---")) {
        return <hr key={i} className="my-10 border-border" />;
      }
      if (block.startsWith("1. ") || block.startsWith("2. ") || block.startsWith("3. ")) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed mb-6">
            {items.map((item, j) => {
              const text = item.replace(/^\d+\.\s/, "");
              return <li key={j} dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
            })}
          </ol>
        );
      }
      if (block.startsWith("*") && block.endsWith("*") && !block.startsWith("**")) {
        return (
          <p key={i} className="text-sm text-muted-foreground italic mb-6">
            {block.replace(/^\*|\*$/g, "")}
          </p>
        );
      }
      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-6"
          dangerouslySetInnerHTML={{
            __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
          }}
        />
      );
    });
  };

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 section-y">
        <Link
          to="/stories"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground t-base mb-10"
        >
          <ArrowLeft size={14} /> All stories
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="label-eyebrow text-primary font-medium">
            {post.category}
          </span>
          <time className="text-sm text-muted-foreground">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground mb-10">
          {post.title}
        </h1>

        <div className="border-t border-border pt-10">{renderContent(post.content)}</div>
      </article>
    </Layout>
  );
};

export default StoryPost;
