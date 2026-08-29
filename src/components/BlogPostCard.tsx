import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";
import { format } from "date-fns";

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link to={`/stories/${post.slug}`} className="group block">
      <div className="aspect-[3/2] bg-card rounded-lg mb-4 overflow-hidden border border-border">
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.coverAlt ?? post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-muted-foreground text-sm">Cover Image</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="label-eyebrow text-primary font-medium">{post.category}</span>
        <time className="text-xs text-muted-foreground">
          {format(new Date(post.date), "MMM d, yyyy")}
        </time>
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary t-base mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
    </Link>
  );
};

export default BlogPostCard;
