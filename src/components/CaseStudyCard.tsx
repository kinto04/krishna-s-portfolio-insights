import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group block rounded-xl border border-border/60 p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border hover:shadow-[0_20px_40px_-20px_hsl(var(--primary)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="aspect-[16/10] bg-card rounded-lg mb-4 overflow-hidden">
        {study.coverImage ? (
          <img
            src={study.coverImage}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Cover Image</span>
          </div>
        )}
      </div>
      <div className="px-1 pb-1">
        <h3 className="font-serif text-xl sm:text-[1.4rem] font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 mb-1.5 leading-snug">
          {study.title}
        </h3>
        <p className="text-sm text-muted-foreground/80 mb-3 leading-relaxed">{study.subtitle}</p>
        <div className="flex flex-wrap items-center gap-1.5">
          {study.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border/60 rounded-full px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-primary opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          View case study <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
