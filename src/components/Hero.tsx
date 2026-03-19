"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
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
    <section id="hero" className="hero section-dark">
      <div className="hero-content">
        <p className="hero-label reveal">
          G U I L L E R M O
          <span ref={cursorRef} className="hero-cursor">
            |
          </span>
        </p>
        <h1 className="hero-title reveal">
          <span className="gradient-text">Fullstack Developer</span>.
          <br />
          Crafting scalable
          <br />
          systems &amp; beautiful
          <br />
          digital experiences.
        </h1>
        <a href="#current" className="hero-cta reveal">
          Come and see what I&apos;m currently{" "}
          <span className="hero-cta-link">working on ⟶</span>
        </a>
      </div>
    </section>
  );
}
