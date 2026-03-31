# Google Stitch Prompt — NovaMedia Studio UI Redesign

> Copy-paste this entire prompt into Google Stitch (labs.google/fx/tools/stitch)

---

**Project: NovaMedia Studio — B2B Agency Landing Page**

Create a single-page, fully responsive landing page for "NovaMedia Studio", a premium B2B creative agency that delivers social media content, websites, and AI voice agents. The design must feel like Apple meets a high-end film production studio — dark, cinematic, luxurious.

---

**GLOBAL DESIGN SYSTEM**

- Background: #0A0A0A (near-black) throughout. NO light mode. NO white backgrounds anywhere.
- Primary accent: Gold #D4AF37. Secondary accent: Light Gold #F5D76E.
- Gold gradient for key elements: linear-gradient(135deg, #D4AF37, #F5D76E, #D4AF37).
- Font: Inter (Google Fonts). Headings: 700/800 weight. Body: 400. Small labels: 500.
- Text colors: #FFFFFF for headings, #A0A0A0 for body/descriptions, gold for accents and CTAs.
- Border radius: 16px for cards, 12px for buttons, 24px for large containers.
- Card style: background rgba(255,255,255,0.03), border 1px solid rgba(212,175,55,0.1), backdrop-filter blur(20px). On hover: border transitions to rgba(212,175,55,0.4) over 0.3s.
- Spacing: 120px vertical section padding, 24px card internal padding.
- Max content width: 1280px centered. Full-bleed backgrounds.
- Scroll animations: every section fades up 30px with 0.6s ease-out on intersection.
- RTL support: include dir="rtl" capability. The Hebrew language option should flip the entire layout.
- Mobile-first: stack all grids to single column below 768px. Reduce section padding to 60px on mobile.

---

**SECTION 1: NAVIGATION BAR**

Fixed top nav, background rgba(10,10,10,0.85) with backdrop-filter blur(16px), border-bottom 1px solid rgba(255,255,255,0.06). Height 72px.

Left: "NovaMedia" text logo. The "Nova" part uses the gold gradient with CSS background-clip text. The "Media" part is white. Font size 24px, weight 800, letter-spacing -0.5px.

Center (desktop) / hamburger menu (mobile): navigation links — Portfolio, Services, Pricing, Contact. Color #A0A0A0, on hover transition to #FFFFFF.

Right cluster:
1. Language switcher — a small pill/dropdown showing "FR" with a tiny globe icon. Options: FR, EN, עב (Hebrew). Styled as a subtle bordered pill, background transparent, border rgba(255,255,255,0.15).
2. Currency switcher — identical pill style showing "€". Options: € (EUR), $ (USD), ₪ (ILS).
3. CTA button "Start a Project" — background gold gradient, text #0A0A0A, font-weight 700, padding 10px 24px, border-radius 12px. On hover: subtle scale(1.03) and box-shadow 0 0 20px rgba(212,175,55,0.3).

On mobile: logo left, hamburger right (3 gold lines). Opens a full-screen overlay menu with all links stacked vertically, plus the switchers and CTA at the bottom.

---

**SECTION 2: HERO**

Full viewport height (100vh), centered content. Subtle radial gradient overlay from center: rgba(212,175,55,0.03) fading to transparent, giving a warm ambient glow behind the text.

Background effect: animated floating particles — 30-40 tiny gold dots (2-4px) with slow random drift animation (translateY and translateX oscillating over 8-15 seconds each, varying per particle). Opacity 0.15-0.4. Use CSS keyframes, no JS library needed.

Main headline: "Your social media content." on line 1, "Delivered in 48h." on line 2. Font-size: clamp(40px, 7vw, 80px). Weight 800. Line-height 1.05. The text "48h" specifically should have the gold gradient applied with background-clip text and a CSS shimmer animation — a diagonal highlight sweeping across it every 3 seconds using a moving linear-gradient on the background.

Subheadline below (16px gap): "Premium video production, websites, and AI voice agents for businesses that refuse to blend in." Color #A0A0A0, font-size 20px, max-width 600px, weight 400.

Stats bar: a horizontal row of 3 stats separated by thin vertical gold lines (1px, height 40px, opacity 0.3). Each stat: large number in gold gradient text (32px, weight 800) + label below in #A0A0A0 (14px). Stats: "48h" / "Average Delivery", "60+" / "Videos Delivered", "100%" / "Client Satisfaction". On mobile: stack horizontally but reduce font sizes.

Two CTA buttons side by side (16px gap):
1. Primary: "See Our Work" — gold gradient background, #0A0A0A text, weight 700, padding 16px 36px, border-radius 12px. Hover: scale(1.03), glow shadow.
2. Secondary: "Book a Call" — transparent background, border 1px solid #D4AF37, gold text, same padding/radius. Hover: background fills to rgba(212,175,55,0.1).

Below the CTAs, a subtle downward-pointing animated chevron (bouncing slowly) inviting scroll.

---

**SECTION 3: VIDEO PORTFOLIO**

Section title: "Our Work" in gold gradient text (48px, weight 800, centered). Subtitle below: "Content that stops the scroll." in #A0A0A0.

Grid: 4 columns on desktop, 2 on tablet, 1 on mobile. Each card is a vertical 9:16 aspect ratio container (use aspect-ratio: 9/16 or padding-bottom trick). Card styling: rounded corners 16px, overflow hidden, glassmorphism border.

Each card contains:
- A dark placeholder area (use a gradient from #111 to #1A1A1A to simulate a video thumbnail). Center a large play button circle (56px, border 2px solid white, white triangle inside). On hover: the play button scales up and a gold glow appears behind it.
- Bottom overlay: a gradient from transparent to rgba(10,10,10,0.95). Inside: project title (white, 16px, weight 600), client industry tag (e.g., "Restaurant", "Fashion", "Tech Startup" — small gold-bordered pill, 12px), and platform tags in a row — small pills with platform icons/names: "TikTok", "Instagram Reels", "LinkedIn". Platform pills: background rgba(255,255,255,0.06), text #A0A0A0, 11px.

Show 6 cards initially (placeholder content). Include a "View All Projects" text link below the grid, gold color, with a right arrow that translates 4px on hover.

Sample card content (use these for the 6 cards):
1. "Le Petit Bistro — Brand Launch" — Restaurant — TikTok, Instagram
2. "Luxe & Co — Summer Collection" — Fashion — Instagram Reels, TikTok
3. "TechVault — Product Demo" — SaaS — LinkedIn, Instagram
4. "Studio Bloom — Grand Opening" — Beauty — TikTok, Instagram
5. "Nordic Finance — Thought Leadership" — Finance — LinkedIn
6. "FitPulse — App Launch" — Fitness — TikTok, Instagram Reels

---

**SECTION 4: WEBSITES SHOWCASE**

Section title: "Websites & Platforms" (gold gradient, 48px). Subtitle: "Designed to convert. Built to scale."

Horizontal scrolling row on mobile, 3-column grid on desktop. Each card simulates a browser window:

- Top bar: rounded top corners (16px), background #1A1A1A, height 36px. Contains 3 dots (8px circles: #FF5F57, #FEBC2E, #28C840) on the left, a fake URL bar in the center (rounded pill, background #111, text #555, showing a URL like "luxeandco.com"), and a small external-link icon on the right.
- Below the bar: a dark placeholder area (200px height, gradient #0F0F0F to #151515) representing the website screenshot. Center subtle text "Preview" in #333 to indicate it is a placeholder.
- Below the preview: card body with padding. Site name (white, 18px, weight 600), description (14px, #A0A0A0, 2 lines max), and tech tags in a row (small pills: "Next.js", "AI Chat", "Stripe", etc. — styled like platform pills above).

3 sample cards:
1. URL: "luxeandco.com" — "Luxe & Co" — "E-commerce platform with AI-powered product recommendations" — Tags: Next.js, Stripe, AI
2. URL: "nordicfinance.io" — "Nordic Finance" — "Fintech dashboard with real-time analytics and client portal" — Tags: React, API, Dashboard
3. URL: "studiobloom.fr" — "Studio Bloom" — "Booking platform with automated reminders and payments" — Tags: Next.js, Payments, Automation

---

**SECTION 5: SERVICES**

Section title: "What We Do" (gold gradient, 48px). Subtitle: "Three pillars. One studio."

3 cards in a row (stack on mobile). Each card is a tall glassmorphism container (padding 40px, min-height 320px). On hover: border glows gold, card lifts with translateY(-4px) and subtle shadow.

Card 1 — Icon: 🎬 (48px). Title: "AI-Powered Videos" (white, 24px, weight 700). Description: "Scroll-stopping vertical content for TikTok, Instagram, and LinkedIn. Scripted, produced, and delivered in 48 hours." (16px, #A0A0A0). Below: a small "Learn more →" link in gold.

Card 2 — Icon: 🌐. Title: "Websites & SaaS". Description: "High-converting landing pages, e-commerce stores, and web applications. Designed for performance, built for growth."

Card 3 — Icon: 🎙️. Title: "Voice AI Agent". Description: "24/7 AI-powered phone agent that answers calls, qualifies leads, and books appointments. Your business never sleeps."

---

**SECTION 6: HOW IT WORKS**

Section title: "How It Works" (gold gradient, 48px). Subtitle: "From brief to delivery in 3 steps."

3 items in a horizontal row (stack vertically on mobile), connected by a thin horizontal gold dashed line running behind them at the vertical center of the step numbers.

Each step:
- A large number: "01", "02", "03" — font-size 72px, weight 800, gold gradient text, opacity 0.9.
- Title below (white, 20px, weight 600).
- Description below that (#A0A0A0, 15px, max-width 280px).

Step 01: "Brief & Strategy" — "Share your vision. We analyze your brand, audience, and goals to craft a tailored content plan."
Step 02: "Production" — "Our team scripts, shoots, and edits. AI-enhanced workflows mean faster turnaround without sacrificing quality."
Step 03: "Deliver & Scale" — "Receive your content ready to post. We optimize, iterate, and scale what works."

---

**SECTION 7: RESULTS / METRICS**

Section title: "Results That Speak" (gold gradient, 48px).

4 cards in a row (2x2 grid on mobile). Each card: glassmorphism, centered content, padding 32px.

Card content (large metric in gold gradient 48px weight 800, label below in #A0A0A0 14px):
1. "x3" — "Average Engagement Boost"
2. "48h" — "Average Delivery Time"
3. "-70%" — "Cost vs. Traditional Agency"
4. "80%+" — "Client Profit Margin Maintained"

Subtle animated counter effect on scroll-in (numbers count up from 0).

---

**SECTION 8: PRICING**

Section title: "Pricing" (gold gradient, 48px). Subtitle: "Transparent plans. No surprises."

Tab bar at top: 3 tabs — "Videos", "Websites", "Voice AI". Active tab has gold underline (2px) and white text. Inactive tabs are #666. Clicking a tab switches the visible plan cards below with a fade transition.

Currency toggle: a small toggle next to the subtitle showing €/$/₪ matching the nav currency selector.

**Videos tab (default visible):**

4 plan cards in a row (stack on mobile). Each: glassmorphism card, padding 32px, text centered at top.

1. "Starter" — "€497/mo" — Features: "4 short-form videos", "Script + edit included", "1 revision round", "48h delivery", "Platform-optimized formats". Plain border.
2. "Growth" (POPULAR) — "€997/mo" — Features: "10 short-form videos", "Content calendar", "3 revision rounds", "Priority delivery", "Analytics dashboard", "Dedicated strategist". THIS card has an animated gold border — use a CSS conic-gradient rotating animation on the border (a pseudo-element behind the card with a rotating gold gradient, creating a spinning border effect). A small "Most Popular" badge at the top in gold background, black text, rounded pill.
3. "Scale" — "€1,997/mo" — Features: "25 videos/month", "Full content strategy", "Unlimited revisions", "Same-day rush option", "Multi-platform distribution", "Monthly performance report".
4. "Enterprise" — "Custom" — Features: "Unlimited content", "Dedicated team", "White-label option", "API access", "SLA guarantee", "Custom integrations". CTA says "Contact Us" instead of "Get Started".

Each card has a CTA button at the bottom. Popular plan: gold gradient button. Others: outline button.

**Websites tab:**
1. "Landing Page" — "€1,500" (one-time) — "Single page, mobile responsive, contact form, SEO basics, 7-day delivery"
2. "Business Site" (POPULAR) — "€3,500" — "Up to 8 pages, CMS, blog, analytics, 14-day delivery"
3. "E-Commerce" — "€6,000" — "Full store, payments, inventory, up to 100 products, 21-day delivery"
4. "SaaS / Web App" — "From €12,000" — "Custom application, user auth, dashboard, API integrations, ongoing support"

**Voice AI tab:**
1. "Basic" — "€297/mo" — "1 AI agent, 200 calls/month, business hours, call transcripts"
2. "Professional" (POPULAR) — "€597/mo" — "1 AI agent, 1000 calls/month, 24/7, CRM integration, call analytics"
3. "Business" — "€997/mo" — "3 AI agents, 5000 calls/month, custom voice, appointment booking, lead scoring"
4. "Enterprise" — "Custom" — "Unlimited agents, unlimited calls, custom integrations, dedicated support, SLA"

---

**SECTION 9: TESTIMONIALS**

Section title: "What Clients Say" (gold gradient, 48px).

3 cards in a row (stack on mobile). Each card: glassmorphism, padding 32px.

Top of card: 5 gold star icons (★) in #D4AF37.
Quote text: italic, 16px, #CCCCCC, line-height 1.7. Wrapped in quotation marks.
Bottom: small avatar circle (48px, gold border, filled with initials in gold text on dark background), name (white, 16px, weight 600), role/company (#A0A0A0, 14px).

Testimonial 1: "NovaMedia transformed our social presence. We went from 200 views to 15K average per video in just one month." — Sophie Laurent, Marketing Director, Luxe & Co.
Testimonial 2: "The website they built us converts at 4.2%. Our previous agency couldn't crack 1%. Worth every euro." — Marc Berger, CEO, Nordic Finance.
Testimonial 3: "The AI voice agent handles 80% of our incoming calls now. Our team can finally focus on clients, not phones." — Rachel Cohen, Operations, Studio Bloom.

---

**SECTION 10: FAQ**

Section title: "Questions" (gold gradient, 48px).

Accordion list, max-width 800px, centered. Each item: top border 1px solid rgba(255,255,255,0.08). Question row: question text (white, 18px, weight 500) on the left, a "+" icon on the right (gold, 24px) that rotates 45 degrees to become "x" when expanded. Clicking toggles the answer panel below with a smooth max-height transition.

6 FAQs:
1. "How fast can you deliver?" — "Most video projects are delivered within 48 hours of brief approval. Websites typically take 7-21 days depending on complexity. Rush options are available on Growth and Scale plans."
2. "Do you work with businesses outside France?" — "Absolutely. We work with clients across Europe, Israel, and North America. All communication is available in French, English, and Hebrew."
3. "What if I'm not satisfied with the result?" — "Every plan includes revision rounds. We work until you're thrilled. Our 100% satisfaction record speaks for itself."
4. "Can I see examples of your work?" — "Yes — browse our portfolio above or book a call and we'll walk you through case studies relevant to your industry."
5. "How does the Voice AI agent work?" — "We build and train a custom AI agent on your business knowledge. It answers calls in natural language, qualifies leads, books appointments, and sends you transcripts — 24/7."
6. "Do you offer retainer discounts?" — "Yes. Annual commitments receive a 15% discount across all plans. Contact us for custom enterprise pricing."

---

**SECTION 11: FINAL CTA**

Full-width section, background: subtle radial gold glow (rgba(212,175,55,0.05)) centered, over #0A0A0A.

Headline: "Ready to stand out?" — 48px, weight 800, white. Below: "Let's build something your competitors will envy." — 20px, #A0A0A0.

Single CTA button: "Start Your Project" — large (padding 18px 48px), gold gradient background, #0A0A0A text, weight 700, border-radius 16px. Animated glow: a pulsing box-shadow that oscillates between 0 0 20px rgba(212,175,55,0.2) and 0 0 40px rgba(212,175,55,0.4) over 2 seconds, infinite.

Below the button: small text "No commitment. Free consultation." in #666, 14px.

---

**SECTION 12: FOOTER**

Background #050505, border-top 1px solid rgba(255,255,255,0.06), padding 48px.

Left: "NovaMedia" logo (same gold gradient style as nav). Below: "© 2026 NovaMedia Studio. All rights reserved." in #555, 13px.

Center (desktop): links row — Portfolio, Services, Pricing, Contact, Privacy Policy. Color #666, hover #FFFFFF.

Right: language switcher (FR / EN / עב) as small text links separated by " | ".

On mobile: stack everything centered.

---

**TECHNICAL REQUIREMENTS:**
- Generate as a single HTML file with embedded CSS and vanilla JavaScript (no frameworks).
- All animations use CSS keyframes or Intersection Observer for scroll reveals.
- Include a CSS custom property system at :root for easy color/spacing changes.
- Ensure proper semantic HTML (header, nav, main, section, footer).
- Tab switching in pricing uses JavaScript to toggle visibility with opacity/transform transitions.
- FAQ accordion uses JavaScript for toggling max-height and rotating the icon.
- Particle effect in hero uses absolutely positioned divs with CSS animation (no canvas needed).
- All interactive elements have cursor:pointer and visible focus states for accessibility.
- Total page weight should be minimal — no external images, only CSS gradients and emoji icons.
