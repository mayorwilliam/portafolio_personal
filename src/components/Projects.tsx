"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

interface Company {
  name: string;
  logo: string;
  role: string;
  period: string;
  color: string;
  note?: string;
  topHighlight: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const companies: Company[] = [
  {
    name: "The Ksquare Group",
    logo: "/images/ksquare-logo.png",
    role: "Senior FullStack Developer",
    period: "Aug 2023 -- Oct 2025",
    color: "#00B894",
    topHighlight: "99.9% uptime, thousands of concurrent users",
    description:
      "Led full-stack development across multiple client-facing products. Owned backend optimization, real-time features, serverless infrastructure, and deployment pipelines. Directly responsible for systems serving thousands of concurrent users in production.",
    highlights: [
      "Architected serverless AWS infrastructure with CDK — Lambda, API Gateway, EventBridge, SQS/SNS",
      "Reduced PostgreSQL query times by 40% through advanced indexing and query optimization",
      "Cut database load by 60% implementing Redis caching strategies for hot paths",
      "Built real-time multi-terminal sync via WebSockets for enterprise POS system",
      "85%+ test coverage across all projects with automated CI/CD via GitHub Actions",
      "Designed 15+ database tables with complex relations for VendePunto POS",
      "Sub-200ms API response times on high-traffic endpoints",
      "99.9% uptime across all production systems",
    ],
    tech: ["Node.js", "NestJS", "Java", "PostgreSQL", "AWS CDK", "Lambda", "API Gateway", "EventBridge", "Redis", "WebSockets", "Docker", "GitHub Actions"],
  },
  {
    name: "GlassHive",
    logo: "/images/glasshive-logo.png",
    role: "FullStack Developer",
    period: "Aug 2023 -- Oct 2025",
    note: "Subcontracted via Ksquare",
    color: "#6B3FA0",
    topHighlight: "CRM integrations: Salesforce, HubSpot, Halo",
    description:
      "Built the data integration layer for a CRM platform. Designed and implemented microservices for importing and exporting data across Salesforce, HubSpot, and Halo. Handled large-scale migrations with complex data validation, transformation, and error recovery.",
    highlights: [
      "Built import/export microservices for Salesforce, HubSpot, and Halo CRMs",
      "Designed data pipelines handling large-scale migrations between platforms",
      "Implemented data validation and transformation layers with error recovery",
      "Multi-cloud deployment across AWS and Azure environments",
      "Worked directly with the GlassHive product team on API design and data modeling",
    ],
    tech: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "AWS", "Azure", "REST APIs"],
  },
  {
    name: "Yaydoo",
    logo: "/images/yaydoo-logo.png",
    role: "FullStack Developer",
    period: "Sep 2022 -- Jun 2023",
    note: "Acquired by Paystand",
    color: "#0984E3",
    topHighlight: "B2B payment processing, event-driven architecture",
    description:
      "Worked on a B2B financial automation platform that was later acquired by Paystand. Built payment processing services and business automation workflows using event-driven architecture with containerized deployments on AWS ECS.",
    highlights: [
      "Built event-driven microservices with AWS SQS/SNS for async processing",
      "Deployed containerized services to AWS ECS with auto-scaling policies",
      "Implemented Redis caching for session management and API performance",
      "Developed B2B payment processing and invoice automation services",
      "Contributed to the platform that led to the Paystand acquisition",
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "AWS SQS/SNS", "AWS ECS", "Redis", "Docker"],
  },
  {
    name: "Tresthold",
    logo: "/images/threshold-logo.png",
    role: "FullStack Developer",
    period: "Aug 2019 -- Sep 2022",
    color: "#FDCB6E",
    topHighlight: "3 years building production systems end-to-end",
    description:
      "First professional role. Built production applications from scratch across the full stack — RESTful APIs, authentication systems, containerized services, and cloud deployments. This is where I learned to ship real software.",
    highlights: [
      "Built and shipped multiple production apps with Node.js and Express",
      "Designed JWT-based authentication and authorization systems",
      "Containerized all services with Docker for consistent deployments",
      "Set up CI/CD pipelines with GitHub Actions for automated testing and deploy",
      "Managed AWS infrastructure — Lambda for serverless, EC2 for compute, ECS for containers",
      "Grew from junior to confident full-stack developer over 3 years",
    ],
    tech: ["Node.js", "TypeScript", "Express", "AWS Lambda", "EC2", "ECS", "Docker", "GitHub Actions", "JWT"],
  },
];

const filteredProjects = projects.filter(
  (p) => !["Ksquare\nGroup", "GlassHive", "Yaydoo", "Tresthold"].includes(p.title)
);

function CompanyCard({ company }: { company: Company }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`worked__item${open ? " worked__item--open" : ""}`}
      style={{ "--brand": company.color } as React.CSSProperties}
    >
      <button
        className="worked__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="worked__logo">
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={120}
            height={120}
            unoptimized
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
        <div className="worked__main">
          <span className="worked__name">{company.name}</span>
          <span className="worked__role">{company.role}</span>
          <span className="worked__period">
            {company.period}
            {company.note && <span className="worked__note"> / {company.note}</span>}
          </span>
          <span className="worked__teaser">{company.topHighlight}</span>
          <span className="worked__view-link">
            {open ? "Less" : "View details"} <span className="worked__view-icon">{open ? "\u2212" : "+"}</span>
          </span>
        </div>
      </button>

      <div className="worked__details">
        <div className="worked__details-inner">
          <p className="worked__desc">{company.description}</p>
          <ul className="worked__highlights">
            {company.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="worked__tech">
            {company.tech.map((t) => (
              <span key={t} className="worked__chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  return (
    <div
      className={`projects__card reveal${project.darkText ? " projects__card--dark" : ""}`}
      style={{ background: project.gradient }}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {project.media?.logo ? (
        <div className="projects__card-logo-main">
          <Image
            src={project.media.logo}
            alt={`${project.title.replace("\n", " ")} logo`}
            width={280}
            height={280}
            unoptimized
            style={{ objectFit: "contain" }}
          />
        </div>
      ) : (
        project.media?.screenshot && (
          <div className="projects__card-bg">
            <Image
              src={project.media.screenshot}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )
      )}

      <div className="projects__card-content">
        {project.company && (
          <span className="projects__card-company">{project.company}</span>
        )}
        <span className="projects__card-name">
          {project.title.replace("\n", " ")}
        </span>
        <p className="projects__card-desc">{project.description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Where I've Worked — light section */}
      <section id="projects" className="worked-section">
        <div className="projects__section-header reveal">
          <h2 className="projects__section-title">Where I&apos;ve Worked</h2>
        </div>

        <div className="worked__grid">
          {companies.map((co) => (
            <CompanyCard key={co.name} company={co} />
          ))}
        </div>
      </section>

      {/* Projects — dark section */}
      <section className="projects-section section-dark">
        <div className="projects__section-header reveal">
          <h2 className="projects__section-title">Projects</h2>
          <p className="projects__section-sub">
            Independent work — from freelance gigs to products I&apos;m building.
          </p>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </section>
    </>
  );
}
