import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { caseStudies } from "@/data/caseStudies";

type Anchor = "start" | "end" | "middle";
type Tier = "core" | "domain" | "sub";

type NodeDef = {
  /** must match a tag in src/data/caseStudies.ts */
  tag: string;
  tier: Tier;
  /** for sub-skills: the tag this node hangs off instead of the centre */
  parent?: string;
  x: number;
  y: number;
  anchor: Anchor;
  dy: number;
};

/* Positions are hand-placed so the map reads as an organic network rather than
   a symmetric starburst. Core disciplines sit on a tight inner ring, domains
   further out, sub-skills hang off their parent node. */
const DESKTOP_NODES: NodeDef[] = [
  { tag: "Experience Design", tier: "core", x: 345, y: 160, anchor: "end", dy: 5 },
  { tag: "Interaction Design", tier: "core", x: 345, y: 370, anchor: "end", dy: 5 },
  { tag: "Service Design", tier: "core", x: 520, y: 432, anchor: "middle", dy: 28 },
  { tag: "Product Strategy", tier: "core", x: 655, y: 160, anchor: "start", dy: 5 },
  { tag: "AI", tier: "domain", x: 800, y: 250, anchor: "start", dy: 5 },
  { tag: "E-Commerce", tier: "domain", x: 772, y: 420, anchor: "start", dy: 5 },
  { tag: "Healthcare", tier: "domain", x: 212, y: 452, anchor: "middle", dy: 26 },
  { tag: "Mobile", tier: "sub", parent: "Experience Design", x: 258, y: 68, anchor: "middle", dy: -16 },
  { tag: "Conversational UI", tier: "sub", parent: "AI", x: 884, y: 352, anchor: "end", dy: 22 },
];

const MOBILE_NODES: NodeDef[] = [
  { tag: "Experience Design", tier: "core", x: 190, y: 58, anchor: "middle", dy: -16 },
  { tag: "Interaction Design", tier: "core", x: 60, y: 150, anchor: "start", dy: -14 },
  { tag: "Product Strategy", tier: "core", x: 320, y: 150, anchor: "end", dy: -14 },
  { tag: "Service Design", tier: "core", x: 110, y: 300, anchor: "middle", dy: 24 },
  { tag: "AI", tier: "domain", x: 270, y: 300, anchor: "middle", dy: 24 },
  { tag: "E-Commerce", tier: "domain", x: 330, y: 236, anchor: "end", dy: -12 },
  { tag: "Healthcare", tier: "domain", x: 190, y: 392, anchor: "middle", dy: 24 },
];

const tierStyle = (tier: Tier) => {
  switch (tier) {
    case "core":
      return { r: 5.5, spoke: 1.1, spokeOpacity: 0.32, fill: "hsl(var(--primary))", text: "fill-foreground" };
    case "domain":
      return { r: 4, spoke: 0.9, spokeOpacity: 0.2, fill: "hsl(var(--primary-deep))", text: "fill-muted-foreground" };
    default:
      return { r: 3, spoke: 0.7, spokeOpacity: 0.14, fill: "hsl(var(--primary-deep))", text: "fill-muted-foreground" };
  }
};

