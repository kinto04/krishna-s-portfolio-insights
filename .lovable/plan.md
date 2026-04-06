

# Update Portfolio with Framer Site Content

## What's changing

The Framer portfolio screenshots reveal real content, copy, and metrics that should replace placeholder text in the current build. The design stays as-is (warm minimal, top nav). Only **content and copy** updates.

## Changes

### 1. Home Page Hero Copy (`src/pages/Home.tsx`)
Update hero to match Framer copy:
- Heading: "Hey, I'm Krishna." + "A 0-1 Product Manager"
- Subtext: "I transform ideas into Market-Ready Solutions by bridging Strategy, Design, and Development to create products people love and use"
- Add two CTA buttons: "View My Work" (link to /work) and "About Me" (link to /about)
- Section title: "Selected Projects" instead of "Featured Work", with "All Projects" link

### 2. Nectar.ai Case Study Content (`src/data/caseStudies.ts`)
Replace placeholders with real content from the Framer site:
- **Title**: "AI Powered Customer Support for E-Commerce" (as subtitle)
- **Role**: "Product Manager, Software Developer"
- **Year**: "2023"
- **Tools**: `["Python", "Node.JS", "OpenAI API", "Excel"]`
- **Overview/Impact**: "Designed, developed, and launched Nectar.ai - an AI-powered chatbot that automated customer support from landing page to checkout. By analyzing months of historical chat data, I built conversation flows that reduced unanswered customer chats by 99% and boosted conversion rates (add-to-cart +30%, checkout +18%)."
- Impact metrics: 99% reduction in unanswered chats, +30% add-to-cart, +18% checkout conversion

### 3. About Page Bio (`src/pages/About.tsx`)
Update bio to match Framer "About Me" content:
- "An **MS Engineering Design Innovation (EDI) student at Northwestern University** with a passion for storytelling and design."
- "With three years of experience as a software engineer, I recognized gaps in Human-Centered Innovation process both personally and in industry, driving my desire to make a change. **I've built and designed software across e-commerce, social impact, AI,** and **healthcare spaces**, always focusing on creating meaningful products that solve real problems."
- "As a Designer and Product Manager, **I aim to advocate for users, influence product direction, and engage business stakeholders**. I thrive in collaborative environments, leveraging my creative problem-solving skills and analytical thinking to make a significant impact."

### 4. Meta Description (`index.html`)
Update site tagline to: "Storyteller, Listener and Human-Centered Innovator."

## Files Modified
- `src/pages/Home.tsx` -- hero copy, CTAs, section titles
- `src/data/caseStudies.ts` -- Nectar.ai real content and metrics
- `src/pages/About.tsx` -- bio from Framer site
- `index.html` -- meta description

## What stays the same
- Warm minimal design system (colors, typography, spacing)
- Top navigation layout (not switching to Framer's sidebar)
- All other pages (Work, Stories, WorkDetail)
- All other case studies remain with placeholder content

