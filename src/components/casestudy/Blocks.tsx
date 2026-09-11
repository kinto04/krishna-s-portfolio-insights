import { BookOpen, ExternalLink, Globe, Quote, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Block } from "@/data/caseStudies";

/** Cap the stagger so long chapters never wait too long. */
const step = (i?: number) => Math.min(i ?? 0, 3);

export const ChapterHeader = ({
  number,
  label,
  intro,
  layout = "default",
}: {
  number: string;
  label: string;
  intro?: string;
  layout?: "default" | "split";
}) => {
  const isSplit = layout === "split";
  return (
    <Reveal
      className={`case-study-chapter-header ${
        isSplit ? "" : "mt-20 mb-8 first:mt-8 pt-8 border-t border-border"
      }`}
    >
      <p className="label-eyebrow mb-5">
        Chapter {number}
      </p>
      <div className="flex items-baseline gap-5">
        <span className="text-5xl text-primary/70 tabular-nums leading-none">{number}</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">{label}</h2>
      </div>
      {intro && (
        <p className={`text-base text-muted-foreground leading-relaxed mt-4 pl-0 sm:pl-[4.5rem] ${isSplit ? "" : "max-w-3xl"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
};

const Statement = ({ text, eyebrow, r }: { text: string; eyebrow?: string; r?: number }) => (
  <Reveal index={step(r)} className="my-12 max-w-4xl">
    {eyebrow && (
      <p className="label-eyebrow mb-4">{eyebrow}</p>
    )}
    <p className="text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] tracking-tight">
      {text}
    </p>
  </Reveal>
);

const Lead = ({ text, r }: { text: string; r?: number }) => (
  <Reveal index={step(r)} className="my-8 max-w-3xl">
    <p className="text-lg text-foreground leading-relaxed">{text}</p>
  </Reveal>
);

const Methods = ({ items, r }: { items: { label: string; line: string }[]; r?: number }) => (
  <Reveal index={step(r)} className="my-10">
    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item, i) => (
        <Reveal key={item.label} index={i} className="border-t border-border pt-5">
          <p className="label-eyebrow mb-2 tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="text-xl text-foreground mb-2 leading-snug">{item.label}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.line}</p>
        </Reveal>
      ))}
    </div>
  </Reveal>
);

const QuoteBlock = ({ text, source, r }: { text: string; source: string; r?: number }) => (
  <Reveal index={step(r)} className="my-12 max-w-3xl">
    <div className="border-l-2 border-primary pl-6 sm:pl-8 relative">
      <Quote className="absolute -top-2 -left-3 text-primary/20 bg-background" size={24} />
      <p className="italic text-xl sm:text-2xl text-foreground leading-relaxed mb-4">
        "{text}"
      </p>
      <p className="label-eyebrow">{source}</p>
    </div>
  </Reveal>
);

const NumberedList = ({
  title,
  intro,
  items,
  r,
}: {
  title?: string;
  intro?: string;
  items: { title: string; body: string }[];
  r?: number;
}) => (
  <Reveal index={step(r)} className="my-12">
    {title && (
      <h3 className="text-2xl sm:text-3xl text-foreground mb-3 max-w-3xl">{title}</h3>
    )}
    {intro && <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl">{intro}</p>}
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Reveal key={item.title} index={i} className="border border-border rounded-sm p-6 bg-card/40">
          <p className="text-3xl text-primary/70 tabular-nums leading-none mb-4">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="text-lg text-foreground leading-snug mb-2">{item.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
        </Reveal>
      ))}
    </div>
  </Reveal>
);

const Archetypes = ({
  items,
  r,
}: {
  items: { number: string; name: string; role: string; line: string; quote: string }[];
  r?: number;
}) => (
  <Reveal index={step(r)} className="my-10">
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((a, i) => (
        <Reveal key={a.name} index={i} className="border border-border rounded-sm p-6 bg-card/40 flex flex-col">
          <p className="label-eyebrow mb-3 tabular-nums">
            Archetype {a.number}
          </p>
          <p className="text-2xl text-foreground leading-tight mb-1">{a.name}</p>
          <p className="label-eyebrow text-primary mb-4">{a.role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.line}</p>
          <p className="italic text-base text-foreground leading-relaxed border-l-2 border-primary/40 pl-4 mt-auto">
            "{a.quote}"
          </p>
        </Reveal>
      ))}
    </div>
  </Reveal>
);

const ImageBlock = ({
  src,
  caption,
  fullWidth,
  maxWidth,
  r,
}: {
  src: string;
  caption?: string;
  fullWidth?: boolean;
  maxWidth?: "md" | "lg" | "full";
  r?: number;
}) => {
  const widthClass =
    maxWidth === "md" ? "max-w-2xl mx-auto" : maxWidth === "lg" ? "max-w-4xl mx-auto" : fullWidth ? "" : "max-w-3xl mx-auto";
  return (
    <Reveal index={step(r)} className="mb-12">
      <div className={widthClass}>
        <div className="case-study-image-frame rounded-sm overflow-hidden bg-card border border-border">
          <img src={src} alt={caption ?? ""} className="w-full" loading="lazy" />
        </div>
        {caption && (
          <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed">
            {caption}
          </p>
        )}
      </div>
    </Reveal>
  );
};

const FeatureGrid = ({
  intro,
  items,
  r,
}: {
  intro?: string;
  items: { title: string; line: string; thumb: string }[];
  r?: number;
}) => (
  <Reveal index={step(r)} className="my-12">
    {intro && <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl">{intro}</p>}
    <div className="grid sm:grid-cols-2 gap-5">
      {items.map((f, i) => (
        <Reveal
          key={f.title}
          index={i}
          className="border border-border rounded-sm overflow-hidden bg-card/40 group"
        >
          <div className="aspect-[16/10] overflow-hidden bg-card">
            <img
              src={f.thumb}
              alt={f.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <p className="label-eyebrow mb-1 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="text-xl text-foreground mb-1.5 leading-snug">{f.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.line}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Reveal>
);

const FeatureRow = ({
  image,
  eyebrow,
  title,
  body,
  index,
  r,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  body: string;
  index: number;
  r?: number;
}) => {
  const reverse = index % 2 === 1;
  return (
    <Reveal index={step(r)} className="my-12">
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
        <div className={`md:col-span-7 rounded-sm overflow-hidden bg-card border border-border ${reverse ? "md:order-2" : ""}`}>
          <img src={image} alt={title} loading="lazy" className="w-full" />
        </div>
        <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          {eyebrow && (
            <p className="label-eyebrow text-primary mb-3">{eyebrow}</p>
          )}
          <h3 className="text-2xl sm:text-3xl text-foreground leading-tight mb-3">
            {title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">{body}</p>
        </div>
      </div>
    </Reveal>
  );
};

const StatBlock = ({
  value,
  label,
  bullets,
  href,
  r,
}: {
  value: string;
  label: string;
  bullets?: string[];
  href?: string;
  r?: number;
}) => (
  <Reveal index={step(r)} className="my-12">
    <div className="border-y border-border py-10 grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-5">
        <p className="text-7xl sm:text-8xl text-foreground leading-none mb-3 tracking-tight">
          {value}
        </p>
        <p className="text-sm text-muted-foreground">{label}</p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary t-base mt-4"
          >
            planjointly.com <ExternalLink size={12} />
          </a>
        )}
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="md:col-span-7 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 text-base text-foreground leading-relaxed">
              <span className="text-primary mt-2 w-4 border-t border-primary flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </Reveal>
);

const trackIcons = { users: Users, book: BookOpen, globe: Globe } as const;

const ResearchTracks = ({
  items,
  r,
}: {
  items: { icon: keyof typeof trackIcons; title: string; line: string; badge?: string; highlight?: boolean }[];
  r?: number;
}) => (
  <div className="my-10 space-y-3">
    {items.map((item, i) => {
      const Icon = trackIcons[item.icon];
      return (
        <Reveal
          key={item.title}
          index={step(r) + i}
          className={`flex items-start gap-4 rounded-md border p-4 sm:p-5 ${
            item.highlight ? "border-primary/40 bg-primary/[0.06]" : "border-border bg-card"
          }`}
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${
              item.highlight ? "bg-primary/12 text-primary" : "bg-foreground/[0.04] text-foreground/70"
            }`}
            aria-hidden
          >
            <Icon size={18} strokeWidth={1.75} />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-semibold text-foreground leading-snug">{item.title}</span>
            <span className="block text-sm text-muted-foreground leading-relaxed mt-0.5">{item.line}</span>
            {item.badge && (
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-0.5 text-xs font-medium text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
                {item.badge}
              </span>
            )}
          </span>
        </Reveal>
      );
    })}
  </div>
);

