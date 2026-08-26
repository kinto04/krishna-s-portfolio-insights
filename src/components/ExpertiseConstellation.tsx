import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { useIsMobile } from "@/hooks/use-mobile";

type Anchor = "start" | "end" | "middle";

type SkillNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  /** 1 = primary skill, 2 = supporting context */
  weight: 1 | 2;
  anchor: Anchor;
  /** vertical offset of the label relative to the node */
  dy: number;
};

/* Positions are hand-placed rather than generated so the map reads as an
   organic network instead of a symmetric starburst. */
const DESKTOP_NODES: SkillNode[] = [
  { id: "xd", label: "Experience Design", x: 185, y: 132, weight: 1, anchor: "end", dy: 5 },
  { id: "ixd", label: "Interaction Design", x: 128, y: 292, weight: 1, anchor: "end", dy: 5 },
  { id: "service", label: "Service Design", x: 232, y: 424, weight: 1, anchor: "end", dy: 5 },
  { id: "ai", label: "AI", x: 828, y: 118, weight: 1, anchor: "start", dy: 5 },
  { id: "strategy", label: "Product Strategy", x: 872, y: 272, weight: 1, anchor: "start", dy: 5 },
  { id: "convo", label: "Conversational UI", x: 796, y: 412, weight: 2, anchor: "start", dy: 5 },
  { id: "mobile", label: "Mobile", x: 418, y: 62, weight: 2, anchor: "middle", dy: -18 },
  { id: "commerce", label: "E-Commerce", x: 694, y: 58, weight: 2, anchor: "middle", dy: -18 },
  { id: "health", label: "Healthcare", x: 612, y: 466, weight: 2, anchor: "middle", dy: 26 },
];

const MOBILE_NODES: SkillNode[] = [
  { id: "xd", label: "Experience Design", x: 190, y: 52, weight: 1, anchor: "middle", dy: -16 },
  { id: "ixd", label: "Interaction Design", x: 62, y: 190, weight: 1, anchor: "start", dy: -14 },
  { id: "strategy", label: "Product Strategy", x: 320, y: 186, weight: 1, anchor: "end", dy: -14 },
  { id: "service", label: "Service Design", x: 104, y: 348, weight: 1, anchor: "middle", dy: 24 },
  { id: "ai", label: "AI", x: 292, y: 342, weight: 1, anchor: "middle", dy: 24 },
];

const DESKTOP_LINKS: [string, string][] = [
  ["xd", "ixd"],
  ["xd", "service"],
  ["ai", "convo"],
  ["ai", "strategy"],
  ["mobile", "xd"],
  ["commerce", "ai"],
  ["health", "service"],
];

const MOBILE_LINKS: [string, string][] = [
  ["xd", "ixd"],
  ["strategy", "ai"],
  ["ixd", "service"],
];

