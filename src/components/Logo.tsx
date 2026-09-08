import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showMark?: boolean;
}

/**
 * Compact typographic mark and full wordmark.
 */
export function Logo({ className, showMark = false }: LogoProps) {
  const mark = (
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M11 7h5v12.1L24.8 10H31l-9.2 9.2L31.5 33h-6.1l-7.1-10.2L16 25.1V33h-5V7Z" />
        <rect x="31" y="28" width="4" height="5" className="fill-signal-blue" />
      </svg>
    </span>
  );

  if (showMark) {
    return (
      <span
        className={cn(
          "group/logo inline-flex items-center text-foreground",
          className
        )}
      >
        {mark}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "group/logo inline-flex items-center font-medium text-[17px] sm:text-lg leading-none tracking-normal text-foreground",
        className
      )}
    >
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
