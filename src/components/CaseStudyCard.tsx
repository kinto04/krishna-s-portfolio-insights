import { Link } from "react-router-dom";
import { CaseStudy } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group block p-6 rounded-lg border border-border hover:border-foreground/20 transition-all duration-200"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{study.title}</h3>
      <p className="text-sm text-muted-foreground mb-1">{study.role}</p>
      <p className="text-sm text-muted-foreground mb-4">{study.subtitle}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-all">
        Read case study <ArrowRight size={14} />
      </span>
    </Link>
  );
};

export default CaseStudyCard;
