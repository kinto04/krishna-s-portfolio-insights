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
  coverImage?: string;
  images?: string[];
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
    coverImage: "/images/ydnsfcgdfyybptikhi77i1h9ay.png",
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
    coverImage: "/images/vybyrthkmzby5rgc0wcwhoacmai.webp",
    images: [
      "/images/ofzdqep4rmlejxcwliuca1bbego.webp",
      "/images/u6qotkxyhcppqyywjql0qfrlnq.webp",
      "/images/huba0n8n2agzpzuu7isyiphixw8.png",
      "/images/lkuxpvhoouingadlo1ibstxhdne.png",
      "/images/rylppkwxd162wow0jk1lhhnn624.png",
      "/images/1106yljc7hayst1uqgp78trcm8.png",
    ],
  },
  {
    slug: "jointly-travel",
    title: "Jointly.",
    subtitle: "Group travel made simple — a research-led mobile product",
    role: "Founder, Product Designer & PM (Master's Thesis)",
    tags: ["Experience Design", "Mobile", "AI", "Service Design"],
    duration: "Northwestern — Master's Thesis",
    year: "2025–2026",
    tools: ["Figma", "Lovable", "Supabase", "OpenAI", "Mapbox"],
    overview: "Jointly. absorbs the social friction of group travel — it sends the reminders, aggregates preferences, and turns scattered group chats into a shared itinerary. Designed and built end-to-end as a master's thesis at Northwestern, with a brand system and product strategy developed in lockstep.",
    goal: "Eliminate the coordination tax of group travel — the chasing, the polling, the 'did anyone book the Airbnb?' — by giving groups one warm, opinionated source of truth.",
    responsibilities: [
      "Led generative and evaluative research with frequent group travelers to map the coordination journey and surface the real friction points",
      "Built the Jointly. brand system from scratch — Warm Ink + Terracotta palette, Plus Jakarta Sans / Inter type, and a two-tier color rule that separates structural UI from engagement actions",
      "Designed and shipped the core surfaces — Trip dashboard, Ideas board with voting, Smart Itinerary, Budget split, and AI-powered suggestions",
    ],
    impact: "An editorial, warm product identity translated into a working mobile-first app. The two-tier color system (Warm Ink for structure, Terracotta for engagement) gives every screen a clear action hierarchy. AI-attributed micro-copy ('Jointly suggested…') makes automation feel like a helpful friend, not a bot.",
    process: "Started by journey-mapping past group trips with frequent travelers. The insight: the friction isn't planning — it's the social cost of nagging. I reframed the product as 'a warm friend who's organized the trip before.' Wrote a brand bible first (voice, tone, color, type) so every design decision had a reference point. Prototyped in Figma, then shipped in Lovable with Supabase and OpenAI powering the AI suggestions.",
    challenges: "Challenge: Polling and voting features felt cold and transactional in early tests. Mitigation: redesigned voting as terracotta 'ideas' with warm, conversational copy instead of forms.\n\nChallenge: Users dismissed generic AI suggestions as noise. Mitigation: every AI action is attributed to Jointly. ('Jointly suggested a 6pm dinner') so it reads as a curated recommendation, not a guess.\n\nChallenge: Scope as a solo build. Mitigation: ruthless MVP — Trips, Ideas, Itinerary, Budget. Cut everything else.",
    outcome: "A brand-led product where the design system and product strategy were built together, not in sequence. Validated that warmth and opinion beat neutrality in coordination tools — people want a friend, not a spreadsheet.",
    featured: true,
    coverImage: "/images/b5e5jhjsubr4uyzipwyrnjmywp4.png",
  },
  {
    slug: "northwestern-medicine",
    title: "Northwestern Medicine",
    subtitle: "Leading Digital Innovation in Healthcare Research",
    role: "Design Lead, Product Manager",
    tags: ["Healthcare", "Design", "Clinical Diagnostics"],
    duration: "Northwestern Feinberg School of Medicine",
    year: "2025",
    tools: ["Figma", "Miro", "Lovable", "Google Sheets"],
    overview: "Going into an existing research project at Northwestern Feinberg School of Medicine, I was tasked with owning research and design for a new digital product aimed at supporting diagnosis and treatment of pediatric patients with disorders of gut-brain interaction.",
    goal: "Make it easier for clinicians to diagnose and treat pediatric patients with potential Disorders of Gut-Brain Interaction (DGBI).",
    responsibilities: [
      "Stakeholder Research — Uncover needs, pains and motivation for primary stakeholders in the system",
      "Feature Prioritization — Prioritize the most valuable features & define design requirements for the MVP",
      "Designed initial prototypes to validate our design hypothesis and guide future iterations",
    ],
    impact: "A visual representation of the current system/service, with areas of friction and design interventions highlighted. Initial clinician prototypes designed based on stakeholder needs uncovered through research. Design requirements, stakeholder profiles, and Jobs to Be Done for each primary stakeholder.",
    process: "Led design research efforts including 9 focus group participants, 1 in-context observation, and 4 user interviews. First focus group sessions with Doctors to deeply understand the current care process and uncover the most pressing frustrations. Second focus group with Nurses to understand their role, needs, priorities and motivations.",
    challenges: "Challenge: Time and access constraints scheduling interviews and focus groups with nurses and doctors at the hospital. Mitigation: Conducted research on the fly and prepared multiple versions of research guides to adapt to available participants.\n\nChallenge: Effort required to understand clinical jargon and the healthcare system in general. Mitigation: Proactively became a subject matter expert and leveraged newcomer status to ask clarifying questions that built a strong foundation.",
    outcome: "Learnings: When you are learning the same repeated thing from interviews, stop interviewing and start executing. If things are feeling too scattered, do a 'what we know so far' vs. 'what we need to know to move forward' data dump with the team.",
    featured: false,
    coverImage: "/images/j6g8dxzfacf3uedeafwcupybxu.png",
    images: [
      "/images/36ij3vrtocmuhxqi1fna67ukzi.jpg",
      "/images/eoqvcgeu1l8lzrf4t6e3x5xyty.png",
      "/images/6f0ubhq1r12gvltcyab0a16h79q.png",
      "/images/hodefwyrxmnlxsbbafqnkgdyc0m.png",
      "/images/iokgnks4pxywjtwpoav28patfq.png",
      "/images/qyokwxjpejxttm3j72syocwgm0u.png",
      "/images/4abl4edssgmb0iswb3di1c3edo.png",
      "/images/zaly0bihayvwtz8gewvujhvz1q.png",
      "/images/xxf4nsfaetjcjpmvh050icg1xm.png",
    ],
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
    subtitle: "Reimagining the Future of Airline Travel",
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
