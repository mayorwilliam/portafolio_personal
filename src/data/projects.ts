export type ProjectTag = "Personal" | "Open Source" | "Professional" | "In Progress";

export interface ProjectMedia {
  screenshot?: string;
  gif?: string;
  video?: string;
  logo?: string;
  type?: "web" | "mobile" | "api" | "saas";
}

export interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  gradient: string;
  color: string;
  darkText?: boolean;
  demoUrl?: string;
  repoUrl?: string;
  company?: string;
  featured?: boolean;
  companyUrl?: string;
  longDescription: string;
  techStack: string[];
  timeline?: string;
  highlights: string[];
  image?: string;
  media?: ProjectMedia;
}

export const projects: Project[] = [
  {
    title: "WallyMe",
    description:
      "AI-powered personal finance app with intelligent expense categorization, multi-currency support, and offline-first architecture.",
    tags: ["Personal", "In Progress"],
    gradient: "linear-gradient(160deg, #344E64, #1E2D3E)",
    color: "#5B7FA5",
    demoUrl: "https://wallyme.com",
    featured: true,
    image: "/images/wallyme-logo.png",
    media: {
      screenshot: "/images/mockups/wallyme-mockup.png",
      logo: "/images/wallyme-logo.png",
      type: "mobile",
    },
    longDescription:
      "WallyMe is a full-stack mobile personal finance application that leverages AI to automatically categorize expenses with 95%+ accuracy. Built with a multi-provider LLM fallback system (Grok + Claude), the app supports 28 currencies, in-app subscriptions, and an offline-first architecture for reliable tracking anywhere.",
    techStack: [
      "React Native (Expo)",
      "NestJS",
      "PostgreSQL",
      "Grok API",
      "Claude API",
      "Supabase",
      "AWS",
    ],
    timeline: "Oct 2025 – Present",
    highlights: [
      "Full-stack mobile app from concept to production",
      "AI expense categorization with 95%+ accuracy",
      "Multi-provider LLM fallback system (Grok + Claude)",
      "In-app subscription management",
      "Support for 28 currencies",
      "Offline-first architecture",
    ],
  },
  {
    title: "VendePunto",
    description:
      "Enterprise point of sale system with real-time multi-terminal sync, serverless AWS infrastructure, and sub-200ms response times.",
    tags: ["Professional"],
    gradient: "linear-gradient(160deg, #1a1a1a, #0a0a0a)",
    color: "#E84393",
    company: "The Ksquare Group",
    companyUrl: "https://www.theksquaregroup.com/",
    demoUrl: "https://vendepunto.com",
    featured: true,
    image: "/images/vendepunto-logo.png",
    media: {
      screenshot: "/images/mockups/vendepunto-mockup.png",
      logo: "/images/vendepunto-logo.png",
      type: "web",
    },
    longDescription:
      "VendePunto is a full-featured enterprise point of sale system built for high-traffic retail environments. The platform supports real-time multi-terminal synchronization via WebSockets, a serverless backend on AWS CDK with Lambda functions, and Redis caching for sub-200ms response times. Designed for 99.9% uptime with CI/CD pipelines via GitHub Actions.",
    techStack: [
      "Java",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS CDK",
      "Lambda",
      "Redis",
      "WebSockets",
      "Docker",
    ],
    timeline: "Sep 2024 – May 2025",
    highlights: [
      "99.9% uptime in production",
      "Sub-200ms API response times",
      "Real-time multi-terminal sync via WebSockets",
      "15+ database tables with complex relations",
      "Serverless infrastructure with AWS CDK",
      "Redis caching layer for performance",
      "CI/CD pipelines with GitHub Actions",
    ],
  },
  {
    title: "GlassHive",
    description:
      "CRM import/export microservices integrating Salesforce, HubSpot, Halo, and other platforms for seamless data migration.",
    tags: ["Professional"],
    gradient: "linear-gradient(160deg, #3B2C6E, #2A1E52)",
    color: "#6B3FA0",
    company: "The Ksquare Group",
    companyUrl: "https://www.theksquaregroup.com/",
    image: "/images/glasshive-logo.png",
    media: {
      screenshot: "/images/mockups/glasshive-mockup.png",
      logo: "/images/glasshive-logo.png",
      type: "api",
    },
    longDescription:
      "At GlassHive (subcontracted via The Ksquare Group), I built microservices for importing and exporting data from multiple CRM platforms including Salesforce, HubSpot, and Halo. Designed robust data pipelines to handle large-scale migrations between systems with data validation and transformation.",
    techStack: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Azure",
      "TypeScript",
    ],
    timeline: "Aug 2023 – Oct 2025",
    highlights: [
      "CRM integration microservices (Salesforce, HubSpot, Halo)",
      "Large-scale data import/export pipelines",
      "Multi-cloud infrastructure (AWS + Azure)",
      "Data validation and transformation layers",
    ],
  },
  {
    title: "Ksquare\nGroup",
    description:
      "Senior FullStack Developer building scalable applications for thousands of concurrent users with optimized databases and real-time features.",
    tags: ["Professional"],
    gradient: "linear-gradient(160deg, #506E8C, #3A5A78)",
    color: "#00B894",
    company: "The Ksquare Group",
    companyUrl: "https://www.theksquaregroup.com/",
    image: "/images/ksquare-logo.png",
    media: {
      logo: "/images/ksquare-logo.png",
      type: "web",
    },
    longDescription:
      "As a Senior FullStack Developer at The Ksquare Group, I built and maintained full-stack applications serving thousands of concurrent users. Focused on backend optimization, real-time features, and cloud infrastructure with comprehensive test coverage.",
    techStack: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS Lambda",
      "API Gateway",
      "EventBridge",
      "SQS/SNS",
      "Redis",
      "WebSockets",
      "Docker",
    ],
    timeline: "Aug 2023 – Oct 2025",
    highlights: [
      "Full-stack apps for thousands of concurrent users",
      "40% query performance optimization",
      "60% DB load reduction with Redis caching",
      "Real-time WebSocket features",
      "85%+ test coverage across projects",
    ],
  },
  {
    title: "Yaydoo",
    description:
      "B2B payments platform with event-driven microservices and containerized deployments, acquired by Paystand.",
    tags: ["Professional"],
    gradient: "linear-gradient(160deg, #1A4971, #0E3350)",
    color: "#0984E3",
    company: "Yaydoo",
    image: "/images/yaydoo-logo.png",
    media: {
      screenshot: "/images/mockups/yaydoo-mockup.png",
      logo: "/images/yaydoo-logo.png",
      type: "web",
    },
    longDescription:
      "Yaydoo was a B2B financial automation platform (acquired by Paystand) where I worked on payment processing and business automation services. Built event-driven microservices with containerized deployments on AWS ECS.",
    techStack: [
      "NestJS",
      "PostgreSQL",
      "AWS SQS/SNS",
      "AWS ECS",
      "Redis",
      "Docker",
    ],
    timeline: "Sep 2022 – Jun 2023",
    highlights: [
      "B2B financial automation platform",
      "Event-driven microservices architecture",
      "Containerized ECS deployments",
      "Redis caching for session management",
    ],
  },
  {
    title: "Tresthold",
    description:
      "FullStack development with RESTful APIs, JWT authentication, Docker containerization, and CI/CD pipelines.",
    tags: ["Professional"],
    gradient: "linear-gradient(160deg, #2E7EAD, #1C5A82)",
    color: "#FDCB6E",
    darkText: true,
    company: "Tresthold",
    image: "/images/threshold-logo.png",
    media: {
      screenshot: "/images/mockups/tresthold-mockup.png",
      logo: "/images/threshold-logo.png",
      type: "web",
    },
    longDescription:
      "At Tresthold, I built production applications with RESTful APIs, secure authentication systems, and automated deployment pipelines. Worked across the full stack with containerized services deployed on AWS.",
    techStack: [
      "Node.js",
      "TypeScript",
      "Express",
      "AWS Lambda",
      "EC2",
      "ECS",
      "Docker",
      "GitHub Actions",
    ],
    timeline: "Aug 2019 – Sep 2022",
    highlights: [
      "Production apps with RESTful APIs",
      "JWT authentication systems",
      "Docker containerization",
      "CI/CD pipelines with GitHub Actions",
    ],
  },
  {
    title: "ayudame247",
    description:
      "Multi-tenant WhatsApp Bot SaaS with AI-powered conversational flows and automated customer interactions.",
    tags: ["Personal", "In Progress"],
    gradient: "linear-gradient(160deg, #FFAA4D, #E8750A)",
    color: "#FF6B35",
    media: {
      screenshot: "/images/mockups/ayudame247-mockup.png",
      type: "saas",
    },
    longDescription:
      "ayudame247 is a multi-tenant SaaS platform that enables businesses to deploy AI-powered WhatsApp bots for automated customer interactions. Features an admin dashboard for managing tenants, configuring conversational flows, and monitoring bot performance across multiple businesses.",
    techStack: [
      "Node.js",
      "TypeScript",
      "WhatsApp Business API",
      "AI Integration",
      "Multi-tenant Architecture",
    ],
    timeline: "In Development",
    highlights: [
      "Multi-tenant SaaS architecture",
      "Admin dashboard for tenant management",
      "AI-powered conversational flows",
      "Automated customer interactions via WhatsApp",
    ],
  },
  {
    title: "InmobiliariaXL",
    description:
      "Real estate platform for property listings and search in Colima, Mexico.",
    tags: ["Personal", "In Progress"],
    gradient: "linear-gradient(160deg, #3A3A3A, #222222)",
    color: "#2A2A2A",
    media: {
      type: "web",
    },
    longDescription:
      "InmobiliariaXL is a real estate platform designed to modernize property listings and search for the Colima, Mexico market. The platform aims to provide a clean, fast experience for both property seekers and real estate agents.",
    techStack: ["Vite", "React", "TypeScript"],
    timeline: "Coming Soon",
    highlights: [
      "Real estate platform for Colima, Mexico",
      "Modern property listing and search experience",
    ],
  },
];
