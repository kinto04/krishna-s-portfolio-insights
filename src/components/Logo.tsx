import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Name wordmark — no monogram, no container shape.
 * The accent appears exactly once, as the terminal period.
 */
export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "group/logo inline-flex items-baseline font-serif text-[17px] sm:text-lg leading-none tracking-[-0.015em] text-foreground",
        className
      )}
    >
      Krishna
      <span className="ml-[0.28em] text-muted-foreground group-hover/logo:text-foreground transition-colors duration-500 [transition-timing-function:var(--ease-out-quint)]">
        Suresh
      </span>
      <span
        aria-hidden="true"
        className="ml-[0.09em] inline-block h-[0.24em] w-[0.24em] rounded-full bg-primary origin-center transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover/logo:scale-[1.6]"
      />
    </span>
  );
}

export default Logo;
