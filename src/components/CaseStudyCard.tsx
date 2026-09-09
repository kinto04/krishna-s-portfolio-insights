import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { Pill } from "@/components/ui/pill";
import { tagColor } from "@/lib/tagColors";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
  presentation?: "open" | "contained";
};

const CaseStudyCard = ({ study, presentation = "open" }: CaseStudyCardProps) => {
  const isContained = presentation === "contained";

  return (
    <Link
      to={`/work/${study.slug}`}
      className={cn(
        "group flex h-full flex-col lift-hover t-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isContained ? "p-4 sm:p-5" : "border-t border-border pt-3 hover:border-foreground/60",
      )}
    >
      <div className="aspect-[16/10] bg-card rounded-sm mb-5 overflow-hidden border border-border">

        {study.coverImage ? (
          <img
            src={study.coverImage}
            alt={study.title}
            className={`w-full h-full transition-transform duration-[900ms] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.05] ${study.imageFit === "contain" ? "object-contain" : "object-cover"}`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Cover Image</span>
          </div>
        )}
      </div>
      <div className="px-1 pb-1 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-normal text-foreground group-hover:text-primary t-base mb-1.5 leading-snug line-clamp-2 min-h-[3.5rem] flex items-start gap-2">
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
                className="inline-flex items-center gap-1.5 border-t px-0 py-1 label-eyebrow"
                style={{
                  borderColor: `color-mix(in srgb, ${tagColor(tag)} 32%, transparent)`,
                  color: tagColor(tag),
                }}
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
