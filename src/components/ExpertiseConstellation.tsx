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
  x: number;
  y: number;
  anchor: Anchor;
  dy: number;
};

/* No centre node: the map is a mesh of related disciplines and domains.
   Positions are hand-placed so it reads organic rather than symmetric.
   Node colors come from the shared tag palette in src/lib/tagColors.ts. */
const DESKTOP_NODES: NodeDef[] = [
  { tag: "Experience Design", tier: "core", x: 430, y: 150, anchor: "middle", dy: -16 },
  { tag: "Interaction Design", tier: "core", x: 250, y: 310, anchor: "end", dy: 5 },
  { tag: "AI", tier: "core", x: 620, y: 310, anchor: "start", dy: 5 },
  { tag: "Conversational UI", tier: "domain", x: 830, y: 200, anchor: "start", dy: 5 },
  { tag: "Research", tier: "domain", x: 430, y: 440, anchor: "middle", dy: 26 },
  { tag: "Healthcare", tier: "domain", x: 130, y: 150, anchor: "end", dy: 5 },
];

const MOBILE_NODES: NodeDef[] = [
  { tag: "Experience Design", tier: "core", x: 190, y: 70, anchor: "middle", dy: -16 },
  { tag: "AI", tier: "core", x: 272, y: 200, anchor: "start", dy: 5 },
  { tag: "Interaction Design", tier: "core", x: 100, y: 196, anchor: "start", dy: -14 },
  { tag: "Conversational UI", tier: "domain", x: 268, y: 330, anchor: "middle", dy: 24 },
  { tag: "Research", tier: "domain", x: 108, y: 330, anchor: "middle", dy: 24 },
  { tag: "Healthcare", tier: "domain", x: 190, y: 424, anchor: "middle", dy: 24 },
];

/** Relationships between tags — drawn as the network's edges. */
const EDGES: [string, string][] = [
  ["Experience Design", "Interaction Design"],
  ["Experience Design", "AI"],
  ["Experience Design", "Research"],
  ["Experience Design", "Healthcare"],
  ["Interaction Design", "AI"],
  ["Interaction Design", "Research"],
  ["Interaction Design", "Healthcare"],
  ["AI", "Conversational UI"],
  ["Research", "Healthcare"],
];

const tierStyle = (tier: Tier) => {
  switch (tier) {
    case "core":
      return { r: 5.5, text: "fill-foreground" };
    case "domain":
      return { r: 4.2, text: "fill-muted-foreground" };
    default:
      return { r: 3.2, text: "fill-muted-foreground" };
  }
};

