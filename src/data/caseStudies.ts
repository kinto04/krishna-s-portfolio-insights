export interface Metric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Slide {
  image: string;
  caption?: string;
  sectionLabel?: string; // renders a labeled divider above this slide
  sectionIntro?: string; // optional intro paragraph for the chapter (paired with sectionLabel)
  fullWidth?: boolean;   // force full-bleed treatment even when caption present
}

export interface Overview {
  context: string;
  roleDetail: string[];
  outcome: string;
}

// Narrative blocks — composable units that mix native typography and selective imagery.
// When a CaseStudy provides `blocks`, WorkDetail renders blocks instead of slides.
export type Block =
  | { kind: "chapter"; id: string; number: string; label: string; intro?: string }
  | { kind: "statement"; text: string; eyebrow?: string }
  | { kind: "lead"; text: string }
  | { kind: "methods"; items: { label: string; line: string }[] }
  | { kind: "quote"; text: string; source: string }
  | { kind: "numberedList"; title?: string; intro?: string; items: { title: string; body: string }[] }
  | { kind: "archetypes"; items: { number: string; name: string; role: string; line: string; quote: string }[] }
  | { kind: "image"; src: string; caption?: string; fullWidth?: boolean; maxWidth?: "md" | "lg" | "full" }
  | { kind: "featureGrid"; intro?: string; items: { title: string; line: string; thumb: string }[] }
  | { kind: "featureRow"; image: string; eyebrow?: string; title: string; body: string }
  | { kind: "stat"; value: string; label: string; bullets?: string[]; href?: string };

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
  heroImage?: string;
  liveUrl?: string;
  metrics?: Metric[];
  slides?: Slide[];
  blocks?: Block[];
  overview?: Overview;
  reflection?: string;
  toolkit?: string[];
  /** Optional per-study color theme. Values are HSL triplets ("H S% L%") that override
   *  semantic Tailwind tokens (--background, --foreground, etc.) for the detail page only. */
  theme?: {
    background: string;
    foreground: string;
    mutedForeground: string;
    border: string;
    card: string;
    primary: string;
  };
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
    coverImage: "/images/jointly/cover.png",
    heroImage: "/images/jointly/hero.png",
    liveUrl: "https://planjointly.com",
    overview: {
      context: "Master's thesis at Northwestern's EDI program. Nine months, solo founder.",
      roleDetail: [
        "End-to-end product strategy and research across 60+ users and 21 interviews",
        "UX and visual design across 40+ screens",
        "Built and launched the live product at planjointly.com",
      ],
      outcome: "Live in beta. 40+ signups during the initial testing period without paid acquisition.",
    },
    reflection:
      "Group decisions aren't a planning problem — they're a social one. The most useful thing the product does is take the awkward conversations off the group's plate.",
    blocks: [
      {
        kind: "statement",
        eyebrow: "The premise",
        text: "Group trips are supposed to bring people together, but the planning process can be frustrating.",
      },

      { kind: "chapter", id: "the-research", number: "01", label: "The Research", intro: "I went looking for what actually happens between inspiration and booking — and why the people who care most end up resenting it." },
      { kind: "image", src: "/images/jointly/4.png", fullWidth: true, caption: "Three research tracks: 21 interviews, market scan, and 60k+ Reddit views." },
      { kind: "image", src: "/images/jointly/3.png", fullWidth: true, caption: "One Reddit thread surfaced what people won't say to friends." },
      { kind: "image", src: "/images/jointly/7.png", fullWidth: true, caption: "Three frustrations showed up in every conversation." },

      { kind: "chapter", id: "the-users", number: "02", label: "The Users", intro: "Three behavioral archetypes ran through every group I studied. Designing for all three at once was the real challenge." },
      { kind: "image", src: "/images/jointly/9.png", fullWidth: true, caption: "Three archetypes. Same trip, three very different burdens." },

      { kind: "chapter", id: "the-opportunity", number: "03", label: "The Opportunity" },
      { kind: "lead", text: "Every existing tool is built for one person, or built without intelligence. No product is both group-native and smart." },
      { kind: "image", src: "/images/jointly/10.png", fullWidth: true, caption: "Jointly sits in the smart + group-native quadrant." },

      { kind: "chapter", id: "the-product", number: "04", label: "The Product" },
      { kind: "statement", text: "Jointly. — the collaborative decision-making layer between inspiration and booking." },
      { kind: "image", src: "/images/jointly/27.png", fullWidth: true, caption: "Four features that turn group chaos into a plan." },
      { kind: "image", src: "/images/jointly/12.png", fullWidth: true, caption: "Trip creation: destination, interests, budget priority. Two steps." },
      { kind: "image", src: "/images/jointly/14.png", fullWidth: true, caption: "Capture ideas in natural language." },
      { kind: "image", src: "/images/jointly/18.png", fullWidth: true, caption: "Curated itinerary, generated from the group's voted ideas." },
      { kind: "image", src: "/images/jointly/19.png", fullWidth: true, caption: "Smart budgeting handles the awkward money conversation." },

      { kind: "chapter", id: "early-signal", number: "05", label: "Early Signal", intro: "Built, launched, and learning in public." },
      {
        kind: "stat",
        value: "40+",
        label: "signups during initial testing",
        bullets: [
          "No paid acquisition — landing page only",
          "Value lands immediately: people get what it is in one read",
          "Suggestions and budget flexibility are the most-cited reasons",
        ],
        href: "https://planjointly.com",
      },
    ],
    slides: [
      { image: "/images/jointly/1.png", fullWidth: true },
      { image: "/images/jointly/2.png", fullWidth: true },
      {
        sectionLabel: "The Research",
        sectionIntro:
          "Before designing anything, I went looking for the real friction. The signal was loud — and consistent across every source.",
        image: "/images/jointly/3.png",
        caption: "60k+ views on a single Reddit thread surfaced unfiltered user frustration with group travel planning.",
      },
      { image: "/images/jointly/4.png", caption: "User interviews, secondary research, and community listening across travel communities." },
      { image: "/images/jointly/7.png", caption: "Three core frustrations emerged consistently across every research source." },
      {
        sectionLabel: "The Users",
        sectionIntro:
          "Three behavioral archetypes ran through every group I studied. Designing for all three at once was the real challenge.",
        image: "/images/jointly/9.png",
        caption: "The Planner, The Support, and The Easy-Goer — each with different needs, motivations, and breaking points.",
      },
      {
        sectionLabel: "The Opportunity",
        sectionIntro:
          "Mapping the competitive landscape made the gap obvious.",
        image: "/images/jointly/10.png",
        caption: "Every existing tool is either built for one person, or built without intelligence. No product is both group-native and smart.",
      },
      {
        sectionLabel: "The Product",
        sectionIntro:
          "Jointly absorbs the social friction of coordination so the group can focus on the trip, not the logistics.",
        image: "/images/jointly/11.png",
        caption: "Jointly. — the collaborative decision-making layer between inspiration and booking.",
        fullWidth: true,
      },
      { image: "/images/jointly/27.png", caption: "Four features that turn group chaos into a plan everyone's excited about." },
      { image: "/images/jointly/12.png", caption: "Trip creation: set a destination, select interests, and indicate budget priority in two steps." },
      { image: "/images/jointly/14.png", caption: "Describe your idea in natural language — Jointly makes sense of it and surfaces structured suggestions." },
      { image: "/images/jointly/18.png", caption: "Curated itinerary and map view, generated from the group's voted ideas." },
      { image: "/images/jointly/19.png", caption: "Smart budgeting prevents awkward conversations — the tool handles the social dynamics, not the users." },
      {
        sectionLabel: "Early Signal",
        sectionIntro:
          "Built, launched, and learning in public.",
        image: "/images/jointly/21.png",
        caption: "40+ early signups during initial testing at planjointly.com — no paid acquisition, just the right message.",
      },
      { image: "/images/jointly/22.png", fullWidth: true },
    ],
  },
  {
    slug: "airy",
    title: "Airy",
    subtitle: "A smart tool for clinical therapists.",
    role: "Designer · Product Manager",
    year: "2025",
    context: "Interaction Design Studio Course · Northwestern University",
    tags: ["Healthcare", "Interaction Design", "Product Strategy"],
    summary:
      "Airy is a digital platform designed to help clinical therapists better support their clients — with AI-powered note-taking, between-session check-ins, nudges, and progress tracking. Over 10 weeks and 21 user interviews, our team uncovered a core tension: therapy tools are built for sessions, not the 167 hours in between. I led product strategy, conducted research, designed high-fidelity prototypes, and authored the BRD.",
    featured: true,
    coverImage: "/images/airy/cover.png",
    heroImage: "/images/airy/hero.png",
    theme: {
      background: "36 31% 94%",
      foreground: "253 26% 14%",
      mutedForeground: "260 8% 43%",
      border: "38 22% 85%",
      card: "36 28% 90%",
      primary: "255 30% 55%",
    },
    slides: [
      { image: "/images/airy/40.png", caption: "10 weeks of research, 3 rounds and 21 sessions of user interviews." },
      { image: "/images/airy/41.png", caption: "52.9M Americans are in therapy — and 55% moved online post-pandemic. The market is growing fast, but the tools haven't kept up." },
      {
        sectionLabel: "The Problem",
        sectionIntro:
          "Therapy tools are built for sessions — but real change happens in the 167 hours between them.",
        image: "/images/airy/43.png",
        caption: "Current tools are narrow, limiting, time-consuming, and built for a single user — not the therapist-client relationship.",
      },
      { image: "/images/airy/44.png", caption: "Therapists drown in manual notes and can't track progress. Clients feel therapy ends when the session does." },
      {
        sectionLabel: "The Solution",
        sectionIntro:
          "One platform that supports the therapist's workflow and keeps the client engaged between sessions.",
        image: "/images/airy/46.png",
        caption: "Airy: a unified platform built around Notes & Trends, Client Engagement, and Trust & Security.",
      },
      {
        sectionLabel: "The Product",
        sectionIntro:
          "What we built: a therapist dashboard, AI-assisted notes, client check-ins, nudges, and shared progress tracking.",
        image: "/images/airy/47.png",
        caption: "The therapist dashboard — a daily overview of client schedule, alerts, and pending tasks in one place.",
      },
      { image: "/images/airy/48.png", caption: "AI-generated SOAP notes cut documentation time. One note takes 30 minutes — across 20 clients a week, that adds up fast." },
      { image: "/images/airy/49.png", caption: "AI Notes: all-session summaries, pattern detection, and treatment plan tracking — without the manual review." },
      { image: "/images/airy/51.png", caption: "Check-ins surface client journal entries between sessions, with AI-detected emotional themes flagged for the therapist." },
      { image: "/images/airy/54.png", caption: "The client Nudges view: daily affirmations, journal prompts, and mini-sessions that keep progress alive between appointments." },
      { image: "/images/airy/57.png", caption: "Progress tracking: therapist and client views of the same data, with AI highlight summaries sent directly to clients." },
      {
        sectionLabel: "Validation",
        sectionIntro:
          "We tested with therapists and clients actively in online therapy. The value landed.",
        image: "/images/airy/59.png",
        caption: "Real feedback from therapists and clients after testing — the value landed.",
      },
      {
        sectionLabel: "Process & Artifacts",
        sectionIntro:
          "How we got here: research, usability testing, and a full design handoff.",
        image: "/images/airy/53.png",
        caption: "Usability testing through Dscout with 4 participants actively in online therapy — real-world feedback, not assumptions.",
      },
      { image: "/images/airy/61.png", caption: "Full design handoff: annotated prototypes, functional requirements, BRD, and a Figma prototype." },
    ],
  },
  {
    slug: "nectar-ai",
    title: "Nectar.ai",
    subtitle: "AI-powered customer support for e-commerce.",
    role: "Product Manager · Software Developer",
    year: "2023",
    context: "One of the products I lead during my time at NectarOM",
    tags: ["AI", "E-Commerce", "Conversational UI"],
    summary:
      "A small business selling wellness products needed to overhaul their underperforming customer support chatbot. I researched a year of historical support conversations, designed the conversation flows, and built a GPT-powered chatbot that guides customers from landing page through checkout.",
    featured: true,
    coverImage: "/images/u6qotkxyhcppqyywjql0qfrlnq.webp",
    toolkit: ["Python", "Node.js", "APIs", "OpenAI", "Shopify", "Mailchimp"],
    metrics: [
      { value: "+99%", label: "Response Rate", sublabel: "% of customer chats answered" },
      { value: "+30%", label: "Add-to-Cart Rate", sublabel: "% of sessions that added to cart" },
      { value: "+18%", label: "Checkout Rate", sublabel: "% of sessions that checked out" },
    ],
    slides: [
      { image: "/images/nectar-ai/27.png" },
      {
        sectionLabel: "The Problem",
        image: "/images/nectar-ai/28.png",
        caption: "The existing chatbot couldn't handle real customer questions — flooding the owner's inbox and leaving customers frustrated.",
      },
      { image: "/images/nectar-ai/29.png", caption: "Before: robotic pre-set responses that forwarded everything to email instead of answering product questions." },
      {
        sectionLabel: "My Role",
        image: "/images/nectar-ai/30.png",
      },
      {
        sectionLabel: "The Process",
        image: "/images/nectar-ai/31.png",
        caption: "Research → Prototyping → Validation → Pivot. The process wasn't linear — an early fine-tuning approach failed and required a full rethink.",
      },
      {
        image: "/images/nectar-ai/32.png",
        caption: "The initial GPT-3 fine-tuning approach failed on three fronts: invalid links, hallucinations, and inconsistent responses.",
      },
      {
        sectionLabel: "The Architecture",
        image: "/images/nectar-ai/33.png",
        caption: "Final system: GPT-3 embeddings + Google Dialogflow front-end + Shopify/MailChimp for customer data persistence.",
      },
      {
        sectionLabel: "The Result",
        image: "/images/nectar-ai/34.png",
        caption: "The chatbot guides customers through support, captures their name, email, and interests, and funnels that enriched data into Shopify and MailChimp for marketing.",
      },
    ],
  },
];
