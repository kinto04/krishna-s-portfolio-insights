import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — 90ms per step, applied as a real inline delay. */
  index?: number;
  as?: "div" | "section";
}

/**
 * The single scroll-reveal wrapper for the whole site.
 * Motion comes from the .scroll-fade-in tokens in index.css, so every
 * page reveals with identical easing, distance and blur.
 */
export function Reveal({ children, className, index = 0, as = "div" }: RevealProps) {
  const { ref, isVisible } = useInView();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      style={index ? { transitionDelay: `${index * 90}ms` } : undefined}
      className={cn("scroll-fade-in", isVisible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
