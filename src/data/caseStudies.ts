export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  context: string;
  tags: string[];
  summary: string;
  featured: boolean;
  coverImage?: string;
  liveUrl?: string;
  slides?: {
    image: string;
    caption?: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "jointly-travel",
    title: "Jointly.",
    subtitle: "Group travel planning, made easy.",
    role: "Founder · Product Designer · PM",
    year: "2025–2026",
    context: "Master's Thesis · Northwestern University",
    tags: ["Experience Design", "Mobile", "AI", "Service Design"],
    summary:
      "Group trips are supposed to bring people together — but the planning process often does real damage. Jointly. is a collaborative decision-making layer between inspiration and booking, designed to absorb the social friction of coordination. Built end-to-end as a master's thesis at Northwestern's EDI program.",
    featured: true,
    coverImage: "/images/jointly/11.png",
    liveUrl: "https://planjointly.com",
    slides: [
      { image: "/images/jointly/1.png" },
      { image: "/images/jointly/2.png" },
      { image: "/images/jointly/3.png", caption: "Research: 60k+ views on a single Reddit thread surfaced unfiltered user frustration with group travel planning." },
      { image: "/images/jointly/4.png", caption: "Research methods: user interviews, secondary research, and community listening across travel communities." },
      { image: "/images/jointly/7.png", caption: "Three core frustrations emerged consistently across every research source." },
      { image: "/images/jointly/9.png", caption: "Three behavioral archetypes shaped every design decision: The Planner, The Support, and The Easy-Goer." },
      { image: "/images/jointly/10.png", caption: "Market landscape: every existing tool is either built for one person, or built without intelligence. No product is both group-native and smart." },
      { image: "/images/jointly/11.png", caption: "Jointly. — the collaborative decision-making layer between inspiration and booking." },
      { image: "/images/jointly/27.png", caption: "Four features that turn group chaos into a plan everyone's excited about." },
      { image: "/images/jointly/12.png", caption: "Trip creation: set a destination, select interests, and indicate your budget priority in two steps." },
      { image: "/images/jointly/14.png", caption: "Describe your idea in natural language — Jointly makes sense of it and surfaces structured suggestions." },
      { image: "/images/jointly/18.png", caption: "Curated itinerary and map view, generated from the group's voted ideas." },
      { image: "/images/jointly/19.png", caption: "Smart budgeting prevents awkward conversations — the tool handles the social dynamics, not the users." },
      { image: "/images/jointly/21.png", caption: "Built, launched, and learning. 12 early signups in the first week at planjointly.com." },
      { image: "/images/jointly/22.png" },
    ],
  },
  {
    slug: "nectar-ai",
    title: "Nectar.ai",
    subtitle: "AI-powered customer support for e-commerce.",
    role: "Product Manager · Software Developer",
    year: "2023",
    context: "NectarOM",
    tags: ["AI", "E-Commerce", "Conversational UI"],
    summary:
      "A small business selling wellness products needed to overhaul their underperforming customer support chatbot. I researched a year of historical support conversations, designed the conversation flows, and built a GPT-powered chatbot that guides customers from landing page through checkout — resulting in a 99% improvement in customer response rate, +30% add-to-cart, and +18% checkout conversion.",
    featured: true,
    coverImage: "/images/u6qotkxyhcppqyywjql0qfrlnq.webp",
    slides: [
      { image: "/images/u6qotkxyhcppqyywjql0qfrlnq.webp", caption: "Nectar.ai deployed live on Tranquil Wellbeing — guiding customers from landing page through checkout." },
      { image: "/images/lkuxpvhoouingadlo1ibstxhdne.png", caption: "Research: analyzed a year of historical support conversations to categorize the three core query types." },
      { image: "/images/ofzdqep4rmlejxcwliuca1bbego.webp", caption: "Built a 100 Q&A training dataset from historical chat logs to fine-tune the model." },
      { image: "/images/huba0n8n2agzpzuu7isyiphixw8.png", caption: "Process: Research → Prototype → Validation (failed — hallucinations, broken links) → Pivot to RAG." },
      { image: "/images/rylppkwxd162wow0jk1lhhnn624.png", caption: "Final architecture: GPT-3 + Google Dialogflow + Shopify, with customer context stored across sessions." },
      { image: "/images/1106yljc7hayst1uqgp78trcm8.png", caption: "Key learnings: research paralysis, fast validation, early-mover challenges, and data-driven iteration." },
    ],
  },
  {
    slug: "airy",
    title: "Airy",
    subtitle: "A smarter tool for clinical therapists.",
    role: "Product Manager · Designer",
    year: "2024",
    context: "Interaction Design · Northwestern University",
    tags: ["Healthcare", "Interaction Design", "Product Strategy"],
    summary:
      "Airy is a digital tool designed to help clinical therapists better support their patients — with smart note-taking, nudges, progress tracking, and more. I conducted user interviews, designed high-fidelity prototypes, and authored a PRD and BRD driven by market and user research as part of the team's final handoff.",
    featured: true,
    slides: [],
  },
];
