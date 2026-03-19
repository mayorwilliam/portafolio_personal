import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="about section-dark">
      <div className="about-container">
        <div className="about-text reveal">
          <p className="about-paragraph">
            I&apos;m a <span className="text-highlight">fullstack developer</span>{" "}
            with a passion for building robust, scalable applications. From
            designing intuitive frontends to architecting complex backend
            systems, I bring ideas to life through clean code and modern
            technologies.
          </p>
          <p className="about-paragraph">
            I specialize in the{" "}
            <span className="text-highlight">JavaScript ecosystem</span>,
            working with React, Node.js, and cloud platforms. I&apos;m also
            experienced in mobile development, DevOps, and database
            architecture.
          </p>
        </div>
        <div className="capabilities reveal" id="skills">
          <h3 className="capabilities-title">Capabilities</h3>
          <ul className="capabilities-list">
            {siteConfig.capabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
