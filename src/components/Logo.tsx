import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showMark?: boolean;
}

/**
 * Name wordmark — no monogram, no container shape.
 * The accent appears exactly once, as the terminal period.
 * When showMark is true, the favicon "k" mark is rendered as a small inline
 * icon ahead of the wordmark (used in the navbar).
 */
export function Logo({ className, showMark = false }: LogoProps) {
  return (
    <span
      className={cn(
        "group/logo inline-flex items-center font-serif text-[17px] sm:text-lg leading-none tracking-[-0.015em] text-foreground",
        className
      )}
    >
      {showMark && (
        <span className="mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            className="h-full w-full"
            aria-hidden="true"
          >
            {/* lowercase serif 'k' cut from the wordmark */}
            <g fill="currentColor">
              <path d="M12.4 7.5h4.2v18.9h-4.2z" />
              <path d="M16.2 20.6l6.6-6.9h4.9l-7.4 7.4z" />
              <path d="M19.3 20.1l3.4-2.2 6.1 8.5h-4.9z" />
            </g>
            <circle cx="30.5" cy="25.4" r="2.6" className="fill-primary" />
          </svg>
        </span>
      )}
      <span className="inline-flex items-baseline">
        Krishna
        <span className="ml-[0.28em] text-muted-foreground group-hover/logo:text-foreground transition-colors duration-500 [transition-timing-function:var(--ease-out-quint)]">
          Suresh
        </span>
        <span
          aria-hidden="true"
          className="ml-[0.09em] inline-block h-[0.24em] w-[0.24em] rounded-full bg-primary origin-center transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover/logo:scale-[1.6]"
        />
      </span>
    </span>
  );
}

export default Logo;
