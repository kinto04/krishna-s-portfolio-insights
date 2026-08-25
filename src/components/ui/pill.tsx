import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillProps {
  variant?: "outline" | "filled";
  size?: "sm" | "default";
  uppercase?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Pill({
  variant = "outline",
  size = "default",
  uppercase = false,
  className,
  children,
}: PillProps) {
  const isOutline = variant === "outline";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium transition-all duration-200 ease-out",
        size === "default" && "px-4 py-2 text-sm",
        size === "sm" && "px-2.5 py-1 text-xs",
        uppercase && "uppercase tracking-wider",
        isOutline && [
          "border border-border/60 text-foreground bg-transparent",
          "hover:border-border hover:scale-[1.02]",
        ],
        !isOutline && [
          "bg-primary/10 text-primary border-transparent",
          "hover:bg-primary/15 hover:scale-[1.02]",
        ],
        className
      )}
    >
      {children}
      {isOutline && <ChevronRight size={size === "sm" ? 12 : 14} className="opacity-60" />}
    </span>
  );
}
