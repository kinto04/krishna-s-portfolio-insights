import { ExternalLink, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Block } from "@/data/caseStudies";

export const ChapterHeader = ({ number, label, intro }: { number: string; label: string; intro?: string }) => (
  <Reveal className="mt-28 mb-12 first:mt-8 pt-10 border-t border-border">
    <p className="label-eyebrow mb-5">
      Chapter {number}
    </p>
    <div className="flex items-baseline gap-5">
      <span className="font-serif text-5xl text-primary/70 tabular-nums leading-none">{number}</span>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">{label}</h2>
    </div>
    {intro && (
      <p className="text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl pl-0 sm:pl-[4.5rem]">{intro}</p>
    )}
  </Reveal>
);

const Statement = ({ text, eyebrow }: { text: string; eyebrow?: string }) => (
  <Reveal className="my-16 max-w-3xl">
    {eyebrow && (
      <p className="label-eyebrow mb-4">{eyebrow}</p>
    )}
    <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] tracking-tight">
      {text}
    </p>
  </Reveal>
);

const Lead = ({ text }: { text: string }) => (
  <Reveal className="my-8 max-w-2xl">
    <p className="text-lg text-foreground leading-relaxed">{text}</p>
  </Reveal>
);

const Methods = ({ items }: { items: { label: string; line: string }[] }) => (
  <Reveal className="my-12">
    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item, i) => (
        <div key={item.label} className="border-t border-border pt-5">
          <p className="label-eyebrow mb-2 tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="font-serif text-xl text-foreground mb-2 leading-snug">{item.label}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.line}</p>
        </div>
      ))}
    </div>
  </Reveal>
);

const QuoteBlock = ({ text, source }: { text: string; source: string }) => (
  <Reveal className="my-14 max-w-3xl">
    <div className="border-l-2 border-primary pl-6 sm:pl-8 relative">
      <Quote className="absolute -top-2 -left-3 text-primary/20 bg-background" size={24} />
      <p className="font-serif italic text-xl sm:text-2xl text-foreground leading-relaxed mb-4">
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
}: {
  title?: string;
  intro?: string;
  items: { title: string; body: string }[];
}) => (
  <Reveal className="my-14">
    {title && (
      <h3 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight mb-3 max-w-2xl">{title}</h3>
    )}
    {intro && <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">{intro}</p>}
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={item.title} className="border border-border rounded-lg p-6 bg-card/40">
          <p className="font-serif text-3xl text-primary/70 tabular-nums leading-none mb-4">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="font-serif text-lg text-foreground leading-snug mb-2">{item.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  </Reveal>
);

const Archetypes = ({
  items,
}: {
  items: { number: string; name: string; role: string; line: string; quote: string }[];
}) => (
  <Reveal className="my-12">
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((a) => (
        <div key={a.name} className="border border-border rounded-lg p-6 bg-card/40 flex flex-col">
          <p className="label-eyebrow mb-3 tabular-nums">
            Archetype {a.number}
          </p>
          <p className="font-serif text-2xl text-foreground leading-tight mb-1">{a.name}</p>
          <p className="label-eyebrow text-primary mb-4">{a.role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.line}</p>
          <p className="font-serif italic text-base text-foreground leading-relaxed border-l-2 border-primary/40 pl-4 mt-auto">
            "{a.quote}"
          </p>
        </div>
      ))}
    </div>
  </Reveal>
);

const ImageBlock = ({
  src,
  caption,
  fullWidth,
  maxWidth,
}: {
  src: string;
  caption?: string;
  fullWidth?: boolean;
  maxWidth?: "md" | "lg" | "full";
}) => {
  const widthClass =
    maxWidth === "md" ? "max-w-2xl mx-auto" : maxWidth === "lg" ? "max-w-4xl mx-auto" : fullWidth ? "" : "max-w-3xl mx-auto";
  return (
    <Reveal className="mb-16">
      <div className={widthClass}>
        <div className="rounded-lg overflow-hidden bg-card border border-border">
          <img src={src} alt={caption ?? ""} className="w-full" loading="lazy" />
        </div>
        {caption && (
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
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
}: {
  intro?: string;
  items: { title: string; line: string; thumb: string }[];
}) => (
  <Reveal className="my-14">
    {intro && <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">{intro}</p>}
    <div className="grid sm:grid-cols-2 gap-5">
      {items.map((f, i) => (
        <div key={f.title} className="border border-border rounded-lg overflow-hidden bg-card/40 group">
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
            <p className="font-serif text-xl text-foreground mb-1.5 leading-snug">{f.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.line}</p>
          </div>
        </div>
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
}: {
  image: string;
  eyebrow?: string;
  title: string;
  body: string;
  index: number;
}) => {
  const reverse = index % 2 === 1;
  return (
    <Reveal className="my-16">
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
        <div className={`md:col-span-7 rounded-lg overflow-hidden bg-card border border-border ${reverse ? "md:order-2" : ""}`}>
          <img src={image} alt={title} loading="lazy" className="w-full" />
        </div>
        <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          {eyebrow && (
            <p className="label-eyebrow text-primary mb-3">{eyebrow}</p>
          )}
          <h3 className="font-serif text-2xl sm:text-3xl text-foreground leading-tight tracking-tight mb-3">
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
}: {
  value: string;
  label: string;
  bullets?: string[];
  href?: string;
}) => (
  <Reveal className="my-14">
    <div className="border-y border-border py-12 grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-5">
        <p className="font-serif text-7xl sm:text-8xl text-foreground leading-none mb-3 tracking-tight">
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

export const RenderBlock = ({ block, index }: { block: Block; index: number }) => {
  switch (block.kind) {
    case "chapter":
      return <ChapterHeader number={block.number} label={block.label} intro={block.intro} />;
    case "statement":
      return <Statement text={block.text} eyebrow={block.eyebrow} />;
    case "lead":
      return <Lead text={block.text} />;
    case "methods":
      return <Methods items={block.items} />;
    case "quote":
      return <QuoteBlock text={block.text} source={block.source} />;
    case "numberedList":
      return <NumberedList title={block.title} intro={block.intro} items={block.items} />;
    case "archetypes":
      return <Archetypes items={block.items} />;
    case "image":
      return <ImageBlock src={block.src} caption={block.caption} fullWidth={block.fullWidth} maxWidth={block.maxWidth} />;
    case "featureGrid":
      return <FeatureGrid intro={block.intro} items={block.items} />;
    case "featureRow":
      return <FeatureRow image={block.image} eyebrow={block.eyebrow} title={block.title} body={block.body} index={index} />;
    case "stat":
      return <StatBlock value={block.value} label={block.label} bullets={block.bullets} href={block.href} />;
    default:
      return null;
  }
};

// Build "Jump to" chapter chips for a blocks-based study
export const getChapterAnchors = (blocks: Block[]) =>
  blocks
    .filter((b): b is Extract<Block, { kind: "chapter" }> => b.kind === "chapter")
    .map((c) => ({ id: c.id, number: c.number, label: c.label }));
