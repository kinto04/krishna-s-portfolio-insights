import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PillVariant = "outline" | "filled" | "subtle";

interface PillProps {
  variant?: PillVariant;
  size?: "sm" | "default";
  uppercase?: boolean;
  /** Renders a leading status dot (used by the availability pill). */
  dot?: "available" | "primary";
  /** Outline pills show a trailing chevron by default; opt out here. */
  chevron?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * The only chip/tag/pill primitive on the site.
 * outline = interactive-looking emphasis · filled = accent tag · subtle = quiet metadata
 */
export function Pill({
  variant = "outline",
  size = "default",
  uppercase = false,
  dot,
  chevron,
  className,
  children,
}: PillProps) {
  const showChevron = chevron ?? variant === "outline";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium t-base",
        size === "default" && "px-4 py-2 text-sm",
        size === "sm" && "px-2.5 py-1 text-xs",
        uppercase && "uppercase tracking-[0.1em]",
        variant === "outline" &&
          "border border-border text-foreground bg-transparent hover:border-primary/60 hover:text-primary",
        variant === "filled" &&
          "bg-primary/10 text-primary border border-transparent hover:bg-primary/15",
        variant === "subtle" &&
          "bg-card/60 border border-border text-muted-foreground hover:text-foreground hover:border-border",
        className
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "relative w-2 h-2 rounded-full",
            dot === "available" ? "bg-available pulse-halo" : "bg-primary"
          )}
        />
      )}
      {children}
      {showChevron && <ChevronRight size={size === "sm" ? 12 : 14} className="opacity-60" />}
    </span>
  );
}