const ExpertiseConstellation = () => {
  const isMobile = useIsMobile();
  const nodes = isMobile ? MOBILE_NODES : DESKTOP_NODES;
  const links = isMobile ? MOBILE_LINKS : DESKTOP_LINKS;
  const width = isMobile ? 380 : 1000;
  const height = isMobile ? 420 : 520;
  const cx = width / 2;
  const cy = isMobile ? 200 : 264;

  const svgRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<Record<string, SVGGElement | null>>({});
  const spokeRefs = useRef<Record<string, SVGLineElement | null>>({});
  const pulseRefs = useRef<Record<string, SVGCircleElement | null>>({});
  const linkRefs = useRef<(SVGLineElement | null)[]>([]);
  const pointer = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let running = false;
    const positions: Record<string, { x: number; y: number }> = {};
    nodes.forEach((n) => (positions[n.id] = { x: n.x, y: n.y }));

    const tick = (time: number) => {
      const t = time / 1000;

      nodes.forEach((n, i) => {
        const drift = n.weight === 1 ? 7 : 5;
        let x = n.x + Math.sin(t * 0.42 + i * 1.7) * drift;
        let y = n.y + Math.cos(t * 0.33 + i * 2.3) * drift;

        if (pointer.current.active) {
          const dx = pointer.current.x - x;
          const dy = pointer.current.y - y;
          const dist = Math.hypot(dx, dy);
          const radius = 240;
          if (dist < radius && dist > 0.001) {
            const pull = (1 - dist / radius) ** 2 * 16;
            x += (dx / dist) * pull;
            y += (dy / dist) * pull;
          }
        }

        positions[n.id] = { x, y };

        const g = nodeRefs.current[n.id];
        if (g) g.setAttribute("transform", `translate(${x - n.x} ${y - n.y})`);

        const spoke = spokeRefs.current[n.id];
        if (spoke) {
          spoke.setAttribute("x2", String(x));
          spoke.setAttribute("y2", String(y));
        }

        // Signal travelling inward along each spoke.
        const pulse = pulseRefs.current[n.id];
        if (pulse) {
          const p = ((t * 0.28 + i * 0.19) % 1);
          const px = x + (cx - x) * p;
          const py = y + (cy - y) * p;
          pulse.setAttribute("cx", String(px));
          pulse.setAttribute("cy", String(py));
          pulse.setAttribute("opacity", String(Math.sin(p * Math.PI) * 0.7));
        }
      });

      links.forEach(([a, b], i) => {
        const line = linkRefs.current[i];
        if (!line) return;
        const pa = positions[a];
        const pb = positions[b];
        if (!pa || !pb) return;
        line.setAttribute("x1", String(pa.x));
        line.setAttribute("y1", String(pa.y));
        line.setAttribute("x2", String(pb.x));
        line.setAttribute("y2", String(pb.y));
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

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.05 }
    );
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
  }, [nodes, links, cx, cy, width, height]);

  return (
    <section className="relative overflow-hidden section-y">
      <div className="hero-noise" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal className="mb-6">
          <p className="label-eyebrow mb-3">Mapped to my brain</p>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
            How I think about product
          </h2>
        </Reveal>

        <Reveal index={1}>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto touch-none select-none"
            role="img"
            aria-label="A network map of Krishna's areas of expertise"
          >
            <defs>
              <radialGradient id="ec-core">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                <stop offset="60%" stopColor="hsl(var(--primary-deep))" stopOpacity="0.12" />
                <stop offset="100%" stopColor="hsl(var(--primary-deep))" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx={cx} cy={cy} r={isMobile ? 110 : 170} fill="url(#ec-core)" />

            {/* Skill-to-skill edges */}
            <g stroke="hsl(var(--primary))" strokeOpacity="0.14" strokeWidth="1">
              {links.map(([a, b], i) => {
                const pa = nodes.find((n) => n.id === a)!;
                const pb = nodes.find((n) => n.id === b)!;
                return (
                  <line
                    key={`${a}-${b}`}
                    ref={(el) => (linkRefs.current[i] = el)}
                    x1={pa.x}
                    y1={pa.y}
                    x2={pb.x}
                    y2={pb.y}
                  />
                );
              })}
            </g>

            {/* Spokes into the centre */}
            {nodes.map((n) => (
              <line
                key={`spoke-${n.id}`}
                ref={(el) => (spokeRefs.current[n.id] = el)}
                x1={cx}
                y1={cy}
                x2={n.x}
                y2={n.y}
                stroke="hsl(var(--primary))"
                strokeWidth={n.weight === 1 ? 1.1 : 0.8}
                strokeOpacity={
                  hovered === null ? (n.weight === 1 ? 0.3 : 0.18) : hovered === n.id ? 0.7 : 0.08
                }
                style={{ transition: "stroke-opacity 0.35s var(--ease-out-quint)" }}
              />
            ))}

            {/* Travelling signals */}
            {nodes.map((n) => (
              <circle
                key={`pulse-${n.id}`}
                ref={(el) => (pulseRefs.current[n.id] = el)}
                r="2"
                fill="hsl(var(--primary))"
                opacity="0"
              />
            ))}

            {/* Centre node */}
            <g>
              <circle cx={cx} cy={cy} r="7" fill="hsl(var(--primary))" />
              <circle cx={cx} cy={cy} r="15" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.35" />
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
              const dim = hovered !== null && hovered !== n.id;
              const labelX =
                n.anchor === "end" ? n.x - 14 : n.anchor === "start" ? n.x + 14 : n.x;
              return (
                <g
                  key={n.id}
                  ref={(el) => (nodeRefs.current[n.id] = el)}
                  onPointerEnter={() => setHovered(n.id)}
                  onPointerLeave={() => setHovered(null)}
                  style={{
                    opacity: dim ? 0.35 : 1,
                    transition: "opacity 0.35s var(--ease-out-quint)",
                    cursor: "default",
                  }}
                >
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={n.weight === 1 ? 5 : 3.5}
                    fill={n.weight === 1 ? "hsl(var(--primary))" : "hsl(var(--primary-deep))"}
                  />
                  {hovered === n.id && (
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={n.weight === 1 ? 11 : 9}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeOpacity="0.45"
                    />
                  )}
                  <text
                    x={labelX}
                    y={n.y + n.dy}
                    textAnchor={n.anchor}
                    fontSize={n.weight === 1 ? (isMobile ? 12 : 15) : isMobile ? 11 : 13}
                    className={n.weight === 1 ? "fill-foreground" : "fill-muted-foreground"}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </Reveal>
      </div>
    </section>
  );
};

export default ExpertiseConstellation;
