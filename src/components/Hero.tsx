"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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
        <div className="hero-row">
          <div className="hero-text">
            <p className="hero-label reveal">
              G U I L L E R M O
              <span ref={cursorRef} className="hero-cursor">
                |
              </span>
            </p>
            <h1 className="hero-title reveal">
              <span className="gradient-text">Fullstack Developer</span>.
              <br />
              I build websites, apps
              <br />
              &amp; entire systems
              <br />
              from the ground up.
            </h1>
            <a href="#projects" className="hero-cta reveal">
              See the products I&apos;ve built{" "}
              <span className="hero-cta-link">and how they performed ⟶</span>
            </a>
          </div>
          <div className="hero-photo reveal">
            <Image
              src="/images/me.png"
              alt="Guillermo - Fullstack Developer"
              width={400}
              height={400}
              priority
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
