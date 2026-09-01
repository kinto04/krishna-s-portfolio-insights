import { useEffect, useRef, useState } from "react";

type Segment = {
  text: string;
  /** Tailwind color class applied to the revealed text. */
  color?: string;
};

const SEGMENTS: Segment[] = [
  { text: "I design " },
  { text: "AI products", color: "text-primary" },
  { text: " that solve human problems." },
];

/**
 * Hero headline that reveals word-by-word, with "AI products" and
 * "human problems" gaining color emphasis so the sentence tells the story
 * of bridging technology to people.
 *
 * Reduced-motion users see the finished text immediately.
 */
const HeroHeadline = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setReady(true);
      return;
    }
    // small delay so the animation is visible on page load
    const id = window.setTimeout(() => setReady(true), 180);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <h1
      ref={ref}
      className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1]"
    >
      {SEGMENTS.map((segment, si) => (
        <span
          key={si}
          className={segment.color ?? "text-foreground"}
        >
          {segment.text.split(" ").map((word, wi) => {
            const globalIndex =
              SEGMENTS.slice(0, si).reduce((acc, s) => acc + s.text.split(" ").length, 0) + wi;
            return (
              <span key={`${si}-${wi}`} className="inline-block overflow-hidden align-bottom">
                <span
                  className="inline-block will-change-transform"
                  style={
                    ready
                      ? {
                          animation: `heroWordIn 0.75s var(--ease-out-expo) ${0.22 + globalIndex * 0.07}s both`,
                        }
                      : { opacity: 0, transform: "translateY(18px)", filter: "blur(5px)" }
                  }
                >
                  {word}
                </span>
                {wi < segment.text.split(" ").length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};

export default HeroHeadline;
