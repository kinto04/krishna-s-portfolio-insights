export interface Metric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Slide {
  image: string;
  caption?: string;
  sectionLabel?: string; // renders a labeled divider above this slide
}

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
  metrics?: Metric[];
  slides?: Slide[];
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
      {
        sectionLabel: "The Research",
        image: "/images/jointly/3.png",
        caption: "60k+ views on a single Reddit thread surfaced unfiltered user frustration with group travel planning.",
      },
      { image: "/images/jointly/4.png", caption: "User interviews, secondary research, and community listening across travel communities." },
      { image: "/images/jointly/7.png", caption: "Three core frustrations emerged consistently across every research source." },
      {
        sectionLabel: "The Users",
        image: "/images/jointly/9.png",
        caption: "Three behavioral archetypes shaped every design decision: The Planner, The Support, and The Easy-Goer.",
      },
      {
        sectionLabel: "The Opportunity",
        image: "/images/jointly/10.png",
        caption: "Every existing tool is either built for one person, or built without intelligence. No product is both group-native and smart.",
      },
      {
        sectionLabel: "The Product",
        image: "/images/jointly/11.png",
        caption: "Jointly. — the collaborative decision-making layer between inspiration and booking.",
      },
      { image: "/images/jointly/27.png", caption: "Four features that turn group chaos into a plan everyone's excited about." },
      { image: "/images/jointly/12.png", caption: "Trip creation: set a destination, select interests, and indicate budget priority in two steps." },
      { image: "/images/jointly/14.png", caption: "Describe your idea in natural language — Jointly makes sense of it and surfaces structured suggestions." },
      { image: "/images/jointly/18.png", caption: "Curated itinerary and map view, generated from the group's voted ideas." },
      { image: "/images/jointly/19.png", caption: "Smart budgeting prevents awkward conversations — the tool handles the social dynamics, not the users." },
      {
        sectionLabel: "Early Signal",
        image: "/images/jointly/21.png",
        caption: "Built, launched, and learning. 12 early signups in the first week at planjointly.com.",
      },
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
      "A small business selling wellness products needed to overhaul their underperforming customer support chatbot. I researched a year of historical support conversations, designed the conversation flows, and built a GPT-powered chatbot that guides customers from landing page through checkout.",
    featured: true,
    coverImage: "/images/u6qotkxyhcppqyywjql0qfrlnq.webp",
    metrics: [
      { value: "+99%", label: "Response Rate", sublabel: "% of customer chats answered" },
      { value: "+30%", label: "Add-to-Cart Rate", sublabel: "% of sessions that added to cart" },
      { value: "+18%", label: "Checkout Rate", sublabel: "% of sessions that checked out" },
    ],
    slides: [
      { image: "/images/nectar-ai/1.png" },
      {
        sectionLabel: "The Problem",
        image: "/images/nectar-ai/2.png",
        caption: "The existing chatbot couldn't handle real customer questions — flooding the owner's inbox and leaving customers without answers.",
      },
      { image: "/images/nectar-ai/3.png", caption: "Before: robotic pre-set responses that couldn't answer product questions, forwarding everything to email." },
      {
        sectionLabel: "My Role",
        image: "/images/nectar-ai/4.png",
      },
      {
        sectionLabel: "The Research",
        image: "/images/nectar-ai/5.png",
        caption: "Analysis of historical chat data revealed three dominant query types: product questions, product suggestions, and policy questions.",
      },
      {
        sectionLabel: "The Process",
        image: "/images/nectar-ai/6.png",
        caption: "The initial GPT-3 fine-tuning approach failed — invalid links, hallucinations, and inconsistent responses.",
      },
      {
        image: "/images/nectar-ai/7.png",
        caption: "Fine-tuning required a massive volume of high-quality training data. OpenAI's new Embeddings API opened the door to a RAG approach instead.",
      },
      {
        sectionLabel: "The Architecture",
        image: "/images/nectar-ai/8.png",
        caption: "Final system: GPT-3 embeddings + Google Dialogflow front-end + Shopify/MailChimp for customer data persistence.",
      },
      {
        sectionLabel: "The Result",
        image: "/images/nectar-ai/9.png",
        caption: "The chatbot captures customer name, email, and product interests — funneling enriched data into Shopify and MailChimp for marketing.",
      },
      {
        sectionLabel: "Learnings",
        image: "/images/nectar-ai/10.png",
      },
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
