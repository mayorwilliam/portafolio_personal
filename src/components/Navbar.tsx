"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useActiveSection } from "@/hooks/useActiveSection";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => siteConfig.navItems.map((item) => item.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          {siteConfig.name.toUpperCase()}
        </Link>
        <div className="nav-links-left">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${
                activeSection === item.href.replace("#", "") ? " active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-links-right">
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
          <a href="#contact" className="nav-cta">
            HIRE ME
          </a>
        </div>
        <button
          className={`nav-hamburger${menuOpen ? " active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " active" : ""}`}>
        {siteConfig.navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-link"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" className="mobile-link" onClick={closeMenu}>
          CONTACT
        </a>
        <a
          href="#contact"
          className="nav-cta mobile-cta"
          onClick={closeMenu}
        >
          HIRE ME
        </a>
      </div>
    </nav>
  );
}