export const RenderBlock = ({
  block,
  index,
  revealIndex,
}: {
  block: Block;
  index: number;
  /** Position within its chapter — drives the staggered reveal. */
  revealIndex?: number;
}) => {
  switch (block.kind) {
    case "chapter":
      return <ChapterHeader number={block.number} label={block.label} intro={block.intro} />;
    case "statement":
      return <Statement text={block.text} eyebrow={block.eyebrow} r={revealIndex} />;
    case "lead":
      return <Lead text={block.text} r={revealIndex} />;
    case "methods":
      return <Methods items={block.items} r={revealIndex} />;
    case "quote":
      return <QuoteBlock text={block.text} source={block.source} r={revealIndex} />;
    case "numberedList":
      return <NumberedList title={block.title} intro={block.intro} items={block.items} r={revealIndex} />;
    case "archetypes":
      return <Archetypes items={block.items} r={revealIndex} />;
    case "image":
      return (
        <ImageBlock
          src={block.src}
          caption={block.caption}
          fullWidth={block.fullWidth}
          maxWidth={block.maxWidth}
          r={revealIndex}
        />
      );
    case "featureGrid":
      return <FeatureGrid intro={block.intro} items={block.items} r={revealIndex} />;
    case "featureRow":
      return (
        <FeatureRow
          image={block.image}
          eyebrow={block.eyebrow}
          title={block.title}
          body={block.body}
          index={index}
          r={revealIndex}
        />
      );
    case "stat":
      return <StatBlock value={block.value} label={block.label} bullets={block.bullets} href={block.href} r={revealIndex} />;
    case "researchTracks":
      return <ResearchTracks items={block.items} r={revealIndex} />;
    default:
      return null;
  }
};

// Build "Jump to" chapter chips for a blocks-based study
export const getChapterAnchors = (blocks: Block[]) =>
  blocks
    .filter((b): b is Extract<Block, { kind: "chapter" }> => b.kind === "chapter")
    .map((c) => ({ id: c.id, number: c.number, label: c.label }));
