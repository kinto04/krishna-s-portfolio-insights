import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      aria-label="Krishna Suresh"
    >
      {/* Geometric "KS" monogram */}
      <path
        d="M8 30V10M8 10L18 20M8 20L18 30"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 13.5C22 13.5 25 11 28.5 13.5C32 16 32 19 28.5 21C25 23 22 21 22 21C22 21 25 19 28.5 21C32 23 32 26 28.5 28.5C25 31 22 28.5 22 28.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Logo;
