export default function Showcase() {
  const whatIBuild = [
    "Websites & Landing Pages",
    "Mobile Apps",
    "Full Systems & SaaS",
    "AI-Powered Features",
    "Payment Platforms",
    "Business Automation",
  ];

  return (
    <section className="showcase section-dark">
      <div className="bento-grid">
        {/* Big stat: Years */}
        <div className="bento-card bento-card--stat reveal">
          <span className="bento-number">6+</span>
          <span className="bento-label">Years Building Software</span>
        </div>

        {/* What I Build */}
        <div className="bento-card bento-card--tech bento-card--wide reveal">
          <span className="bento-label">What I Build</span>
          <div className="bento-chips">
            {whatIBuild.map((item) => (
              <span key={item} className="bento-chip">
                {item}
              </span>
            ))}
          </div>
          <span className="bento-tech-note">
            Node.js · React Native · AWS · PostgreSQL · AI/LLM
          </span>
        </div>

        {/* Currently building */}
        <div className="bento-card bento-card--current bento-card--wide reveal">
          <span className="bento-eyebrow">Currently Building</span>
          <span className="bento-project">WallyMe</span>
          <span className="bento-project-desc">
            A personal finance app that uses AI to categorize your expenses
            automatically — 95%+ accuracy
          </span>
        </div>

        {/* Apps stat */}
        <div className="bento-card bento-card--stat reveal">
          <span className="bento-number">10+</span>
          <span className="bento-label">Apps in Production</span>
        </div>
      </div>
    </section>
  );
}
