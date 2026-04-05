export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  tags: string[];
  duration: string;
  overview: string;
  problem: string;
  approach: string;
  outcome: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nectar-ai",
    title: "Nectar.ai",
    subtitle: "AI-powered customer support chatbot",
    role: "Product Manager & Lead Software Engineer",
    tags: ["AI", "SaaS", "Customer Support"],
    duration: "NectarOM",
    overview: "Built an AI customer support chatbot from the ground up — from defining the product vision to shipping production code. Nectar.ai automates tier-1 customer queries, reducing response times and freeing up human agents for complex issues.",
    problem: "Customer support teams were overwhelmed with repetitive queries. Response times were growing, CSAT was dropping, and scaling the team linearly wasn't sustainable.",
    approach: "Led cross-functional discovery to identify the highest-volume, lowest-complexity queries. Designed the conversational flows, defined the AI training pipeline, and built the core platform as lead engineer. Iterated rapidly with customer feedback loops.",
    outcome: "[Placeholder — add metrics: response time reduction, ticket deflection rate, CSAT improvement, etc.]",
    featured: true,
  },
  {
    slug: "nectar-cares",
    title: "NectarCares",
    subtitle: "End-to-end product built as sole engineer",
    role: "Sole Engineer — Design, Engineering, Research & Stakeholder Management",
    tags: ["Full-Stack", "Product", "Solo Build"],
    duration: "NectarOM",
    overview: "Owned every aspect of NectarCares — from user research and design to engineering and stakeholder management. Built and shipped the entire product solo.",
    problem: "[Placeholder — describe the user problem NectarCares was solving]",
    approach: "Conducted primary research, designed the UX, built the frontend and backend, and managed stakeholder expectations — all as a team of one. Prioritized ruthlessly to ship on time.",
    outcome: "[Placeholder — add impact metrics, user adoption, stakeholder feedback]",
    featured: true,
  },
  {
    slug: "northwestern-medicine",
    title: "Northwestern Medicine",
    subtitle: "Clinical diagnostic tool for healthcare",
    role: "Product Manager & Design Lead",
    tags: ["Healthcare", "Design", "Clinical"],
    duration: "Northwestern University",
    overview: "Led the product and design effort for a clinical diagnostic tool at Northwestern Medicine, working closely with clinicians to translate complex medical workflows into intuitive software.",
    problem: "Clinicians needed a faster, more reliable way to conduct diagnostic assessments. Existing tools were clunky, slow, and didn't integrate well into clinical workflows.",
    approach: "Embedded with the clinical team to understand workflows firsthand. Led design sprints, created prototypes, and iterated based on clinician feedback. Managed the product roadmap and stakeholder communication.",
    outcome: "[Placeholder — add outcomes: clinician adoption, time saved, diagnostic accuracy improvement]",
    featured: true,
  },
  {
    slug: "jointly-travel",
    title: "Jointly Travel",
    subtitle: "Mobile-first group travel coordination app",
    role: "Product Manager — Master's Thesis Project",
    tags: ["Mobile", "AI", "Travel"],
    duration: "Northwestern — Master's Thesis",
    overview: "Designed and built a mobile-first group travel app that uses AI to help groups coordinate plans, preferences, and logistics — eliminating the chaos of group travel planning.",
    problem: "Planning group trips is a mess. Scattered messages, conflicting preferences, and no single source of truth. Groups waste hours coordinating what should be simple decisions.",
    approach: "Conducted extensive user research with frequent travelers. Designed AI-assisted features for preference aggregation and itinerary suggestions. Built a mobile-first experience with real-time group collaboration.",
    outcome: "[Placeholder — add thesis results, user testing outcomes, key findings]",
    featured: false,
  },
  {
    slug: "southwest-airlines",
    title: "Southwest Airlines",
    subtitle: "Operations and efficiency partnership",
    role: "Product & Operations",
    tags: ["Operations", "Efficiency", "Aviation"],
    duration: "Northwestern Partnership",
    overview: "Partnered with Southwest Airlines on an operations efficiency project, identifying opportunities to streamline processes and reduce waste.",
    problem: "[Placeholder — describe the operational challenge]",
    approach: "[Placeholder — describe research, analysis, and recommendations]",
    outcome: "[Placeholder — add impact and recommendations delivered]",
    featured: false,
  },
  {
    slug: "yeti",
    title: "Yeti",
    subtitle: "Design strategy and go-to-market model",
    role: "Design Strategist (Team of 5)",
    tags: ["Strategy", "Design", "Go-to-Market"],
    duration: "Northwestern",
    overview: "Led design strategy for Yeti as part of a five-person team. Conducted 14 primary interviews and developed a three-tier go-to-market model.",
    problem: "[Placeholder — describe the strategic challenge Yeti was facing]",
    approach: "Conducted 14 primary interviews with customers and stakeholders. Synthesized insights into a three-tier go-to-market strategy covering direct-to-consumer, retail partnerships, and B2B channels.",
    outcome: "[Placeholder — add deliverables and client feedback]",
    featured: false,
  },
];
