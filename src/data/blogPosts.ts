export type StoryBlock =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "photo"; src: string; alt: string; caption?: string; title?: string }
  | { type: "photoGrid"; photos: { src: string; alt: string; caption?: string }[] }
  | { type: "video"; youtubeId: string; caption?: string };

export interface BlogPost {
slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: "Photography" | "Deep Dives" | "Essays";
  tags: string[];
  excerpt: string;
  cover?: string;
  coverAlt?: string;
  blocks: StoryBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "scenes-from-varanasi",
    title: "Scenes from Varanasi",
    date: "2024-06-10",
    category: "Photography",
    tags: ["Photography", "Travel", "Film"],
    excerpt:
      "A short film and a photo series from one of the world's oldest living cities — narrow alleys, flower markets, and the ghats along the Ganga.",
    cover: "/images/varanasi/cover.jpg",
    coverAlt: "A woman in a red sari sitting on a stone ledge in a narrow street in Varanasi",
    blocks: [
{
        type: "video",
        youtubeId: "dttAlyMmKaI",
        caption: "Scenes from Varanasi — a short film I shot and edited on the trip.",
      },
      {
        type: "lead",
        text: "Stepping into Varanasi was like entering a living, breathing time capsule. As one of the world's oldest continuously inhabited cities, its narrow alleys and ghats along the Ganga River tell stories spanning millennia. Through my lens and a short film, I aimed to capture the essence of this extraordinary place.",
      },
      { type: "heading", text: "Ancient Whispers in Every Corner" },
      {
        type: "paragraph",
        text: "Varanasi's rich cultural history is evident in every corner of the city. Temples seem to sprout from every nook and cranny, their intricate carvings telling tales of gods and mortals alike. What fascinated me most was learning about the clever architectural tricks employed by ancient kings. Many temples were built discreetly, tucked away in narrow alleys and surrounded by ordinary houses — a strategy to protect these sacred spaces from potential invaders.",
      },
      {
        type: "photoGrid",
        photos: [
          { src: "/images/varanasi/alley-morning.jpg", alt: "A quiet narrow alley in Varanasi in the early morning" },
          { src: "/images/varanasi/alley-gate.jpg", alt: "A gated passageway between old buildings in Varanasi" },
          { src: "/images/varanasi/alley-taxi.jpg", alt: "A woman carrying bowls through a busy alley past a taxi sign" },
        ],
      },
      {
        type: "photo",
        src: "/images/varanasi/flower-market.jpg",
        alt: "Vendors selling marigold garlands at the flower market in Varanasi",
        title: "The Local Flower Market",
        caption:
          "Vendors pay a fee to sell their flowers in this common marketplace. Their produce is weighed at the start and end of each day, and the organizers collect their fee accordingly.",
      },
      {
        type: "photo",
        src: "/images/varanasi/quiet-afternoon.jpg",
        alt: "Two people resting at the front porch of a shop bathed in warm light",
        title: "A Quiet Afternoon",
        caption: "Two people resting at the front porch of a local shop in Varanasi.",
      },
      {
        type: "photo",
        src: "/images/varanasi/aam-papad.jpg",
        alt: "Flattened mango pulp arranged on a steel plate at a street stall",
        title: "An Indian Delicacy: Aam Papad",
        caption: "A vendor selling flattened mango pulp in the streets of Varanasi.",
      },
      {
        type: "photo",
        src: "/images/varanasi/sugarcane.jpg",
        alt: "Vendors pressing sugarcane juice with a manual wheel on a busy street",
        title: "A Summer Quencher",
        caption: "Vendors making sugarcane juice using a manual wheel.",
      },
      { type: "heading", text: "A Feast for the Senses" },
      {
        type: "paragraph",
        text: "No trip to Varanasi is complete without indulging in its culinary delights. I savored the city's famous street food, from crispy kachori sabzi to the creamy delight of malaiyo. But the true highlight was discovering the legendary Prahlad Prasad Chourasiya Paan shop. As I savored the explosion of flavors in their award-winning paan, I learned of the shop's secret role in India's fight for independence. Right under the noses of British authorities, freedom fighters used this unassuming paan stall to pass covert messages, proving that even the sweetest treats can have a revolutionary edge.",
      },
      { type: "heading", text: "Where Life and Death Intertwine" },
      {
        type: "paragraph",
        text: "Perhaps what resonated with me most about Varanasi was its unique relationship with mortality. Along the ghats, I witnessed the full spectrum of human existence — from joyous religious ceremonies to intense funeral pyres. The burning ghats, where bodies are cremated in full view, are a stark contrast to the West's view on death. In Varanasi, death is not hidden away, but rather embraced and even welcomed as the circle of life.",
      },
      { type: "heading", text: "A City of Contrasts" },
      {
        type: "paragraph",
        text: "From the mesmerizing Ganga Aarti ceremony at dusk to the quiet morning rituals along the river, every moment in this city is an experience that touches your soul. Through my photographs and film, I hope to share a glimpse of this extraordinary city — a place that continues to captivate pilgrims, travelers, and seekers of all kinds, just as it has for thousands of years.",
      },
      {
        type: "photo",
        src: "/images/varanasi/cover.jpg",
        alt: "A woman in a red sari sitting on a stone ledge in a narrow street in Varanasi",
        caption: "One of my favorite frames from the trip — a quiet pause in the middle of the old city.",
      },
    ],
  },
];