const ExpertiseConstellation = () => {
  const isMobile = useIsMobile();
  const defs = isMobile ? MOBILE_NODES : DESKTOP_NODES;
  const width = isMobile ? 380 : 1000;
  const height = isMobile ? 460 : 520;

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
        return { ...n, count, ...base, r: base.r + Math.min(Math.max(count - 1, 0), 2) * 0.9 };
      }),
    [defs, counts]
  );

  const present = useMemo(() => new Set(nodes.map((n) => n.tag)), [nodes]);
  const edges = useMemo(
    () => EDGES.filter(([a, b]) => present.has(a) && present.has(b)),
    [present]
  );

  /** tag -> case studies carrying that tag */
  const studiesByTag = useMemo(() => {
    const map: Record<string, typeof caseStudies> = {};
    caseStudies.forEach((s) =>
      s.tags.forEach((t) => {
        (map[t] ||= []).push(s);
      })
    );
    return map;
  }, []);


  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<Record<string, SVGGElement | null>>({});
  const edgeRefs = useRef<Record<string, SVGLineElement | null>>({});
  const pulseRefs = useRef<Record<string, SVGCircleElement | null>>({});
  const haloRefs = useRef<Record<string, SVGCircleElement | null>>({});
  const pointer = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const hoveredRef = useRef<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    hoveredRef.current = active;
  }, [active]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let running = false;

    const stagger = 1.15;
    const duration = 1.6;
    const cycle = Math.max(edges.length * stagger, duration + 0.6);

    const tick = (time: number) => {
      const t = time / 1000;
      const pos: Record<string, { x: number; y: number }> = {};
      const arrival: Record<string, number> = {};

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

        pos[n.tag] = { x, y };
        const g = nodeRefs.current[n.tag];
        if (g) g.setAttribute("transform", `translate(${x - n.x} ${y - n.y})`);
      });

      edges.forEach(([a, b], i) => {
        const key = `${a}|${b}`;
        const pa = pos[a];
        const pb = pos[b];
        const line = edgeRefs.current[key];
        if (line) {
          line.setAttribute("x1", String(pa.x));
          line.setAttribute("y1", String(pa.y));
          line.setAttribute("x2", String(pb.x));
          line.setAttribute("y2", String(pb.y));
        }

        const pulse = pulseRefs.current[key];
        if (!pulse) return;
        const local = (((t - i * stagger) % cycle) + cycle) % cycle;
        const p = local < duration ? local / duration : -1;
        if (p < 0) {
          pulse.setAttribute("opacity", "0");
          return;
        }
        pulse.setAttribute("cx", String(pa.x + (pb.x - pa.x) * p));
        pulse.setAttribute("cy", String(pa.y + (pb.y - pa.y) * p));
        pulse.setAttribute("opacity", String(Math.sin(p * Math.PI) * 0.8));
        if (p > 0.85) arrival[b] = Math.max(arrival[b] || 0, (p - 0.85) / 0.15);
      });

      nodes.forEach((n) => {
        const halo = haloRefs.current[n.tag];
        if (!halo) return;
        const a = arrival[n.tag] || 0;
        halo.setAttribute("opacity", String(a * 0.5));
        halo.setAttribute("r", String(n.r + 4 + a * 6));
      });

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
  }, [nodes, edges, width, height, isMobile]);

  const go = (tag: string) => navigate(`/work?tag=${encodeURIComponent(tag)}`);

  const activeNode = active ? nodes.find((n) => n.tag === active) ?? null : null;
  const activeStudies = active ? studiesByTag[active] ?? [] : [];
  const flipX = activeNode ? activeNode.x / width > 0.62 : false;
  const flipY = activeNode ? activeNode.y / height > 0.62 : false;

  return (
    <section className="relative overflow-hidden section-y-tight section-band">
      <div className="hero-noise" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal className="mb-6">
          <h2 className="font-serif t-section-title tracking-tight text-foreground">
            What I design and build
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Click any node to see those projects.
          </p>
        </Reveal>

        <Reveal index={1} className="relative">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto select-none"
            aria-hidden="true"
            focusable="false"
          >
            {/* Edges */}
            {edges.map(([a, b]) => {
              const na = nodes.find((n) => n.tag === a)!;
              const nb = nodes.find((n) => n.tag === b)!;
              const related = active === a || active === b;
              return (
                <line
                  key={`edge-${a}|${b}`}
                  ref={(el) => (edgeRefs.current[`${a}|${b}`] = el)}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="hsl(var(--primary))"
                  strokeWidth={na.tier === "core" && nb.tier === "core" ? 1.1 : 0.8}
                  strokeOpacity={active === null ? 0.2 : related ? 0.7 : 0.06}
                  style={{ transition: "stroke-opacity 0.35s var(--ease-out-quint)" }}
                />
              );
            })}

            {/* Travelling signals */}
            {edges.map(([a, b]) => (
              <circle
                key={`pulse-${a}|${b}`}
                ref={(el) => (pulseRefs.current[`${a}|${b}`] = el)}
                r={2.1}
                fill="hsl(var(--primary))"
                opacity="0"
              />
            ))}

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
                    opacity: dim ? 0.32 : 1,
                    transition: "opacity 0.35s var(--ease-out-quint)",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  {/* generous, invisible tap/hit target */}
                  <circle cx={n.x} cy={n.y} r={isMobile ? 26 : 22} fill="transparent" />
                  <circle
                    ref={(el) => (haloRefs.current[n.tag] = el)}
                    cx={n.x}
                    cy={n.y}
                    r={n.r + 4}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    opacity="0"
                  />
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
                    {n.tag}
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

          {/* Hover / focus preview of the projects behind a node (desktop only) */}
          {!isMobile && activeNode && activeStudies.length > 0 && (
            <div
              className="absolute z-10 w-64 rounded-lg border border-border/60 bg-card/90 backdrop-blur-md p-2 shadow-lg pointer-events-auto node-preview"
              style={{
                left: `${(activeNode.x / width) * 100}%`,
                top: `${(activeNode.y / height) * 100}%`,
                transform: `translate(${flipX ? "calc(-100% - 18px)" : "18px"}, ${
                  flipY ? "calc(-100% - 14px)" : "14px"
                })`,
              }}
              onPointerEnter={() => setActive(activeNode.tag)}
              onPointerLeave={() => setActive(null)}
            >
              {activeStudies.slice(0, 3).map((s) => (
                <Link
                  key={s.slug}
                  to={`/work/${s.slug}`}
                  className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-primary/10"
                >
                  {s.coverImage && (
                    <img
                      src={s.coverImage}
                      alt=""
                      loading="lazy"
                      className="h-10 w-14 shrink-0 rounded-md object-cover"
                    />
                  )}
                  <span className="min-w-0">
                    <span className="block text-sm text-foreground truncate">{s.title}</span>
                    <span className="block text-xs text-muted-foreground truncate">
                      {s.summary}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
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
