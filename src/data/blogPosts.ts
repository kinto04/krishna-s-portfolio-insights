export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-products-that-actually-work",
    title: "Building AI Products That Actually Work",
    date: "2025-12-15",
    tags: ["AI", "Product"],
    excerpt: "Most AI products fail not because the model is bad, but because the product thinking is lazy. Here's what I've learned shipping AI features that users actually adopt.",
    content: `Most AI products fail not because the model is bad, but because the product thinking is lazy.

I've seen this pattern repeat across companies: a team gets excited about a new model capability, wraps a thin UI around it, and ships it as a "feature." Users try it once, get inconsistent results, and never come back.

## The problem isn't the AI

When I was building Nectar.ai, we could have shipped a generic chatbot that answered everything with varying accuracy. Instead, we spent weeks mapping out which queries had high volume AND high consistency in correct answers. We started narrow and expanded.

The lesson: **scope your AI features to where the model is reliable, not where it's impressive.**

## What actually matters

Three things I've learned matter more than model quality:

1. **Setting user expectations** — If users expect perfection, they'll be disappointed by 95% accuracy. If they expect a helpful draft, they'll love 80% accuracy.

2. **Graceful fallbacks** — Every AI feature needs a clear path to a human or manual alternative. No dead ends.

3. **Feedback loops** — Ship the simplest version, instrument everything, and iterate based on real usage patterns.

## The unsexy work

The best AI PMs I know spend more time on error states, edge cases, and fallback flows than on the happy path. That's the work that separates products people tolerate from products people love.

---

*This is a placeholder post. Replace with your actual writing.*`,
  },
  {
    slug: "why-i-still-shoot-film",
    title: "Why I Still Shoot Film",
    date: "2025-11-03",
    tags: ["Photography"],
    excerpt: "In a world of computational photography and AI-enhanced images, there's something irreplaceable about the constraints of film.",
    content: `In a world of computational photography and AI-enhanced images, there's something irreplaceable about the constraints of film.

I started shooting digital like everyone else. But somewhere along the way, I picked up a used Olympus OM-1 and loaded a roll of Portra 400. That first roll changed how I think about photography.

## Constraints as creativity

When you have 36 frames instead of unlimited storage, every shot matters. You slow down. You think about composition. You wait for the light instead of fixing it in post.

This isn't nostalgia — it's a fundamentally different creative process.

## The patience tax

Film forces patience. You shoot, you wait, you get your scans back, and you see your mistakes with fresh eyes. That delay creates a feedback loop that's slower but deeper than chimping at an LCD screen.

## Digital and film aren't enemies

I still shoot digital for work and certain projects. But film is where I go when I want to think differently about what I'm seeing.

The best camera is the one that makes you see more carefully.

---

*This is a placeholder post. Replace with your actual writing and photos.*`,
  },
  {
    slug: "the-pm-job-search-is-broken",
    title: "The PM Job Search Is Broken",
    date: "2026-01-20",
    tags: ["Product", "Tech"],
    excerpt: "After months of searching for PM roles, here's what I've learned about a process that's fundamentally misaligned for everyone involved.",
    content: `After months of searching for PM roles, here's what I've learned about a process that's fundamentally misaligned for everyone involved.

## The application black hole

I've submitted hundreds of applications. Tailored resumes, thoughtful cover letters, genuine interest in the company. The response rate? Maybe 5%.

This isn't a complaint — it's a system design problem. Companies are drowning in applications and candidates are spraying and praying. Neither side is well-served.

## What I've started doing differently

1. **Going direct** — Cold outreach to hiring managers on LinkedIn with a specific POV on their product. Response rate: ~20%.

2. **Building in public** — This portfolio, these blog posts, my case studies. Showing the work instead of just listing it.

3. **Fit scoring** — Before applying, I score how well my experience maps to the role. Below 70%? I skip it. This sounds obvious but it's hard to do when you're anxious about pipeline.

## What companies could do better

Stop asking for 5+ years of experience for mid-level roles. Read portfolios, not just resumes. And for the love of product, give candidates feedback.

The best hiring processes I've been through felt like collaborative problem-solving. The worst felt like hazing.

---

*This is a placeholder post. Replace with your actual writing.*`,
  },
];
