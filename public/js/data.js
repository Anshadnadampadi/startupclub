/**
 * Startup Club Calicut (SCC) - Official Data Store
 * "Transforming Coders into Entrepreneurs"
 */

var SCC_DATA = {
  stats: {
    members: 520,
    mvpsBuilt: 28,
    fundingRaisedLakhs: 65,
    eventsHosted: 42,
    partnerStartups: 18
  },

  events: [
    {
      id: "ev-01",
      title: "Calicut Hack2Launch 2026: 36-Hour Builder Marathon",
      category: "hackathons",
      categoryLabel: "Hackathon & Ideathon",
      badge: "Flagship Event",
      badgeColor: "badge-danger",
      status: "Registration Open",
      statusClass: "status-open",
      date: "Oct 18 - 20, 2026",
      time: "09:00 AM IST (36 Hours Non-stop)",
      location: "Cyberpark Auditorium & Virtual",
      image: "/assets/images/hackathon_event.jpg",
      speaker: {
        name: "Ecosystem Panel",
        role: "15+ Mentors & VCs",
        company: "KSUM & Angel Network"
      },
      summary: "Calicut's largest student hackathon focused on shipping production-ready MVPs. Build with AI, FinTech, and ClimateTech tracks.",
      details: "Participants get access to ₹2,50,000 in cash prizes, cloud credits up to $25,000, fast-track incubation entry, and direct pitch access to Kerala Angel Network investors.",
      capacity: 250,
      registered: 184,
      eligibility: "Open to all college students, recent grads, and developer teams of 2-4 members.",
      agenda: [
        "Day 1: Problem Statement reveal & Mentor alignment",
        "Day 2: Midnight sprint, code reviews, and pitch rehearsal",
        "Day 3: Top 10 Demo Day and VC jury evaluation"
      ]
    },
    {
      id: "ev-02",
      title: "From Git Commit to Term Sheet: The Coder's Guide to Venture Capital",
      category: "founder-talks",
      categoryLabel: "Founder Talk",
      badge: "High Demand",
      badgeColor: "badge-warning",
      status: "Filling Fast",
      statusClass: "status-warning",
      date: "Oct 28, 2026",
      time: "05:30 PM - 07:30 PM IST",
      location: "Innovation Lounge & YouTube Live",
      image: "/assets/images/founder_talk.jpg",
      speaker: {
        name: "Jithin Raj",
        role: "Founder & CEO",
        company: "OmniStack ($12M Series A)"
      },
      summary: "How an engineer from Malabar built an enterprise developer tooling startup and raised millions from international angels and institutional VCs.",
      details: "Jithin will break down the exact journey from writing the first prototype over a weekend to navigating Delaware C-Corp setup, SAFEs, valuation negotiation, and cap table hygiene.",
      capacity: 120,
      registered: 108,
      eligibility: "Student developers, tech founders, and aspiring startup leads.",
      agenda: [
        "17:30 - The Transition: Think in LTV/CAC, not just Big-O",
        "18:15 - Demystifying Cap Tables & Term Sheets",
        "18:45 - Live AMA & Pitch Teardowns"
      ]
    },
    {
      id: "ev-03",
      title: "Hands-on Architecture: Zero-to-MVP in 48 Hours with Modern Stacks",
      category: "workshops",
      categoryLabel: "Technical Workshop",
      badge: "Hands-on Lab",
      badgeColor: "badge-primary",
      status: "Upcoming",
      statusClass: "status-upcoming",
      date: "Nov 05, 2026",
      time: "10:00 AM - 04:00 PM IST",
      location: "SCC Tech Sandbox Lab",
      image: "/assets/images/workshop_session.jpg",
      speaker: {
        name: "Ananya Nair",
        role: "Head of Tech, SCC",
        company: "Ex-Google Summer of Code"
      },
      summary: "Stop over-engineering. Master rapid prototyping with Next.js 15, Supabase, Shadcn/UI, and Stripe payment webhooks.",
      details: "A comprehensive hands-on masterclass where every attendee leaves with a deployed web application integrated with authentication, database triggers, rate-limiting, and paid subscriptions.",
      capacity: 60,
      registered: 46,
      eligibility: "Basic familiarity with JavaScript or Python. Bring your laptop.",
      agenda: [
        "10:00 - Architecture decisions that accelerate shipping",
        "12:00 - Database schema & Auth setup in 20 minutes",
        "14:00 - AI-assisted coding & boilerplate scaffolding",
        "15:30 - Live deployment & analytics integration"
      ]
    },
    {
      id: "ev-04",
      title: "PitchStorm Calicut: Student Startup Demo Day & Seed Showcase",
      category: "hackathons",
      categoryLabel: "Ideathon & Demo Day",
      badge: "Investor Showcase",
      badgeColor: "badge-success",
      status: "Upcoming",
      statusClass: "status-upcoming",
      date: "Nov 14, 2026",
      time: "02:00 PM - 06:30 PM IST",
      location: "Grand Cyberpark Tech Arena",
      image: "/assets/images/demo_day.jpg",
      speaker: {
        name: "Jury Panel",
        role: "7 Active Angel Investors",
        company: "Malabar Angel Network & TiE"
      },
      summary: "12 selected student startup finalists pitch live for ₹10 Lakhs pre-seed grant pool and 6-month free incubator co-working space.",
      details: "Includes 4-minute pitch rounds followed by 4 minutes of intense Q&A with venture partners and angel syndicates from Bangalore and Kochi.",
      capacity: 150,
      registered: 88,
      eligibility: "Teams with working prototypes or launched beta products.",
      agenda: [
        "14:00 - Keynote: What Kerala Investors Look for in 2026",
        "14:45 - Startup Pitches: Cohort Batch Alpha",
        "16:30 - Jury Deliberation & Networking Tea",
        "17:30 - Grant Awards & Incubation Letters"
      ]
    },
    {
      id: "ev-05",
      title: "Founders, Hackers & Coffee: Calicut Startup Mixer",
      category: "networking",
      categoryLabel: "Networking",
      badge: "Informal Mixer",
      badgeColor: "badge-info",
      status: "Upcoming",
      statusClass: "status-upcoming",
      date: "Nov 22, 2026",
      time: "05:00 PM - 07:30 PM IST",
      location: "The Roastery Coffee House, Calicut Beach",
      image: "/assets/images/hero_startup_hub.jpg",
      speaker: {
        name: "SCC Leadership Team",
        role: "Hosts & Curators",
        company: "Startup Club Calicut"
      },
      summary: "No slide decks, no formal suits. Meet co-founders, trade early beta feedback, find your CTO/CEO match, and vibe with Calicut's best builders.",
      details: "Casual evening mixer bringing together developers, designers, product managers, and early-stage student founders over specialty coffee.",
      capacity: 45,
      registered: 35,
      eligibility: "Anyone building or eager to start a tech project in Calicut.",
      agenda: [
        "17:00 - Check-in & Icebreaker speed intros",
        "18:00 - Unconference lightning pitches (60 seconds each)",
        "18:45 - Open co-founder matchmaking & coffee"
      ]
    },
    {
      id: "ev-06",
      title: "Mastering the Kerala Startup Mission (KSUM) Idea Grant",
      category: "workshops",
      categoryLabel: "Grant Masterclass",
      badge: "Government Grants",
      badgeColor: "badge-secondary",
      status: "Registration Open",
      statusClass: "status-open",
      date: "Dec 02, 2026",
      time: "06:00 PM - 08:00 PM IST",
      location: "Interactive Webinar (Google Meet)",
      image: "/assets/images/workshop_session.jpg",
      speaker: {
        name: "Dr. K. Radhakrishnan",
        role: "Faculty Advisor",
        company: "SCC Innovation Cell"
      },
      summary: "Step-by-step walkthrough of scoring 10/10 in KSUM grant evaluation rubrics, budgeting, patent disclosures, and milestone planning.",
      details: "Over 8 SCC-mentored teams have secured the ₹10L KSUM Idea Grant. We disclose our winning proposals, pitch scripts, and financial breakdown models.",
      capacity: 300,
      registered: 215,
      eligibility: "All enrolled Kerala college students with an innovative tech idea.",
      agenda: [
        "18:00 - Grant breakdown & eligibility rules",
        "18:40 - Teardown of 3 successful winning grant proposals",
        "19:20 - Live Q&A & SCC Grant Review Desk access"
      ]
    }
  ],

  announcements: [
    {
      id: "ann-01",
      title: "Applications Open: KSUM Idea Grant Round (Up to ₹10 Lakhs)",
      date: "September 06, 2026",
      category: "Grants & Funding",
      badge: "Urgent",
      badgeClass: "badge-danger",
      summary: "Kerala Startup Mission has officially opened Idea Grant applications for student innovators. SCC is hosting free proposal review sessions.",
      fullContent: "The Idea Grant provides non-dilutive grant funding up to ₹10,00,000 for building prototypes. SCC will conduct three mock screening juries to prepare our club teams before formal submission. Deadline is September 30, 2026.",
      actionText: "Book Proposal Review",
      link: "#resources"
    },
    {
      id: "ann-02",
      title: "Calicut Hack2Launch 2026 Prize Pool Upgraded to ₹2,50,000!",
      date: "September 02, 2026",
      category: "Hackathons",
      badge: "Major Update",
      badgeClass: "badge-success",
      summary: "Thanks to our new ecosystem sponsors, total cash awards for Hack2Launch are now ₹2.5 Lakhs plus guaranteed pre-seed term sheet interviews.",
      fullContent: "The tracks for this year's hackathon include Generative AI Applications, SaaS for Global Businesses, DeepTech, and Smart Coastal Logistics. 50+ college campuses are competing.",
      actionText: "Register for Hackathon",
      link: "#events"
    },
    {
      id: "ann-03",
      title: "Weekly Saturday Founder Mentorship Office Hours",
      date: "August 28, 2026",
      category: "Mentorship",
      badge: "Recurring",
      badgeClass: "badge-primary",
      summary: "Get 30 minutes of dedicated 1-on-1 feedback on your code architecture, business model, or pitch deck from visiting startup veterans.",
      fullContent: "Slots are released every Wednesday at 10 AM on our Discord channel. Each week features a different domain specialist: Product, Seed Fundraising, GTM Strategy, and Cloud Architecture.",
      actionText: "Book a Slot",
      link: "#contact"
    },
    {
      id: "ann-04",
      title: "SCC Winter 2026 Incubator Cohort Applications Open",
      date: "August 20, 2026",
      category: "Incubation",
      badge: "Program Notice",
      badgeClass: "badge-info",
      summary: "Got an MVP? Join our 12-week intensive cohort featuring dedicated office desks, cloud credits, legal counsel, and Demo Day spotlight.",
      fullContent: "Selected student ventures receive direct access to Calicut Cyberpark co-working facilities, hands-on growth guidance, and guaranteed introductions to early-stage investors across South India.",
      actionText: "Apply with your MVP",
      link: "#join"
    }
  ],

  resources: [
    {
      id: "res-01",
      title: "The Coder-to-Founder Handbook (2026 Edition)",
      category: "guides",
      type: "Comprehensive Guide (PDF)",
      badge: "Essential Read",
      icon: "bi-journal-code",
      pages: "48 Pages",
      downloads: "1,420+",
      desc: "The complete manual for developers: shifting mindset from code elegance to customer problems, pricing software, and building your first sales funnel.",
      preview: "Covers: 1. Why great code dies without distribution. 2. The 5 critical questions before writing a single line of code. 3. Building an MVP in under 2 weeks. 4. How to cold email your first 50 prospective B2B clients.",
      fileSize: "3.2 MB"
    },
    {
      id: "res-02",
      title: "Standard 10-Slide Investor Pitch Deck Template",
      category: "templates",
      type: "Presentation Template",
      badge: "Investor Ready",
      icon: "bi-file-earmark-slides",
      pages: "10 Slides",
      downloads: "2,150+",
      desc: "Battle-tested slide deck layout used by Indian tech founders to raise angel checks. Includes speaker notes, typography guidelines, and financial metrics.",
      preview: "Slides include: Problem, Solution, Demo/Architecture, Market Size (TAM/SAM/SOM), Business Model, Traction, Go-to-Market, Competition Matrix, Team, and The Ask.",
      fileSize: "8.5 MB"
    },
    {
      id: "res-03",
      title: "KSUM Idea Grant Application Toolkit & Sample Proposal",
      category: "grants",
      type: "Grant Cheatsheet",
      badge: "Govt Funding",
      icon: "bi-cash-coin",
      pages: "14 Pages",
      downloads: "1,890+",
      desc: "Everything you need to secure the ₹10 Lakh Kerala Startup Mission Idea Grant. Includes rubric breakdown, milestone template, and an annotated winning proposal.",
      preview: "Features line-by-line annotations of an actual grant proposal funded in 2025, common red flags that cause disqualification, and budget allocation guidance.",
      fileSize: "2.1 MB"
    },
    {
      id: "res-04",
      title: "The Modern MVP Stack for Solo Developer Founders",
      category: "tech",
      type: "Engineering Blueprint",
      badge: "Dev Blueprint",
      icon: "bi-cpu",
      pages: "Architecture Spec",
      downloads: "980+",
      desc: "Architectural blueprint comparing Next.js, FastAPI, Supabase, Cloudflare Workers, and Stripe to build SaaS MVPs with zero maintenance overhead.",
      preview: "Includes code snippets for rate-limiting, user auth, webhooks, multi-tenant DB schemas, and automated CI/CD deployment pipelines on Vercel and AWS.",
      fileSize: "1.4 MB"
    },
    {
      id: "res-05",
      title: "SaaS Metrics & Unit Economics for Software Engineers",
      category: "guides",
      type: "Financial Model",
      badge: "Business Skills",
      icon: "bi-calculator",
      pages: "Excel & Guide",
      downloads: "870+",
      desc: "Demystifying MRR, ARR, Churn, LTV, CAC, Payback Period, and Gross Margin with practical formulas and dynamic Google Sheet calculators.",
      preview: "Features an editable 3-year cash flow forecasting sheet with developer-friendly variables like server costs, API token costs, and customer acquisition budget.",
      fileSize: "1.9 MB"
    },
    {
      id: "res-06",
      title: "Student Startup Legal & Cap Table Hygiene Guide",
      category: "templates",
      type: "Legal Toolkit",
      badge: "Legal Compliance",
      icon: "bi-shield-check",
      pages: "22 Pages",
      downloads: "1,110+",
      desc: "Founder agreements, IP assignment contracts, vesting schedules, and company incorporation primer in India (Private Limited vs LLP).",
      preview: "Contains standard NDA templates, 4-year vesting schedule clauses with 1-year cliff, and IP assignment contracts to prevent future co-founder disputes.",
      fileSize: "2.6 MB"
    }
  ],

  team: [
    {
      id: "tm-01",
      name: "Mohammed Saad",
      role: "Club Manager",
      tagline: "Directing club strategy",
      image: "/assets/images/team_member_3.jpg",
      category: "core",
      categories: ["core", "leadership"],
      badge: "Club Manager",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "tm-02",
      name: "Mohammad Anshad",
      role: "Asst Manager",
      tagline: "Full-stack architect, open-source contributor, and Calicut Hack2Launch lead organizer.",
      image: "/assets/images/team_member_1.jpg",
      category: "tech",
      categories: ["core", "tech"],
      badge: "Asst Manager",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "tm-03",
      name: "Ameen Mohammad KK",
      role: "Program Coordinator",
      tagline: "Managing incubator desk logistics, mentor office hours, and partner relations.",
      image: "/assets/images/team_member_1.jpg",
      category: "ops",
      categories: ["core", "ops"],
      badge: "Program Coordinator",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "tm-04",
      name: "Abdul Shamil kk",
      role: "Community Coordinator",
      tagline: "Building student venture developer toolkits, API sandboxes, and cloud infrastructure.",
      image: "/assets/images/team_member_2.jpg",
      category: "tech",
      categories: ["core", "tech"],
      badge: "Community Coordinator",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "tm-05",
      name: "Mohammad Mishal CC",
      role: "Finance Coordinator",
      tagline: "Connecting engineering campuses, alumni angels, and Kerala Startup Mission networks.",
      image: "/assets/images/team_member_4.jpg",
      category: "ops",
      categories: ["core", "ops"],
      badge: "Finance Coordinator",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "tm-06",
      name: "Muhammad Habeeb",
      role: "Media Coordinator",
      tagline: "Leading customer validation sprints, UI/UX prototyping, and pre-incubator venture cohorts.",
      image: "/assets/images/team_member_6.jpg",
      category: "core",
      categories: ["core", "tech", "leadership"],
      badge: "Media Coordinator",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    }
  ],

  gallery: [
    {
      id: "gal-01",
      title: "Calicut Hack2Launch Grand Finale",
      category: "hackathons",
      categoryLabel: "Hackathon",
      image: "/assets/images/hackathon_event.jpg",
      date: "August 2026",
      description: "Over 200 developers sprinting through 36 hours of continuous prototype development at the Cyberpark arena."
    },
    {
      id: "gal-02",
      title: "Founder Keynote & Venture Scaling Session",
      category: "founder-talks",
      categoryLabel: "Founder Talk",
      image: "/assets/images/founder_talk.jpg",
      date: "July 2026",
      description: "Packed auditorium listening to real-world growth lessons and fundraising journeys from leading Kerala founders."
    },
    {
      id: "gal-03",
      title: "Hands-on Fullstack MVP Building Workshop",
      category: "workshops",
      categoryLabel: "Workshop",
      image: "/assets/images/workshop_session.jpg",
      date: "June 2026",
      description: "Students building and deploying their first commercial SaaS applications with real payment integrations."
    },
    {
      id: "gal-04",
      title: "Annual Calicut Student Startup Demo Day",
      category: "demo-day",
      categoryLabel: "Demo Day",
      image: "/assets/images/demo_day.jpg",
      date: "May 2026",
      description: "Student finalists pitching their MVPs on stage in front of angel syndicates and venture capitalists."
    },
    {
      id: "gal-05",
      title: "SCC Digital Innovation Hub & City Ecosystem",
      category: "hackathons",
      categoryLabel: "Campus Ecosystem",
      image: "/assets/images/hero_startup_hub.jpg",
      date: "April 2026",
      description: "Connecting student talent with Calicut's burgeoning IT corridor and startup incubators."
    }
  ],

  roadmapSteps: [
    {
      step: "01",
      title: "Idea Validation & Problem Discovery",
      desc: "Stop coding solutions in search of problems. Learn to interview customers, detect real market friction, and validate problem statements before writing code.",
      skills: ["Customer Discovery", "TAM Sizing", "Figma Prototyping", "Lean Canvas"],
      icon: "bi-lightbulb-fill"
    },
    {
      step: "02",
      title: "Rapid MVP & Prototype Building",
      desc: "Leverage modern web stacks, AI developer tools, and serverless infrastructure to ship a working, secure MVP in less than 48-72 hours.",
      skills: ["Next.js / Python", "Supabase / PostgreSQL", "Stripe Integration", "CI/CD & Cloud"],
      icon: "bi-code-slash"
    },
    {
      step: "03",
      title: "Business Mechanics & Growth",
      desc: "Transform code into cash flow. Master pricing models, developer marketing, organic SEO, cold outreach, and basic unit economics.",
      skills: ["SaaS Pricing", "CAC & LTV", "Cold Emailing", "Analytics & Retention"],
      icon: "bi-graph-up-arrow"
    },
    {
      step: "04",
      title: "Pitching, Grants & Angel Investment",
      desc: "Craft an irresistible 10-slide pitch deck, apply for ₹10L KSUM Idea Grants, and pitch with confidence in front of active venture capital funds.",
      skills: ["Pitch Deck Design", "KSUM Grants", "SAFE & Term Sheets", "Investor Relations"],
      icon: "bi-rocket-takeoff-fill"
    }
  ]
};

// Expose SCC_DATA globally to window and globalThis
if (typeof window !== 'undefined') {
  window.SCC_DATA = SCC_DATA;
}
if (typeof globalThis !== 'undefined') {
  globalThis.SCC_DATA = SCC_DATA;
}
