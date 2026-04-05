import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";
import { format } from "date-fns";

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      to={`/stories/${post.slug}`}
      className="group block"
    >
      <div className="aspect-[16/10] bg-card rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <span className="text-muted-foreground text-sm">Cover Image</span>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs uppercase tracking-wider text-primary font-medium">
          {post.category}
        </span>
        <time className="text-xs text-muted-foreground">
          {format(new Date(post.date), "MMM d, yyyy")}
        </time>
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
    </Link>
  );
};

export default BlogPostCard;
