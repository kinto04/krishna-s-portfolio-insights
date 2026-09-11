import northwesternMedicineCover from "@/assets/northwestern-medicine-cover.png.asset.json";

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

/** Scannable project facts rendered as the "At a glance" band on the detail page. */
export interface Facts {
  timeline: string;
  timelineNote?: string;
  team: string;
  role: string;
  setting: string;
  platform?: string;
}


// Narrative blocks — composable units that mix native typography and selective imagery.
// When a CaseStudy provides `blocks`, WorkDetail renders blocks instead of slides.
export type Block =
  | { kind: "chapter"; id: string; number: string; label: string; intro?: string; tone?: "light" | "dark" }
  | { kind: "statement"; text: string; eyebrow?: string }
  | { kind: "lead"; text: string }
  | { kind: "methods"; items: { label: string; line: string }[] }
  | { kind: "quote"; text: string; source: string }
  | { kind: "numberedList"; title?: string; intro?: string; items: { title: string; body: string }[] }
  | {
      kind: "archetypes";
      items: {
        number: string;
        name: string;
        role: string;
        line: string;
        quote: string;
        avatar?: string;
        source?: string;
        accent?: boolean;
      }[];
    }
  | { kind: "image"; src: string; caption?: string; fullWidth?: boolean; maxWidth?: "md" | "lg" | "full" }
  | { kind: "featureGrid"; intro?: string; items: { title: string; line: string; thumb: string }[] }
  | { kind: "featureRow"; image: string; eyebrow?: string; title: string; body: string }
  | { kind: "stat"; value: string; label: string; bullets?: string[]; href?: string }
  | { kind: "researchTracks"; items: { icon: "users" | "book" | "globe"; title: string; line: string; badge?: string; highlight?: boolean }[] };

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
  imageFit?: "cover" | "contain";
  liveUrl?: string;
  metrics?: Metric[];
  slides?: Slide[];
  blocks?: Block[];
  overview?: Overview;
  facts?: Facts;

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
  /** Marks a study that is still in progress and not fully public. */
  inProgress?: boolean;
  /** Email address visitors can copy to request the full deck. */
  deckEmail?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "jointly-travel",
    title: "Jointly.",
    subtitle: "Group travel planning, made easy.",
    role: "Founder and designer",
    year: "2025–2026",
    context: "Master's Thesis · Northwestern University",
    tags: ["AI", "Experience Design", "Interaction Design"],
    summary:
      "Group trips are supposed to bring people together, but planning often creates decision fatigue and social friction. Jointly is an AI travel app that helps friend groups move from scattered ideas to a plan everyone can shape together.",
    featured: true,
    coverImage: "/images/jointly/cover.png",
    heroImage: "/images/jointly/hero.png",
    liveUrl: "https://planjointly.com",
    facts: {
      timeline: "Two quarters",
      timelineNote: "September 2025–March 2026",
      team: "Independent thesis project",
      role: "Founder and Designer",
      setting: "Master's thesis · Northwestern EDI",
    },
    reflection:
      "Meeting the functional needs of the group was bare minimum - but the most important piece to design for was the emotional and social needs of the group. The most useful thing the product does is take the awkward conversations off the group's plate - giving them a great starting point to take the trip forward.",
    blocks: [
      {
        kind: "statement",
        eyebrow: "The premise",
        text: "Group trips are supposed to bring people together, but the planning process can be frustrating.",
      },

      { kind: "chapter", id: "the-research", number: "01", label: "Understanding the problem", tone: "light", intro: "I looked beyond stated preferences to understand what actually happens between inspiration and booking—and why the people who care most often end up carrying the group." },
      {
        kind: "researchTracks",
        items: [
          { icon: "users", title: "User interviews", line: "Deep-dives with lead planners, contributors, and easy-going members." },
          { icon: "book", title: "Secondary & market research", line: "Group dynamics, travel behavior, and the competitive landscape." },
          { icon: "globe", title: "Travel community", line: "Unfiltered experiences from the travel community.", badge: "60k+ views · 50+ responses", highlight: true },
        ],
      },
      { kind: "image", src: "/images/jointly/3.png", fullWidth: true, caption: "Online community outreach surfaced candid frustrations people rarely say directly to friends." },
      { kind: "image", src: "/images/jointly/7.png", fullWidth: true, caption: "The same three sources of friction repeated across the research." },

      { kind: "chapter", id: "the-users", number: "02", label: "From evidence to behavior", tone: "light", intro: "I translated the research into journey maps and three behavioral archetypes. The opportunity was not to optimize for one traveler, but to balance three very different levels of effort and agency." },
      {
        kind: "archetypes",
        items: [
          {
            number: "01",
            name: "Patrick",
            role: "Planner",
            line: "Initiates everything, absorbs all coordination cost & social risk. Most likely to burn out.",
            quote: "I end up planning the whole thing, and somehow I'm still the one who gets blamed if something goes wrong.",
            avatar: "/images/jointly/archetype-1.jpg",
            source: "Patrick · Jointly research",
            accent: true,
          },
          {
            number: "02",
            name: "Sam",
            role: "Supportive",
            line: "Willing to contribute but has no clear role. Wants to help but no structure to plug into.",
            quote: "I'd love to help more but I don't want to step on anyone's toes — I'm never sure what's been decided.",
            avatar: "/images/jointly/archetype-2.jpg",
            source: "Sam · Jointly research",
          },
          {
            number: "03",
            name: "Emma",
            role: "Easy-going*",
            line: "Flexible, doesn't engage in the planning process. Can become a problem at the end.",
            quote: "I'm honestly fine with anything — just tell me where to be and when.",
            avatar: "/images/jointly/archetype-3.jpg",
            source: "Emma · Jointly research",
          },
        ],
      },

      { kind: "chapter", id: "the-opportunity", number: "03", label: "Defining the opportunity", tone: "light" },
      { kind: "lead", text: "Every existing tool is built for one person, or built without intelligence. No product is both group-native and smart." },
      { kind: "image", src: "/images/jointly/competitive-matrix.png", fullWidth: true, caption: "Jointly sits in the smart + group-native quadrant." },

      { kind: "chapter", id: "the-product", number: "04", label: "Designing and building the product", tone: "dark", intro: "I used AI-assisted design and development to move from research to a coherent brand, reusable design system, and functioning product—without separating design decisions from implementation." },
      { kind: "image", src: "/images/jointly/27.png", fullWidth: true, caption: "Four features that turn group chaos into a plan." },
      { kind: "image", src: "/images/jointly/12.png", fullWidth: true, caption: "Trip creation: destination, interests, budget priority." },
      { kind: "image", src: "/images/jointly/14.png", fullWidth: true },
      { kind: "image", src: "/images/jointly/18.png", fullWidth: true },
      { kind: "image", src: "/images/jointly/19.png", fullWidth: true },

      { kind: "chapter", id: "early-signal", number: "05", label: "Shipping and learning", tone: "dark", intro: "I shipped the beta to 40+ users, then built an automated weekly feedback loop to turn product behavior into focused design priorities." },
      {
        kind: "stat",
        value: "40+",
        label: "beta users",
        bullets: [
          "Tracked activation, engagement, and retention",
          "Automated the collection of recurring behavioral patterns",
          "Turned those signals into prioritized recommendations each week",
        ],
        href: "https://planjointly.com",
      },
    ],
    theme: {
      background: "40 20% 96%",
      foreground: "30 15% 9%",
      mutedForeground: "28 8% 38%",
      border: "28 12% 82%",
      card: "40 18% 98%",
      primary: "20 76% 55%",
    },
  },
  {
    slug: "huelo",
    title: "Huelo",
    subtitle: "AI-powered interior design and shopping for urban renters.",
    role: "Founding UX Designer & AI Engineer",
    year: "2026",
    context: "Ongoing",
    tags: ["AI", "Experience Design", "Product Design"],
    summary:
      "Huelo is a web-based AI interior-design app for urban renters that turns inspiration and budget constraints into a personalized room plan. As a founding designer and AI engineer, I'm shaping the product experience, the design flow, and the agent architecture that makes a custom design feel effortless.",
    featured: false,
    coverImage: "/images/huelo/cover.png",
    heroImage: "/images/huelo/hero.png",
    liveUrl: "https://huelo.co/",
    inProgress: true,
    deckEmail: "work.krishnasuresh@gmail.com",
    facts: {
      timeline: "Ongoing",
      team: "Founding team",
      role: "Founding UX Designer & AI Engineer",
      setting: "New York",
      platform: "Web app",
    },
    toolkit: ["Figma", "Lovable", "OpenAI"],
    overview: {
      context:
        "Urban renters want designed spaces but can't renovate, can't visualize changes, and get stuck between inspiration and purchase. Huelo uses AI to generate personalized room plans from a photo, a few preferences, and a real budget.",
      roleDetail: [
        "End-to-end product design and UX for the design-to-purchase experience",
        "AI agent architecture: prompts, parsing, retrieval, and evaluation pipelines",
        "Front-end build and iteration on the live product",
      ],
      outcome:
        "Live landing page at huelo.co. Full product case study is in progress — deck available on request.",
    },
    blocks: [
      {
        kind: "chapter",
        id: "challenge",
        number: "01",
        label: "The Challenge",
        intro: "Renters want great spaces, but the path from inspiration to reality is full of friction.",
      },
      {
        kind: "numberedList",
        items: [
          {
            title: "Can't renovate",
            body: "Walls, floors, and fixtures are fixed. The design has to work within constraints renters don't control.",
          },
          {
            title: "Hard to visualize",
            body: "It's difficult to imagine how a piece, a color, or a layout will look in an actual room.",
          },
          {
            title: "Decision paralysis",
            body: "Endless options across retailers make it hard to commit to a cohesive look.",
          },
          {
            title: "Inspiration to purchase gap",
            body: "A saved photo doesn't translate into a shopping list that fits a real floor plan and budget.",
          },
        ],
      },
      {
        kind: "chapter",
        id: "design-approach",
        number: "02",
        label: "Design Approach",
        intro: "The experience is built around one goal: turn a few inputs into a design the user can trust and buy.",
      },
      {
        kind: "numberedList",
        items: [
          {
            title: "Start with the room",
            body: "Upload a photo, answer a few questions, and let the system handle sizing, sourcing, and styling.",
          },
          {
            title: "Blend existing and new",
            body: "Users can keep pieces they already own and see how new items complete the look.",
          },
          {
            title: "Budget as a filter",
            body: "Every recommendation is anchored to a real budget, so the design stays shoppable.",
          },
          {
            title: "One place for decisions",
            body: "A unified board saves furniture, compares options, and tracks price drops.",
          },
        ],
      },
      {
        kind: "chapter",
        id: "ai-experience",
        number: "03",
        label: "Where AI Powers the Design Experience",
        intro: "AI isn't the feature — it's the infrastructure that makes personalized design scalable.",
      },
      {
        kind: "numberedList",
        items: [
          {
            title: "Vision + language understanding",
            body: "The agent reads room photos, inspiration images, and natural-language preferences together.",
          },
          {
            title: "Structured product retrieval",
            body: "Recommendations are pulled from a curated catalog and matched to dimensions, style, and price.",
          },
          {
            title: "Spatial preview",
            body: "Generated previews help users see the design in their actual space before buying.",
          },
          {
            title: "Continuous evaluation",
            body: "We run evals on output quality, relevance, and coherence to keep the AI honest as the catalog grows.",
          },
        ],
      },
      {
        kind: "image",
        src: "/images/huelo/hero.png",
        caption: "The Huelo landing page at huelo.co — an AI interior designer built for real rooms, real budgets, and real life.",
        fullWidth: true,
      },
      {
        kind: "chapter",
        id: "reflection",
        number: "04",
        label: "Reflection",
      },
      {
        kind: "statement",
        text: "Building an AI-native design tool has sharpened my thesis: the best AI products don't replace the designer — they remove the tedious parts so humans can make confident decisions.",
      },
    ],
    reflection:
      "Huelo sits at the intersection of two things I care about: design craft and AI systems. The hard problem isn't generating a pretty room — it's generating one the user believes will work in their actual home, with their actual constraints, and then helping them buy it without second-guessing every choice.",
  },
  {
    slug: "airy",
    title: "Airy",
    subtitle: "A smart tool for clinical therapists.",
    role: "Designer · Product Manager",
    year: "2025",
    context: "Interaction Design Studio Course · Northwestern University",
    tags: ["AI", "Experience Design", "Interaction Design"],
    facts: {
      timeline: "10 weeks",
      timelineNote: "2025",
      team: "Team of 6",
      role: "Product strategy, research, hi-fi prototyping, BRD",
      setting: "Interaction Design Studio · Northwestern",
      platform: "Web + Mobile",
    },
    toolkit: ["Figma", "Dscout"],
    summary:
      "Airy is a digital platform designed to help clinical therapists better support their clients - with AI-powered note-taking, between-session check-ins, nudges, and progress tracking. Our research surfaced a core tension: therapy tools are built for sessions, not the 167 hours in between. I led product strategy, conducted research, designed high-fidelity prototypes, and authored the BRD.",

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
          "Most current tools are built for sessions - but real change happens in the hours between them.",
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
      { image: "/images/airy/48.png", caption: "AI-generated SOAP notes cut documentation time. One note takes 30 minutes -this adds up fast across 20 clients every week." },
      { image: "/images/airy/49.png", caption: "AI Notes: all-session summaries, pattern detection, and treatment plan tracking without the manual review." },
      { image: "/images/airy/51.png", caption: "Check-ins surface client journal entries between sessions, with AI-detected emotional themes flagged for the therapist." },
      { image: "/images/airy/54.png", caption: "The client Nudges view: daily affirmations, journal prompts, and mini-sessions that keep progress alive between appointments." },
      { image: "/images/airy/57.png", caption: "Progress tracking: therapist and client views of the same data, with AI highlight summaries sent directly to clients." },
      {
        sectionLabel: "Validation",
        sectionIntro:
          "We tested with therapists and clients actively in online therapy. The value landed.",
        image: "/images/airy/59.png",
        caption: "Real feedback from therapists and clients after testing.",
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
    slug: "northwestern-medicine",
    title: "Leading Digital Innovation in Healthcare Research",
    subtitle: "Research and design for a pediatric gut-brain diagnosis tool.",
    role: "Design Lead · Product Manager",
    year: "2025",
    context: "Northwestern Feinberg School of Medicine",
    tags: ["Experience Design", "Research", "Healthcare"],
    summary:
      "Going into an existing research project at Northwestern Feinberg School of Medicine, I was tasked with owning research and design for a new digital product aimed at supporting diagnosis and treatment of pediatric patients with disorders of gut-brain interaction.",
    featured: false,
    coverImage: northwesternMedicineCover.url,
    heroImage: northwesternMedicineCover.url,
    imageFit: "contain",
    facts: {
      timeline: "2025",
      team: "Sole designer and PM inside an existing research project",
      role: "Stakeholder research, feature prioritization, design prototyping",
      setting: "Northwestern Feinberg School of Medicine",
      platform: "Clinician-facing web tool",
    },
    toolkit: ["Figma", "Miro", "Lovable", "Google Sheets"],
    overview: {
      context:
        "An existing clinical research effort needed a product direction — and someone to own the research and design behind it.",
      roleDetail: [
        "Stakeholder research with doctors, nurses and clinic staff",
        "Feature prioritization and design requirements for the MVP",
        "Initial prototypes to validate the design hypothesis",
      ],
      outcome:
        "A validated problem space, a service blueprint of the current care process, and clinician-tested prototypes guiding future iterations.",
    },
    metrics: [
      { value: "9", label: "Focus Group Participants", sublabel: "Across 2 sessions" },
      { value: "1", label: "In-Context Observation", sublabel: "In clinic" },
      { value: "4", label: "User Interviews", sublabel: "With clinicians" },
    ],
    blocks: [
      {
        kind: "chapter",
        id: "goal",
        number: "01",
        label: "Project goal",
      },
      {
        kind: "statement",
        eyebrow: "The goal",
        text:
          "Make it easier for clinicians to diagnose and treat pediatric patients with potential Disorders of Gut-Brain Interaction (DGBI).",
      },
      {
        kind: "chapter",
        id: "my-role",
        number: "02",
        label: "My role",
        intro: "Three responsibilities I owned end to end inside the research team.",
      },
      {
        kind: "methods",
        items: [
          {
            label: "Stakeholder Research",
            line: "Uncover needs, pains and motivations for primary stakeholders in the system.",
          },
          {
            label: "Feature Prioritization",
            line: "Prioritize the most valuable features and define design requirements for the MVP.",
          },
          {
            label: "Design Prototyping",
            line: "Design initial prototypes to validate our design hypothesis and guide future iterations.",
          },
        ],
      },
      {
        kind: "chapter",
        id: "approach",
        number: "03",
        label: "Approach",
        intro: "A five-step ladder from raw user needs to a solution that was desirable, viable and feasible.",
      },
      {
        kind: "numberedList",
        items: [
          {
            title: "User Research",
            body: "Conducting interviews and journey mapping to understand user needs.",
          },
          {
            title: "Need Validation",
            body: "Identifying and validating true user needs, removing assumptions.",
          },
          {
            title: "Concept Wireframes",
            body: "Creating wireframes to test hypotheses on user needs.",
          },
          {
            title: "Prototype Development",
            body: "Developing data-informed prototypes and iterating based on feedback.",
          },
          {
            title: "Desirability-Viability-Feasibility",
            body: "Applying the framework to ensure the solution is right and feasible.",
          },
        ],
      },
      {
        kind: "chapter",
        id: "design-process",
        number: "04",
        label: "Design process",
        intro: "Over the course of the internship, I led design research efforts in the following ways.",
      },
      {
        kind: "lead",
        text:
          "Our first focus group was with doctors. The goal was to deeply understand the current care process, and uncover the most pressing frustrations and needs for doctors in the pediatric GI space.",
      },
      {
        kind: "lead",
        text:
          "Our second focus group was with nurses — understanding their role in the process, their needs, priorities and motivations.",
      },
      {
        kind: "chapter",
        id: "deliverables",
        number: "05",
        label: "Deliverables",
      },
      {
        kind: "numberedList",
        items: [
          {
            title: "Service Blueprint",
            body: "A visual representation of the current system and service, with areas of friction and design interventions highlighted.",
          },
          {
            title: "Research Prototypes",
            body: "Initial clinician prototypes designed based on stakeholder needs uncovered through research.",
          },
          {
            title: "Other Design Artifacts",
            body: "Design requirements, stakeholder profiles, and Jobs to Be Done for each primary stakeholder.",
          },
        ],
      },
      {
        kind: "chapter",
        id: "challenges",
        number: "06",
        label: "Challenges and mitigation",
      },
      {
        kind: "numberedList",
        items: [
          {
            title: "Access to clinicians",
            body: "Time and access constraints scheduling interviews and focus groups with nurses and doctors at the hospital. Solution: conducted research on the fly and prepared multiple versions of research guides to adapt to whoever was available.",
          },
          {
            title: "Time and budget constraints",
            body: "Academic research in healthcare with strict funding and a small team (sole designer and PM). Solution: maximized research opportunities and operated within policy guidelines from both healthcare and funding perspectives.",
          },
          {
            title: "A new problem space",
            body: "Effort required to understand clinical jargon and the healthcare system in general. Solution: proactively became a subject matter expert and leveraged newcomer status to ask clarifying questions that built a strong foundation.",
          },
        ],
      },
    ],
    reflection:
      "Research in a clinical setting runs on other people's calendars. The skill wasn't running the perfect study — it was staying prepared enough to learn something real from whatever fifteen minutes I could get, and turning newcomer questions into a shared understanding of the problem.",
  },
  {
    slug: "nectar-ai",
    title: "Nectar.ai",
    subtitle: "AI-powered customer support for e-commerce.",
    role: "Product Manager · Software Developer",
    year: "2023",
    context: "One of the products I lead during my time at NectarOM",
    tags: ["AI", "Experience Design", "Conversational UI"],
    summary:
      "A small business selling wellness products needed to overhaul their underperforming customer support chatbot. I researched a year of historical support conversations, designed the conversation flows, and built a GPT-powered chatbot that guides customers from landing page through checkout.",
    featured: true,
    coverImage: "/images/u6qotkxyhcppqyywjql0qfrlnq.webp",
    facts: {
      timeline: "~3 months",
      timelineNote: "2023, alongside other client work",
      team: "Sole designer and developer, with the CEO and clients",
      role: "Product management and development",
      setting: "NectarOM · Client product",
      platform: "Web · Shopify storefront",
    },
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
