import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { blogPosts, StoryBlock } from "@/data/blogPosts";
import { ArrowLeft, Play } from "lucide-react";
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

  const renderBlock = (block: StoryBlock, i: number) => {
    switch (block.type) {
      case "video":
        return (
          <Reveal key={i}>
            <figure className="mb-12">
              <div className="aspect-video rounded-lg overflow-hidden border border-border bg-card">
                {block.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${block.youtubeId}`}
                    title={block.caption ?? post.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <span className="w-14 h-14 rounded-full border border-border flex items-center justify-center">
                      <Play size={20} className="text-primary" />
                    </span>
                    <span className="text-sm">Short film coming soon</span>
                  </div>
                )}
              </div>
              {block.caption && (
                <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        );
      case "lead":
        return (
          <Reveal key={i}>
            <p className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground mb-10">
              {block.text}
            </p>
          </Reveal>
        );
      case "paragraph":
        return (
          <Reveal key={i}>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">{block.text}</p>
          </Reveal>
        );
      case "heading":
        return (
          <Reveal key={i}>
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground mt-14 mb-6">
              {block.text}
            </h2>
          </Reveal>
        );
      case "photo":
        return (
          <Reveal key={i}>
            <figure className="my-12">
              <img
                src={block.src}
                alt={block.alt}
                loading="lazy"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="mt-4 max-w-2xl">
                {block.title && (
                  <span className="label-eyebrow text-primary font-medium block mb-2">
                    {block.title}
                  </span>
                )}
                {block.caption && (
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {block.caption}
                  </span>
                )}
              </figcaption>
            </figure>
          </Reveal>
        );
      case "photoGrid":
        return (
          <Reveal key={i}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-12">
              {block.photos.map((photo, j) => (
                <img
                  key={j}
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover rounded-lg border border-border"
                />
              ))}
            </div>
          </Reveal>
        );
    }
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
          <span className="label-eyebrow text-primary font-medium">{post.category}</span>
          <time className="text-sm text-muted-foreground">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
        </div>

<h1 className="font-serif text-3xl sm:text-5xl tracking-tight text-foreground mb-4">
          {post.title}
        </h1>

        {post.subtitle && (
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            {post.subtitle}
          </p>
        )}

        <div>{post.blocks.map(renderBlock)}</div>
      </article>
    </Layout>
  );
};

export default StoryPost;