const ExpertiseConstellation = () => {
  const isMobile = useIsMobile();
  const defs = isMobile ? MOBILE_NODES : DESKTOP_NODES;
  const width = isMobile ? 380 : 1000;
  const height = isMobile ? 440 : 520;
  const cx = width / 2;
  const cy = isMobile ? 200 : 264;

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    caseStudies.forEach((s) => s.tags.forEach((t) => (map[t] = (map[t] || 0) + 1)));
    return map;
  }, []);

  const nodes = useMemo(
    () =>
      defs.map((n) => {
        const count = counts[n.tag] || 0;
        const base = tierStyle(n.tier);
        return { ...n, count, ...base, r: base.r + Math.min(count - 1, 2) * 0.9 };
      }),
    [defs, counts]
  );

  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<Record<string, SVGGElement | null>>({});
  const spokeRefs = useRef<Record<string, SVGLineElement | null>>({});
  const pulseRefs = useRef<Record<string, SVGCircleElement | null>>({});
  const coreRingRef = useRef<SVGCircleElement>(null);
  const pointer = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const hoveredRef = useRef<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  const anchorOf = (tag: string) => {
    const n = nodes.find((x) => x.tag === tag);
    return n ? { x: n.x, y: n.y } : { x: cx, y: cy };
  };

  useEffect(() => {
    hoveredRef.current = active;
  }, [active]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let running = false;

    const stagger = 0.95;
    const duration = 1.7;
    const cycle = Math.max(nodes.length * stagger, duration + 0.4);

    const tick = (time: number) => {
      const t = time / 1000;
      let coreFlash = 0;

      nodes.forEach((n, i) => {
        const drift = n.tier === "core" ? 6 : 4;
        let x = n.x + Math.sin(t * 0.4 + i * 1.7) * drift;
        let y = n.y + Math.cos(t * 0.31 + i * 2.3) * drift;

        if (pointer.current.active && !isMobile) {
          const dx = pointer.current.x - x;
          const dy = pointer.current.y - y;
          const dist = Math.hypot(dx, dy);
          const radius = 240;
          if (dist < radius && dist > 0.001) {
            const pull = (1 - dist / radius) ** 2 * 14;
            x += (dx / dist) * pull;
            y += (dy / dist) * pull;
          }
        }

        const g = nodeRefs.current[n.tag];
        if (g) g.setAttribute("transform", `translate(${x - n.x} ${y - n.y})`);

        const origin = n.parent ? anchorOf(n.parent) : { x: cx, y: cy };
        const spoke = spokeRefs.current[n.tag];
        if (spoke) {
          spoke.setAttribute("x1", String(origin.x));
          spoke.setAttribute("y1", String(origin.y));
          spoke.setAttribute("x2", String(x));
          spoke.setAttribute("y2", String(y));
        }

        // One deliberate, staggered pulse per spoke.
        const pulse = pulseRefs.current[n.tag];
        if (!pulse) return;
        const isHovered = hoveredRef.current === n.tag;
        const local = (((t - i * stagger) % cycle) + cycle) % cycle;
        const p = isHovered ? ((t * 0.9) % 1) : local < duration ? local / duration : -1;

        if (p < 0) {
          pulse.setAttribute("opacity", "0");
          return;
        }
        // travels inward normally, outward from the centre while hovered
        const q = isHovered ? 1 - p : p;
        pulse.setAttribute("cx", String(x + (origin.x - x) * q));
        pulse.setAttribute("cy", String(y + (origin.y - y) * q));
        pulse.setAttribute("opacity", String(Math.sin(p * Math.PI) * (isHovered ? 0.95 : 0.75)));

        if (!isHovered && !n.parent && p > 0.85) coreFlash = Math.max(coreFlash, (p - 0.85) / 0.15);
      });

      if (coreRingRef.current) {
        coreRingRef.current.setAttribute("opacity", String(0.3 + coreFlash * 0.6));
        coreRingRef.current.setAttribute("r", String(15 + coreFlash * 5));
      }

      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), {
      threshold: 0.05,
    });
    observer.observe(svg);

    const handleMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = svg.getBoundingClientRect();
      pointer.current = {
        x: ((e.clientX - rect.left) / rect.width) * width,
        y: ((e.clientY - rect.top) / rect.height) * height,
        active: true,
      };
    };
    const handleLeave = () => {
      pointer.current.active = false;
    };

    svg.addEventListener("pointermove", handleMove);
    svg.addEventListener("pointerleave", handleLeave);

    return () => {
      observer.disconnect();
      stop();
      svg.removeEventListener("pointermove", handleMove);
      svg.removeEventListener("pointerleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, cx, cy, width, height, isMobile]);

  const go = (tag: string) => navigate(`/work?tag=${encodeURIComponent(tag)}`);

  return (
    <section className="relative overflow-hidden section-y">
      <div className="hero-noise" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal className="mb-6">
          <p className="label-eyebrow mb-3">Mapped to my brain</p>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
            How I think about product
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Pick a discipline or domain to see the work behind it.
          </p>
        </Reveal>

        <Reveal index={1}>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto select-none"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <radialGradient id="ec-core">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                <stop offset="60%" stopColor="hsl(var(--primary-deep))" stopOpacity="0.12" />
                <stop offset="100%" stopColor="hsl(var(--primary-deep))" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx={cx} cy={cy} r={isMobile ? 110 : 170} fill="url(#ec-core)" />

            {/* Spokes: core/domain into the centre, sub-skills into their parent */}
            {nodes.map((n) => {
              const origin = n.parent ? anchorOf(n.parent) : { x: cx, y: cy };
              return (
                <line
                  key={`spoke-${n.tag}`}
                  ref={(el) => (spokeRefs.current[n.tag] = el)}
                  x1={origin.x}
                  y1={origin.y}
                  x2={n.x}
                  y2={n.y}
                  stroke="hsl(var(--primary))"
                  strokeWidth={n.spoke}
                  strokeOpacity={active === null ? n.spokeOpacity : active === n.tag ? 0.75 : 0.07}
                  style={{ transition: "stroke-opacity 0.35s var(--ease-out-quint)" }}
                />
              );
            })}

            {/* Travelling signals */}
            {nodes.map((n) => (
              <circle
                key={`pulse-${n.tag}`}
                ref={(el) => (pulseRefs.current[n.tag] = el)}
                r={n.tier === "core" ? 2.4 : 1.9}
                fill="hsl(var(--primary))"
                opacity="0"
              />
            ))}

            {/* Centre node */}
            <g>
              <circle cx={cx} cy={cy} r="7" fill="hsl(var(--primary))" />
              <circle
                ref={coreRingRef}
                cx={cx}
                cy={cy}
                r="15"
                fill="none"
                stroke="hsl(var(--primary))"
                opacity="0.3"
              />
              <text
                x={cx}
                y={cy + 38}
                textAnchor="middle"
                className="fill-foreground font-serif"
                fontSize={isMobile ? 16 : 20}
              >
                Krishna
              </text>
            </g>

            {/* Skill nodes */}
            {nodes.map((n) => {
              const dim = active !== null && active !== n.tag;
              const labelX = n.anchor === "end" ? n.x - 14 : n.anchor === "start" ? n.x + 14 : n.x;
              const fontSize = n.tier === "core" ? (isMobile ? 12 : 15) : isMobile ? 11 : 13;
              return (
                <g
                  key={n.tag}
                  ref={(el) => (nodeRefs.current[n.tag] = el)}
                  role="link"
                  tabIndex={0}
                  aria-label={`${n.tag} — ${n.count} case ${n.count === 1 ? "study" : "studies"}`}
                  onPointerEnter={() => setActive(n.tag)}
                  onPointerLeave={() => setActive(null)}
                  onFocus={() => setActive(n.tag)}
                  onBlur={() => setActive(null)}
                  onClick={() => go(n.tag)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      go(n.tag);
                    }
                  }}
                  style={{
                    opacity: dim ? 0.3 : 1,
                    transition: "opacity 0.35s var(--ease-out-quint)",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  {/* generous, invisible tap/hit target */}
                  <circle cx={n.x} cy={n.y} r={isMobile ? 26 : 22} fill="transparent" />
                  <circle cx={n.x} cy={n.y} r={n.r} fill={n.fill} />
                  {active === n.tag && (
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={n.r + 6}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeOpacity="0.55"
                    />
                  )}
                  <text
                    x={labelX}
                    y={n.y + n.dy}
                    textAnchor={n.anchor}
                    fontSize={fontSize}
                    className={active === n.tag ? "fill-primary" : n.text}
                  >
                    {n.label ?? n.tag}
                  </text>
                  {active === n.tag && (
                    <text
                      x={labelX}
                      y={n.y + n.dy + fontSize + 3}
                      textAnchor={n.anchor}
                      fontSize={isMobile ? 9 : 10.5}
                      className="fill-muted-foreground"
                    >
                      {n.count} case {n.count === 1 ? "study" : "studies"}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </Reveal>

        {/* Accessible / crawlable equivalent of the map */}
        <ul className="sr-only">
          {nodes.map((n) => (
            <li key={n.tag}>
              <Link to={`/work?tag=${encodeURIComponent(n.tag)}`}>
                {n.tag} — {n.count} case {n.count === 1 ? "study" : "studies"}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExpertiseConstellation;
