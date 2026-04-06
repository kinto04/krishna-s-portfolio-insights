export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  tags: string[];
  duration: string;
  year: string;
  tools: string[];
  overview: string;
  goal: string;
  responsibilities: string[];
  impact: string;
  process: string;
  challenges: string;
  outcome: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nectar-cares",
    title: "NectarCares",
    subtitle: "End-to-end product built as sole engineer",
    role: "Sole Engineer + PM",
    tags: ["Healthcare AI", "Clinical SaaS", "Solo Build"],
    duration: "NectarOM",
    year: "2024",
    tools: ["React", "Node.js", "PostgreSQL", "OpenAI API"],
    overview: "Owned every aspect of NectarCares — from user research and design to engineering and stakeholder management. Built and shipped the entire product solo.",
    goal: "Build a clinical support tool that streamlines patient care workflows and reduces administrative burden for healthcare teams.",
    responsibilities: [
      "End-to-end product development — research, design, engineering",
      "Stakeholder management and requirements gathering",
      "Production deployment and iteration based on user feedback",
    ],
    impact: "[Placeholder — add impact metrics, user adoption, stakeholder feedback]",
    process: "Conducted primary research with clinical staff, designed the UX, built the frontend and backend, and managed stakeholder expectations — all as a team of one. Prioritized ruthlessly to ship on time.",
    challenges: "[Placeholder — describe key challenges and how you mitigated them]",
    outcome: "[Placeholder — add impact metrics, user adoption, stakeholder feedback]",
    featured: true,
  },
  {
    slug: "nectar-ai",
    title: "Nectar.ai",
    subtitle: "AI Powered Customer Support for E-Commerce",
    role: "Product Manager, Software Developer",
    tags: ["AI", "E-Commerce", "Customer Support"],
    duration: "NectarOM",
    year: "2023",
    tools: ["Python", "Node.JS", "OpenAI API", "Excel"],
    overview: "Designed, developed, and launched Nectar.ai — an AI-powered chatbot that automated customer support from landing page to checkout. By analyzing months of historical chat data, I built conversation flows that reduced unanswered customer chats by 99% and boosted conversion rates (add-to-cart +30%, checkout +18%).",
    goal: "Automate customer support across the entire e-commerce journey — from landing page to checkout — using AI-driven conversation flows.",
    responsibilities: [
      "Analyzed months of historical chat data to identify high-volume query patterns",
      "Designed and built AI conversation flows covering the full customer journey",
      "Developed and launched the chatbot end-to-end as sole engineer",
    ],
    impact: "99% reduction in unanswered customer chats. +30% increase in add-to-cart conversions. +18% increase in checkout conversions.",
    process: "Analyzed historical chat logs to map the most common customer queries and drop-off points. Designed conversation flows that addressed each stage of the shopping journey. Built the chatbot using Python, Node.JS, and OpenAI API, then iterated based on live performance data.",
    challenges: "Ensuring AI responses were accurate enough to handle nuanced product questions without frustrating customers. Balancing automation coverage with graceful handoff to human agents for edge cases.",
    outcome: "99% reduction in unanswered customer chats. +30% add-to-cart conversion improvement. +18% checkout conversion improvement.",
    featured: true,
  },
  {
    slug: "jointly-travel",
    title: "Jointly Travel",
    subtitle: "Mobile-first group travel coordination app",
    role: "Founder + PM (Master's Thesis)",
    tags: ["Mobile", "AI", "Travel"],
    duration: "Northwestern — Master's Thesis",
    year: "2025–2026",
    tools: ["React Native", "Firebase", "OpenAI API", "Figma"],
    overview: "Designed and built a mobile-first group travel app that uses AI to help groups coordinate plans, preferences, and logistics — eliminating the chaos of group travel planning.",
    goal: "Eliminate the chaos of group travel planning by creating a single source of truth for trip coordination.",
    responsibilities: [
      "Product vision and thesis research on group coordination UX",
      "AI-assisted preference aggregation and itinerary generation",
      "Mobile-first design and development with real-time collaboration",
    ],
    impact: "[Placeholder — add thesis results, user testing outcomes, key findings]",
    process: "Conducted extensive user research with frequent travelers. Designed AI-assisted features for preference aggregation and itinerary suggestions. Built a mobile-first experience with real-time group collaboration.",
    challenges: "[Placeholder — describe challenges around group dynamics, AI recommendations, real-time sync]",
    outcome: "[Placeholder — add thesis results, user testing outcomes, key findings]",
    featured: true,
  },
  {
    slug: "northwestern-medicine",
    title: "Northwestern Medicine",
    subtitle: "Clinical diagnostic tool for healthcare",
    role: "PM + Design Lead",
    tags: ["Healthcare", "Design", "Clinical Diagnostics"],
    duration: "Northwestern University",
    year: "2025",
    tools: ["Figma", "React", "Clinical APIs"],
    overview: "Led the product and design effort for a clinical diagnostic tool at Northwestern Medicine, working closely with clinicians to translate complex medical workflows into intuitive software.",
    goal: "Create a faster, more reliable diagnostic assessment tool that integrates seamlessly into clinical workflows.",
    responsibilities: [
      "Product management and roadmap for clinical diagnostic tool",
      "Design sprints and prototyping with clinician feedback loops",
      "Stakeholder communication across clinical and engineering teams",
    ],
    impact: "[Placeholder — add outcomes: clinician adoption, time saved, diagnostic accuracy improvement]",
    process: "Embedded with the clinical team to understand workflows firsthand. Led design sprints, created prototypes, and iterated based on clinician feedback. Managed the product roadmap and stakeholder communication.",
    challenges: "[Placeholder — describe challenges around clinical requirements, compliance, user adoption]",
    outcome: "[Placeholder — add outcomes: clinician adoption, time saved, diagnostic accuracy improvement]",
    featured: false,
  },
  {
    slug: "yeti",
    title: "Yeti",
    subtitle: "Design strategy and go-to-market model",
    role: "Strategy Lead (Team of 5)",
    tags: ["Strategy", "Brand", "Commerce Growth"],
    duration: "Northwestern",
    year: "2025",
    tools: ["Primary Research", "Market Analysis", "Strategic Frameworks"],
    overview: "Led design strategy for Yeti as part of a five-person team. Conducted 14 primary interviews and developed a three-tier go-to-market model.",
    goal: "Develop a data-driven go-to-market strategy to expand Yeti's market presence across multiple channels.",
    responsibilities: [
      "Led 14 primary interviews with customers and stakeholders",
      "Synthesized insights into a three-tier go-to-market strategy",
      "Presented strategic recommendations to client stakeholders",
    ],
    impact: "[Placeholder — add deliverables and client feedback]",
    process: "Conducted 14 primary interviews with customers and stakeholders. Synthesized insights into a three-tier go-to-market strategy covering direct-to-consumer, retail partnerships, and B2B channels.",
    challenges: "[Placeholder — describe strategic challenges and how the team navigated them]",
    outcome: "[Placeholder — add deliverables and client feedback]",
    featured: false,
  },
  {
    slug: "southwest-airlines",
    title: "Southwest Airlines",
    subtitle: "Operations and efficiency partnership",
    role: "Product Manager",
    tags: ["Operations", "Efficiency", "Aviation"],
    duration: "Northwestern Partnership",
    year: "2025",
    tools: ["Data Analysis", "Process Mapping", "Stakeholder Interviews"],
    overview: "Partnered with Southwest Airlines on an operations efficiency project, identifying opportunities to streamline processes and reduce waste.",
    goal: "Identify and recommend operational efficiency improvements to reduce waste and streamline processes.",
    responsibilities: [
      "Led research and analysis of operational workflows",
      "Identified key inefficiencies and bottlenecks",
      "Delivered actionable recommendations to Southwest leadership",
    ],
    impact: "[Placeholder — add impact and recommendations delivered]",
    process: "[Placeholder — describe research, analysis, and recommendations]",
    challenges: "[Placeholder — describe operational challenges encountered]",
    outcome: "[Placeholder — add impact and recommendations delivered]",
    featured: false,
  },
];
