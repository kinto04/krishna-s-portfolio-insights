import { Link } from "react-router-dom";
import { CaseStudy } from "@/data/caseStudies";

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group block"
    >
      <div className="aspect-[16/10] bg-card rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <span className="text-muted-foreground text-sm">Cover Image</span>
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
        {study.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-2">{study.subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {study.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default CaseStudyCard;
