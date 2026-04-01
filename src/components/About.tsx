import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="about section-dark">
      <div className="about-container">
        <div className="about-text reveal">
          <p className="about-paragraph">
            I&apos;m a{" "}
            <span className="text-highlight">senior software engineer</span> who
            owns projects end to end — from the first wireframe to a live
            product handling thousands of users. I&apos;ve built payment
            platforms, AI-powered mobile apps, and business tools used by real
            companies every day.
          </p>
          <p className="about-paragraph">
            Based in Mexico, working{" "}
            <span className="text-highlight">100% remote</span>, bilingual
            English and Spanish. I care about{" "}
            <span className="text-highlight">shipping fast</span>, writing code
            that lasts, and making sure what I build actually solves the problem
            it was meant to solve.
          </p>
        </div>
        <div className="capabilities reveal" id="skills">
          <h3 className="capabilities-title">What I Deliver</h3>
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
