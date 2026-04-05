import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";
import { format } from "date-fns";

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block py-6 border-b border-border last:border-b-0"
    >
      <div className="flex items-center gap-3 mb-2">
        <time className="text-xs text-muted-foreground">
          {format(new Date(post.date), "MMM d, yyyy")}
        </time>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
    </Link>
  );
};

export default BlogPostCard;
