"use client";

import { useEffect, useState } from "react";

export function useNavbarScroll(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
