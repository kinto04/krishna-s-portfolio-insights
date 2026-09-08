import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";
import { useIsMobile } from "@/hooks/use-mobile";
import { tagColor } from "@/lib/tagColors";

type Anchor = "start" | "end" | "middle";
type Tier = "core" | "domain";

type NodeDef = {
  tag: string;
  tier: Tier;
  x: number;
  y: number;
  anchor: Anchor;
  dy: number;
};

const DESKTOP_NODES: NodeDef[] = [
  { tag: "Experience Design", tier: "core", x: 430, y: 90, anchor: "middle", dy: -18 },
  { tag: "Interaction Design", tier: "core", x: 250, y: 250, anchor: "end", dy: 5 },
  { tag: "AI", tier: "core", x: 620, y: 250, anchor: "start", dy: 5 },
  { tag: "Conversational UI", tier: "domain", x: 830, y: 140, anchor: "start", dy: 5 },
  { tag: "Research", tier: "domain", x: 430, y: 380, anchor: "middle", dy: 27 },
  { tag: "Healthcare", tier: "domain", x: 130, y: 90, anchor: "end", dy: 5 },
];

const MOBILE_NODES: NodeDef[] = [
  { tag: "Experience Design", tier: "core", x: 190, y: 70, anchor: "middle", dy: -17 },
  { tag: "AI", tier: "core", x: 272, y: 200, anchor: "start", dy: 5 },
  { tag: "Interaction Design", tier: "core", x: 100, y: 196, anchor: "start", dy: -15 },
  { tag: "Conversational UI", tier: "domain", x: 268, y: 330, anchor: "middle", dy: 25 },
  { tag: "Research", tier: "domain", x: 108, y: 330, anchor: "middle", dy: 25 },
  { tag: "Healthcare", tier: "domain", x: 190, y: 424, anchor: "middle", dy: 25 },
];

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

