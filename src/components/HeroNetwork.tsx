import { useEffect, useRef } from "react";

/**
 * A sparse, story-driven ambient layer behind the hero.
 *
 * The composition reads left-to-right as a signal moving from system-side
 * nodes (AI / data) to human-side nodes (people / context), echoing the
 * headline: "I design AI products that solve human problems."
 *
 * Rendered as a responsive SVG so it is cheap, crisp, and pauses cleanly when
 * off-screen or when the user prefers reduced motion.
 */
const HeroNetwork = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = true;
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>(".signal-path"));
    const dots = Array.from(svg.querySelectorAll<SVGCircleElement>(".signal-dot"));

    // Pre-compute path lengths so each dot can travel along its line.
    const pathData = paths.map((path, i) => {
      const len = path.getTotalLength();
      const dot = dots[i];
      const offset = i * 1.3; // stagger start times
      const speed = 0.00055 + i * 0.00012; // slightly different speeds
      return { path, len, dot, offset, speed };
    });

    const tick = (time: number) => {
      if (!visible) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const t = time / 1000;
      for (const { path, len, dot, offset, speed } of pathData) {
        const p = ((t + offset) * speed) % 1;
        const point = path.getPointAtLength(len * p);
        dot.setAttribute("cx", String(point.x));
        dot.setAttribute("cy", String(point.y));
        dot.setAttribute("opacity", String(0.4 + Math.sin(p * Math.PI) * 0.4));
      }
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(svg);

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none"
    >
      <defs>
        <radialGradient id="hn-system" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hn-human" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--foreground))" />
          <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle connecting field */}
      <g stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.08" fill="none">
        <path d="M120,160 C360,120 540,220 860,180" />
        <path d="M90,260 C340,260 620,300 900,270" />
        <path d="M140,370 C380,400 590,360 870,380" />
      </g>

      {/* System / AI-side nodes */}
      <g fill="url(#hn-system)" opacity="0.55">
        <circle cx="120" cy="160" r="3.2" />
        <circle cx="90" cy="260" r="2.6" />
        <circle cx="140" cy="370" r="2.2" />
        <circle cx="60" cy="210" r="1.8" />
      </g>

      {/* Human / context-side nodes */}
      <g fill="url(#hn-human)" opacity="0.45">
        <circle cx="860" cy="180" r="3" />
        <circle cx="900" cy="270" r="2.4" />
        <circle cx="870" cy="380" r="2" />
        <circle cx="940" cy="230" r="1.6" />
      </g>

      {/* Signal paths that the dots will travel */}
      <path
        className="signal-path"
        d="M120,160 C360,120 540,220 860,180"
        fill="none"
        stroke="transparent"
      />
      <path
        className="signal-path"
        d="M90,260 C340,260 620,300 900,270"
        fill="none"
        stroke="transparent"
      />
      <path
        className="signal-path"
        d="M140,370 C380,400 590,360 870,380"
        fill="none"
        stroke="transparent"
      />

      {/* Traveling signal dots */}
      <g fill="hsl(var(--primary))">
        <circle className="signal-dot" r="2.4" />
        <circle className="signal-dot" r="2" />
        <circle className="signal-dot" r="1.6" />
      </g>
    </svg>
  );
};

export default HeroNetwork;
