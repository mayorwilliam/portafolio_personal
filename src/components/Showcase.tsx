import Image from "next/image";

export default function Showcase() {
  return (
    <section className="showcase section-dark">
      <div className="showcase-grid">
        <div className="showcase-card reveal">
          <Image
            src="/images/avatar.png"
            alt="Developer Avatar"
            width={600}
            height={450}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="showcase-card showcase-brand reveal">
          <div className="brand-text">
            <span className="brand-accent">DEV</span>
            <span className="brand-bars">▎▎▎▎▎▎▎</span>
          </div>
        </div>
        <div className="showcase-card reveal">
          <Image
            src="/images/project-dashboard.png"
            alt="Code Screenshot"
            width={600}
            height={450}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