const ExpertiseConstellation = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [active, setActive] = useState<string | null>(null);
  const nodes = isMobile ? MOBILE_NODES : DESKTOP_NODES;
  const width = isMobile ? 380 : 1000;
  const height = isMobile ? 460 : 430;

  const counts = useMemo(() => {
    const result: Record<string, number> = {};
    caseStudies.forEach((study) => {
      study.tags.forEach((tag) => {
        result[tag] = (result[tag] ?? 0) + 1;
      });
    });
    return result;
  }, []);

  const studiesByTag = useMemo(() => {
    const result: Record<string, typeof caseStudies> = {};
    caseStudies.forEach((study) => {
      study.tags.forEach((tag) => {
        if (!result[tag]) result[tag] = [];
        result[tag].push(study);
      });
    });
    return result;
  }, []);

  const nodeByTag = useMemo(
    () => new Map(nodes.map((node) => [node.tag, node])),
    [nodes],
  );
  const activeNode = active ? nodeByTag.get(active) : undefined;
  const activeStudies = active ? studiesByTag[active] ?? [] : [];
  const flipX = activeNode ? activeNode.x / width > 0.62 : false;
  const flipY = activeNode ? activeNode.y / height > 0.62 : false;

  const openTag = (tag: string) => navigate(`/work?tag=${encodeURIComponent(tag)}`);

  return (
    <section className="overflow-hidden border-b border-border">
      <div className="container-page py-14 sm:py-16">
        <Reveal className="mb-6 grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="label-eyebrow mb-3">Capabilities × projects</p>
            <h2 className="t-section-title text-foreground">A representation of my work</h2>
          </div>
          <p className="text-sm text-muted-foreground md:col-span-5 md:text-right">
            Select a node to view related case studies.
          </p>
        </Reveal>

        <Reveal index={1} className="relative">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-auto w-full select-none"
            role="img"
            aria-label="Connected map of capabilities and related case studies"
          >
            <defs>
              {EDGES.map(([from, to], index) => {
                const start = nodeByTag.get(from);
                const end = nodeByTag.get(to);
                if (!start || !end) return null;
                return (
                  <linearGradient
                    key={`gradient-${from}-${to}`}
                    id={`graph-edge-${index}`}
                    gradientUnits="userSpaceOnUse"
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                  >
                    <stop offset="0%" stopColor={tagColor(from)} />
                    <stop offset="100%" stopColor={tagColor(to)} />
                  </linearGradient>
                );
              })}
            </defs>
            {EDGES.map(([from, to], index) => {
              const start = nodeByTag.get(from);
              const end = nodeByTag.get(to);
              if (!start || !end) return null;
              const related = active === null || active === from || active === to;
              const pathId = `graph-path-${index}`;
              return (
                <g key={`${from}-${to}`}>
                  <path
                    id={pathId}
                    d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
                    fill="none"
                    stroke={`url(#graph-edge-${index})`}
                    strokeWidth={start.tier === "core" && end.tier === "core" ? 1.15 : 0.85}
                    strokeOpacity={related ? 0.25 : 0.07}
                    className="t-base"
                  />
                  <circle r="2" fill={tagColor(to)} opacity="0" className="graph-signal">
                    <animateMotion
                      dur={`${7 + index * 0.7}s`}
                      begin={`${index * 0.55}s`}
                      repeatCount="indefinite"
                      path={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.7;0.7;0"
                      keyTimes="0;0.08;0.88;1"
                      dur={`${7 + index * 0.7}s`}
                      begin={`${index * 0.55}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}

            {nodes.map((node) => {
              const count = counts[node.tag] ?? 0;
              const dimmed = active !== null && active !== node.tag;
              const radius = node.tier === "core" ? 7 : 5;
              const labelX = node.anchor === "end" ? node.x - 15 : node.anchor === "start" ? node.x + 15 : node.x;
              const fontSize = node.tier === "core" ? (isMobile ? 12 : 15) : isMobile ? 11 : 13;
              return (
                <g
                  key={node.tag}
                  role="link"
                  tabIndex={0}
                  aria-label={`${node.tag} — ${count} case ${count === 1 ? "study" : "studies"}`}
                  onPointerEnter={() => setActive(node.tag)}
                  onPointerLeave={() => setActive(null)}
                  onFocus={() => setActive(node.tag)}
                  onBlur={() => setActive(null)}
                  onClick={() => openTag(node.tag)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openTag(node.tag);
                    }
                  }}
                  className="cursor-pointer outline-none t-base focus-visible:opacity-100"
                  opacity={dimmed ? 0.28 : 1}
                >
                  <circle cx={node.x} cy={node.y} r={isMobile ? 27 : 23} fill="transparent" />
                  {active === node.tag && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={radius + 8}
                      fill="none"
                      stroke={tagColor(node.tag)}
                      strokeOpacity="0.5"
                    />
                  )}
                  <circle cx={node.x} cy={node.y} r={radius} fill={tagColor(node.tag)} />
                  <text
                    x={labelX}
                    y={node.y + node.dy}
                    textAnchor={node.anchor}
                    fontSize={fontSize}
                    fontWeight={node.tier === "core" ? 600 : 500}
                    fill={tagColor(node.tag)}
                  >
                    {node.tag}
                  </text>
                  {active === node.tag && (
                    <text
                      x={labelX}
                      y={node.y + node.dy + fontSize + 4}
                      textAnchor={node.anchor}
                      fontSize={isMobile ? 9 : 10.5}
                      fill="hsl(var(--muted-foreground))"
                    >
                      {count} case {count === 1 ? "study" : "studies"}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {!isMobile && activeNode && activeStudies.length > 0 && (
            <div
              className="node-preview pointer-events-auto absolute z-10 w-64 rounded-md border border-border bg-card p-2"
              style={{
                left: `${(activeNode.x / width) * 100}%`,
                top: `${(activeNode.y / height) * 100}%`,
                transform: `translate(${flipX ? "calc(-100% - 18px)" : "18px"}, ${flipY ? "calc(-100% - 14px)" : "14px"})`,
              }}
              onPointerEnter={() => setActive(activeNode.tag)}
              onPointerLeave={() => setActive(null)}
            >
              {activeStudies.slice(0, 3).map((study) => (
                <Link
                  key={study.slug}
                  to={`/work/${study.slug}`}
                  className="flex items-center gap-3 rounded-sm p-2 t-base hover:bg-muted focus-ring"
                >
                  {study.coverImage && (
                    <img
                      src={study.coverImage}
                      alt=""
                      loading="lazy"
                      className={`h-10 w-14 shrink-0 rounded-sm ${study.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                    />
                  )}
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-foreground">{study.title}</span>
                    <span className="block truncate text-xs text-muted-foreground">{study.summary}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Reveal>

        <ul className="sr-only">
          {nodes.map((node) => (
            <li key={node.tag}>
              <Link to={`/work?tag=${encodeURIComponent(node.tag)}`}>
                {node.tag} — {counts[node.tag] ?? 0} case studies
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExpertiseConstellation;