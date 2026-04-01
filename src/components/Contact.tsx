import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-dark">
      <div className="contact-container">
        <h2 className="contact-heading reveal">
          Have an idea?
          <br />
          Let&apos;s make it real.
        </h2>
        <p className="contact-subtext reveal">
          Whether you need a website, a mobile app, or a full system from
          scratch — tell me what you&apos;re building and I&apos;ll tell you how
          I can help.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="contact-email reveal"
        >
          {siteConfig.email}
        </a>
        <div className="contact-actions reveal">
          <a href={`mailto:${siteConfig.email}`} className="btn-primary">
            START A CONVERSATION
          </a>
          <a href={siteConfig.cvUrl} className="btn-secondary" target="_blank" rel="noopener noreferrer" download>
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}
