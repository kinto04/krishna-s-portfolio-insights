import { ExternalLink, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import type { Block } from "@/data/caseStudies";

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const ChapterHeader = ({ number, label, intro }: { number: string; label: string; intro?: string }) => (
  <FadeIn className="mt-24 mb-10 first:mt-8">
    <div className="flex items-baseline gap-5">
      <span className="font-serif text-5xl text-primary/70 tabular-nums leading-none">{number}</span>
      <h2 className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight">{label}</h2>
    </div>
    {intro && (
      <p className="text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl pl-0 sm:pl-[4.5rem]">{intro}</p>
    )}
  </FadeIn>
);

const Statement = ({ text, eyebrow }: { text: string; eyebrow?: string }) => (
  <FadeIn className="my-16 max-w-3xl">
    {eyebrow && (
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-4">{eyebrow}</p>
    )}
    <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] tracking-tight">
      {text}
    </p>
  </FadeIn>
);

const Lead = ({ text }: { text: string }) => (
  <FadeIn className="my-8 max-w-2xl">
    <p className="text-lg text-foreground leading-relaxed">{text}</p>
  </FadeIn>
);

const Methods = ({ items }: { items: { label: string; line: string }[] }) => (
  <FadeIn className="my-12">
    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item, i) => (
        <div key={item.label} className="border-t border-border pt-5">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="font-serif text-xl text-foreground mb-2 leading-snug">{item.label}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.line}</p>
        </div>
      ))}
    </div>
  </FadeIn>
);

const QuoteBlock = ({ text, source }: { text: string; source: string }) => (
  <FadeIn className="my-14 max-w-3xl">
    <div className="border-l-2 border-primary pl-6 sm:pl-8 relative">
      <Quote className="absolute -top-2 -left-3 text-primary/20 bg-background" size={24} />
      <p className="font-serif italic text-xl sm:text-2xl text-foreground leading-relaxed mb-4">
        "{text}"
      </p>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{source}</p>
    </div>
  </FadeIn>
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
  <FadeIn className="my-14">
    {title && (
      <h3 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight mb-3 max-w-2xl">{title}</h3>
    )}
    {intro && <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">{intro}</p>}
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={item.title} className="border border-border rounded-xl p-6 bg-card/30">
          <p className="font-serif text-3xl text-primary/70 tabular-nums leading-none mb-4">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="font-serif text-lg text-foreground leading-snug mb-2">{item.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  </FadeIn>
);

const Archetypes = ({
  items,
}: {
  items: { number: string; name: string; role: string; line: string; quote: string }[];
}) => (
  <FadeIn className="my-12">
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((a) => (
        <div key={a.name} className="border border-border rounded-xl p-6 bg-card/30 flex flex-col">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3 tabular-nums">
            Archetype {a.number}
          </p>
          <p className="font-serif text-2xl text-foreground leading-tight mb-1">{a.name}</p>
          <p className="text-xs uppercase tracking-wider text-primary mb-4">{a.role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.line}</p>
          <p className="font-serif italic text-base text-foreground leading-relaxed border-l-2 border-primary/40 pl-4 mt-auto">
            "{a.quote}"
          </p>
        </div>
      ))}
    </div>
  </FadeIn>
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
    <FadeIn className="mb-16">
      <div className={widthClass}>
        <div className="rounded-lg overflow-hidden bg-card border border-border/40">
          <img src={src} alt={caption ?? ""} className="w-full" loading="lazy" />
        </div>
        {caption && (
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
            {caption}
          </p>
        )}
      </div>
    </FadeIn>
  );
};

const FeatureGrid = ({
  intro,
  items,
}: {
  intro?: string;
  items: { title: string; line: string; thumb: string }[];
}) => (
  <FadeIn className="my-14">
    {intro && <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">{intro}</p>}
    <div className="grid sm:grid-cols-2 gap-5">
      {items.map((f, i) => (
        <div key={f.title} className="border border-border rounded-xl overflow-hidden bg-card/30 group">
          <div className="aspect-[16/10] overflow-hidden bg-card">
            <img
              src={f.thumb}
              alt={f.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="font-serif text-xl text-foreground mb-1.5 leading-snug">{f.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.line}</p>
          </div>
        </div>
      ))}
    </div>
  </FadeIn>
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
    <FadeIn className="my-16">
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
        <div className={`md:col-span-7 rounded-lg overflow-hidden bg-card border border-border/40 ${reverse ? "md:order-2" : ""}`}>
          <img src={image} alt={title} loading="lazy" className="w-full" />
        </div>
        <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          {eyebrow && (
            <p className="text-[10px] uppercase tracking-wider text-primary mb-3">{eyebrow}</p>
          )}
          <h3 className="font-serif text-2xl sm:text-3xl text-foreground leading-tight tracking-tight mb-3">
            {title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">{body}</p>
        </div>
      </div>
    </FadeIn>
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
  <FadeIn className="my-14">
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
            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors mt-4"
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
  </FadeIn>
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
