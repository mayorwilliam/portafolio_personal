import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-dark">
      <div className="contact-container">
        <h2 className="contact-heading reveal">
          Let&apos;s work <span className="gradient-text">together</span>.
        </h2>
        <p className="contact-subtext reveal">
          Have a project in mind? Let&apos;s build something amazing.
        </p>
        <a href={`mailto:${siteConfig.email}`} className="contact-email reveal">
          {siteConfig.email}
        </a>
        <div className="contact-actions reveal">
          <a href={`mailto:${siteConfig.email}`} className="btn-primary">
            GET IN TOUCH
          </a>
          <a href={siteConfig.cvUrl} className="btn-secondary">
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}
