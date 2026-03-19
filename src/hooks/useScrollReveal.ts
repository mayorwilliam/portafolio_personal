"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveals = el.querySelectorAll(".reveal");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay =
              (entry.target as HTMLElement).dataset.delay || "0";
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, parseInt(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach((el, i) => {
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(".reveal"));
        const index = siblings.indexOf(el);
        if (index > 0) {
          (el as HTMLElement).dataset.delay = String(index * 80);
        }
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
