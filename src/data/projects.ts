export type ProjectTag = "Personal" | "Open Source" | "Professional" | "In Progress";

export interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  gradient: string;
  darkText?: boolean;
  demoUrl?: string;
  repoUrl?: string;
  company?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "CloudSync",
    description:
      "Full-stack analytics dashboard with real-time data sync, built with React, Node.js & PostgreSQL.",
    tags: ["Personal", "In Progress"],
    gradient: "linear-gradient(160deg, #E8750A, #C45A00)",
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "ShopFlow",
    description:
      "React Native e-commerce app with AI-powered recommendations and payment integration.",
    tags: ["Personal"],
    gradient: "linear-gradient(160deg, #FFAA4D, #E8750A)",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "DevAPI",
    description:
      "RESTful API platform with automated documentation, rate limiting & analytics dashboard.",
    tags: ["Open Source"],
    gradient: "linear-gradient(160deg, #3A3A3A, #222222)",
    repoUrl: "#",
  },
  {
    title: "Nova CRM",
    description:
      "Project management SaaS with kanban boards, team collaboration & automated workflows.",
    tags: ["Personal", "In Progress"],
    gradient: "linear-gradient(160deg, #FFD9A8, #FFAA4D)",
    darkText: true,
    demoUrl: "#",
  },
  {
    title: "Analytics\nDashboard",
    description:
      "Built a real-time analytics platform handling 50K+ daily active users with React, GraphQL & AWS.",
    tags: ["Professional"],
    gradient: "linear-gradient(160deg, #1a1a1a, #0a0a0a)",
    company: "Acme Corp",
  },
  {
    title: "Payment\nPipeline",
    description:
      "Designed and implemented a payment microservice processing $2M+ monthly transactions with Node.js & Stripe.",
    tags: ["Professional"],
    gradient: "linear-gradient(160deg, #F0ECE6, #DDD6CC)",
    darkText: true,
    company: "FinTech Startup",
  },
];
