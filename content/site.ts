export type Feature = {
  title: string;
  description: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export type AppScreenshot = {
  src: string;
  title: string;
  alt: string;
};

export const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/company", label: "Company" },
  { href: "/blog", label: "Knowledge" },
  { href: "/support", label: "Support" }
];

export const companyContact = {
  location: "Lyman, Maine, USA",
  helloEmail: "hello@arrivioai.com",
  supportEmail: "support@arrivioai.com",
  businessHours: "Mon–Fri, 9 AM – 6 PM EST"
};

export const homepageFeatures: Feature[] = [
  {
    title: "AI Assistant",
    description: "Get clear answers about relocation, local systems, and next steps in your chosen language."
  },
  {
    title: "Resume Builder",
    description: "Build locally relevant resumes that reflect market expectations in your new country."
  },
  {
    title: "Job Finder",
    description: "Discover role opportunities with practical guidance tailored to your profile and location."
  },
  {
    title: "Housing Help",
    description: "Understand rental processes, avoid common traps, and prepare the right documents."
  },
  {
    title: "Credit Builder",
    description: "Learn the foundations of credit from day one and take practical steps to build trust faster."
  },
  {
    title: "English Practice",
    description: "Practice real conversations for interviews, daily life, and official situations with AI support."
  },
  {
    title: "Immigration Guides",
    description: "Access structured guidance to navigate status changes, compliance, and documentation workflows."
  }
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "driver-license-first-90-days",
    title: "Driver License Checklist for Your First 90 Days",
    description: "A country-agnostic checklist to plan licensing documents, practice windows, and timeline risks.",
    category: "Driver license",
    date: "2026-01-20",
    readTime: "6 min read",
    body: [
      "Securing a local driver license is often a requirement for work, school logistics, and mobility. Start by collecting identity, residency, and legal status documents before booking tests.",
      "Many newcomers lose time because they underestimate appointment lead times. Build a 90-day timeline with milestones for document verification, theory study, and road test booking.",
      "ARRIVIO helps you localize this process based on your destination and status profile so you can avoid preventable delays."
    ]
  },
  {
    slug: "first-job-new-country-strategy",
    title: "How to Land Your First Job in a New Country",
    description: "A practical strategy to align your resume, language confidence, and targeted applications.",
    category: "First job in a new country",
    date: "2026-01-28",
    readTime: "7 min read",
    body: [
      "Your first role is usually about speed and fit, not perfection. Focus on high-probability job families where your prior experience can transfer quickly.",
      "Localizing your resume and practicing interviews in the destination language significantly increases response rates. Use structured outreach and weekly tracking.",
      "ARRIVIO combines AI resume feedback and job discovery so newcomers can run a focused search process from day one."
    ]
  },
  {
    slug: "credit-score-basics-newcomers",
    title: "Credit Score Basics Every Newcomer Should Know",
    description: "Understand how credit history starts, what actions matter early, and what mistakes to avoid.",
    category: "Credit score",
    date: "2026-02-05",
    readTime: "5 min read",
    body: [
      "In many countries, no credit history can be as limiting as poor credit. Start by learning which institutions report activity and what utilization thresholds to maintain.",
      "Automation is critical. Set payment reminders, track due dates, and avoid hard inquiries unless necessary.",
      "ARRIVIO translates credit rules into step-by-step actions so newcomers can build financial credibility with confidence."
    ]
  },
  {
    slug: "immigration-process-milestones",
    title: "Immigration Process Milestones You Should Track",
    description: "A framework for monitoring deadlines, documents, and status updates without missing critical windows.",
    category: "Immigration processes",
    date: "2026-02-16",
    readTime: "8 min read",
    body: [
      "Immigration systems are deadline-driven. Track every filing event with dates, dependencies, and contingency plans.",
      "Create a single source of truth for legal documents and communication history. This reduces errors and simplifies professional consultations.",
      "ARRIVIO organizes milestone tracking and AI guidance to help newcomers stay compliant and prepared."
    ]
  },
  {
    slug: "resume-tips-global-talent",
    title: "Resume Tips for Global Talent Entering New Markets",
    description: "How to adapt achievements for local recruiters while preserving your international career story.",
    category: "Resume tips",
    date: "2026-02-24",
    readTime: "6 min read",
    body: [
      "Recruiters scan quickly for relevance. Translate your experience into outcomes that match local business expectations.",
      "Use concise bullet points, measurable results, and role-specific summaries to reduce cognitive load.",
      "ARRIVIO provides AI resume optimization and role-aware suggestions for faster interview conversion."
    ]
  }
];

export const appScreenshots: AppScreenshot[] = [
  {
    src: "/app-screenshots/simulator-2026-04-19-080256.png",
    title: "Dashboard",
    alt: "ARRIVIO app dashboard screen"
  },
  {
    src: "/app-screenshots/simulator-2026-04-19-081915-pro.png",
    title: "ARRIVIO Pro",
    alt: "ARRIVIO Pro benefits screen"
  },
  {
    src: "/app-screenshots/immigration-guides-grid.png",
    title: "Immigration Guides",
    alt: "ARRIVIO immigration guides grid screen"
  },
  {
    src: "/app-screenshots/ai-english-coach.png",
    title: "AI English Coach",
    alt: "ARRIVIO AI English coach screen"
  },
  {
    src: "/app-screenshots/find-jobs-screen.png",
    title: "Find Jobs",
    alt: "ARRIVIO find jobs screen"
  },
  {
    src: "/app-screenshots/document-analyzer-screen.png",
    title: "Document Analyzer",
    alt: "ARRIVIO document analyzer screen"
  },
  {
    src: "/app-screenshots/simulator-2026-04-19-075458.png",
    title: "Sign-in",
    alt: "ARRIVIO sign-in screen"
  },
  {
    src: "/app-screenshots/screenshot-2026-04-19-080231.png",
    title: "Theme Options",
    alt: "ARRIVIO theme options panel"
  }
];
