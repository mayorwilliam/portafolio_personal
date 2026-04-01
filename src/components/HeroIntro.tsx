"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function HeroIntro() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("fade-out");
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-intro section-dark">
      <div className="hero-intro__container">
        <p className="hero-intro__label reveal">
          G U I L L E R M O
          <span ref={cursorRef} className="hero-cursor">
            |
          </span>
        </p>

        <div className="hero-intro__grid">
          <div className="hero-intro__statement">
            <h1 className="hero-intro__title reveal">
              <span className="gradient-text">Fullstack Developer</span>.
              <br />
              I build websites, apps
              <br />
              &amp; entire systems
              <br />
              from the ground up.
            </h1>
            <p className="hero-intro__bio reveal">
              I&apos;m a{" "}
              <span className="text-highlight">senior software engineer</span>{" "}
              who owns projects end to end — from the first wireframe to a live
              product handling thousands of users. I&apos;ve built payment
              platforms, AI-powered mobile apps, and business tools used by real
              companies every day.
            </p>
            <p className="hero-intro__bio reveal">
              Based in Mexico, working{" "}
              <span className="text-highlight">100% remote</span>, bilingual
              English and Spanish. I care about{" "}
              <span className="text-highlight">shipping fast</span>, writing
              code that lasts, and making sure what I build actually solves the
              problem it was meant to solve.
            </p>
            <a href="#projects" className="hero-intro__cta reveal">
              See the products I&apos;ve built{" "}
              <span className="hero-cta-link">and how they performed ⟶</span>
            </a>
          </div>

          <div className="hero-intro__sidebar">
            <div className="hero-intro__photo reveal">
              <Image
                src="/images/me.png"
                alt="Guillermo - Fullstack Developer"
                width={400}
                height={400}
                priority
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

            <div className="hero-intro__lists">
              <div className="hero-intro__capabilities reveal">
                <h3 className="hero-intro__cap-title">Capabilities</h3>
                <ul className="hero-intro__cap-list">
                  {siteConfig.capabilities.map((cap) => (
                    <li key={cap}>{cap}</li>
                  ))}
                </ul>
              </div>

              <div className="hero-intro__capabilities reveal">
                <h3 className="hero-intro__cap-title">Tech Stack</h3>
                <ul className="hero-intro__cap-list">
                  {siteConfig.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hero-intro__stats reveal">
              <div className="hero-intro__stat">
                <span className="hero-intro__stat-number">6+</span>
                <span className="hero-intro__stat-label">Years</span>
              </div>
              <div className="hero-intro__stat">
                <span className="hero-intro__stat-number">10+</span>
                <span className="hero-intro__stat-label">Apps in Prod</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
