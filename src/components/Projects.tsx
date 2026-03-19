"use client";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section section-dark">
      <h2 className="section-heading reveal">Projects</h2>
      <div className="pj-grid">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`pj-card reveal${project.featured ? " pj-card--featured" : ""}${project.darkText ? " pj-card--dark-text" : ""}`}
            style={{ background: project.gradient }}
          >
            {/* Tags — top left */}
            <div className="pj-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="pj-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Company badge for professional */}
            {project.company && (
              <span className="pj-card__company">{project.company}</span>
            )}

            {/* Title — bottom of card */}
            <h3 className="pj-card__title">
              {project.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < project.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>

            {/* Hover overlay */}
            <div className="pj-card__overlay">
              <p className="pj-card__desc">{project.description}</p>
              <div className="pj-card__links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pj-card__link"
                  >
                    Demo ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pj-card__link"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
