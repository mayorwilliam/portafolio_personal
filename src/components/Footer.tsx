import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer section-light">
      <div className="footer-container">
        <div className="footer-social">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
