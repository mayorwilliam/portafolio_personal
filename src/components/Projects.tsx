"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { siteConfig } from "@/data/site";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardKey = (e: React.KeyboardEvent, project: Project) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="projects-section section-dark">
      <div className="projects__container">
        <p className="projects__intro reveal">{siteConfig.projectsIntro}</p>

        <div className="projects__grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`projects__card reveal${project.darkText ? " projects__card--dark" : ""}`}
              style={{ background: project.gradient }}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => handleCardKey(e, project)}
            >
              {project.media?.logo ? (
                <div className="projects__card-logo-main">
                  <Image
                    src={project.media.logo}
                    alt={`${project.title.replace("\n", " ")} logo`}
                    width={200}
                    height={200}
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ) : project.media?.screenshot && (
                <div className="projects__card-bg">
                  <Image
                    src={project.media.screenshot}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              {project.featured && (
                <span className="projects__card-featured">Featured</span>
              )}

              <div className="projects__card-content">
                <span className="projects__card-name">
                  {project.title.replace("\n", " ")}
                </span>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
