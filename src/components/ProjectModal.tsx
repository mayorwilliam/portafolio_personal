"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setActive(false);
    setTimeout(onClose, 200);
  }, [onClose]);

  // Mount portal + entrance animation
  useEffect(() => {
    if (!project) {
      setMounted(false);
      setActive(false);
      return;
    }
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setActive(true));
    });
  }, [project]);

  // Body scroll lock
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Escape key + auto-focus
  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [project, handleClose]);

  if (!mounted || !project) return null;

  return createPortal(
    <div
      className={`pj-modal-backdrop${active ? " pj-modal--active" : ""}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pj-modal-title"
    >
      <div className="pj-modal" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          className="pj-modal__close"
          onClick={handleClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Gradient banner */}
        <div
          className="pj-modal__gradient"
          style={{ background: project.gradient }}
        >
          {project.image && (
            <div className="pj-modal__logo">
              <Image
                src={project.image}
                alt={`${project.title.replace("\n", " ")} logo`}
                width={64}
                height={64}
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </div>

        {/* Header */}
        <div className="pj-modal__body">
          <h3 className="pj-modal__title" id="pj-modal-title">
            {project.title.replace("\n", " ")}
          </h3>

          <div className="pj-modal__meta">
            {project.timeline && <span>{project.timeline}</span>}
            {project.company && (
              <>
                <span className="pj-modal__meta-sep">·</span>
                {project.companyUrl ? (
                  <a
                    href={project.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pj-modal__company-link"
                  >
                    {project.company} ↗
                  </a>
                ) : (
                  <span>{project.company}</span>
                )}
              </>
            )}
          </div>

          <div className="pj-modal__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="pj-modal__tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="pj-modal__desc">{project.longDescription}</p>

          {/* Tech stack chips */}
          <div className="pj-modal__section">
            <h4 className="pj-modal__section-title">Tech Stack</h4>
            <div className="pj-modal__chips">
              {project.techStack.map((tech) => (
                <span key={tech} className="pj-modal__chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div className="pj-modal__section">
              <h4 className="pj-modal__section-title">Highlights</h4>
              <ul className="pj-modal__highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer links */}
        {(project.demoUrl || project.repoUrl) && (
          <div className="pj-modal__footer">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pj-modal__link pj-modal__link--primary"
              >
                View Demo ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pj-modal__link pj-modal__link--secondary"
              >
                View Code ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
