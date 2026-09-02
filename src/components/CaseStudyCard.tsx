import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { tagColor } from "@/lib/tagColors";
import { Pill } from "@/components/ui/pill";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group flex flex-col h-full rounded-lg border border-border p-3 lift-hover t-base hover:border-primary/40 hover:accent-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="aspect-[16/10] bg-card rounded-md mb-4 overflow-hidden">

        {study.coverImage ? (
          <img
            src={study.coverImage}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-[900ms] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.05]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Cover Image</span>
          </div>
        )}
      </div>
      <div className="px-1 pb-1 flex flex-col flex-1">
        <h3 className="font-serif text-xl sm:text-[1.4rem] font-semibold tracking-tight text-foreground group-hover:text-primary t-base mb-1.5 leading-snug line-clamp-2 min-h-[3.5rem] flex items-start gap-2">
          <span className="flex-1">{study.title}</span>
          {study.inProgress && (
            <Pill
              variant="filled"
              size="sm"
              className="shrink-0 !bg-status-progress/10 !text-status-progress border-status-progress/20 hover:!bg-status-progress/15"
            >
              In progress
            </Pill>
          )}
        </h3>
        <p className="text-sm text-muted-foreground/80 mb-3 leading-relaxed line-clamp-2 min-h-[2.6rem]">
          {study.subtitle}
        </p>
        <div className="mt-auto">
          <div className="flex flex-wrap items-center gap-1.5">
            {study.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: tagColor(tag) }}
                  aria-hidden="true"
                />
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-primary opacity-0 -translate-x-1.5 transition-[opacity,transform] duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:opacity-100 group-hover:translate-x-0">
            View case study <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
