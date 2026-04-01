import Image from "next/image";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  brandColor?: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    company: "The Ksquare Group",
    role: "Senior FullStack Developer",
    period: "Aug 2023 – Oct 2025",
    location: "Remote",
    logo: "/images/ksquare-logo.png",
    brandColor: "#00B894",
    highlights: [
      "Full-stack apps serving thousands of concurrent users at 99.9% uptime",
      "40% query optimization with advanced PostgreSQL indexing",
      "Serverless AWS infrastructure (Lambda, API Gateway, EventBridge, CDK)",
      "60% DB load reduction via Redis caching strategies",
      "85%+ test coverage with CI/CD via GitHub Actions",
    ],
  },
  {
    company: "Yaydoo",
    role: "FullStack Developer",
    period: "Sep 2022 – Jun 2023",
    location: "Remote",
    logo: "/images/yaydoo-logo.png",
    brandColor: "#0984E3",
    highlights: [
      "Event-driven microservices with AWS SQS/SNS",
      "Containerized deployments to AWS ECS with auto-scaling",
      "Redis caching for session management and API performance",
    ],
  },
  {
    company: "Tresthold",
    role: "FullStack Developer",
    period: "Aug 2019 – Sep 2022",
    location: "Remote",
    logo: "/images/threshold-logo.png",
    brandColor: "#FDCB6E",
    highlights: [
      "Production apps with RESTful APIs and JWT authentication",
      "Docker containerization and AWS deployments (Lambda, EC2, ECS)",
      "CI/CD pipelines with GitHub Actions",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section section-dark">
      <h2 className="section-heading reveal">Experience</h2>
      <div className="exp-timeline">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="exp-card reveal"
            style={
              job.brandColor
                ? ({ "--brand-color": job.brandColor } as React.CSSProperties)
                : undefined
            }
          >
            <div className="exp-card__left">
              {job.logo && (
                <div className="exp-card__logo">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={80}
                    height={80}
                    unoptimized
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              )}
              <div className="exp-card__info">
                <h3 className="exp-card__company">{job.company}</h3>
                <span className="exp-card__role">{job.role}</span>
                <span className="exp-card__period">{job.period}</span>
              </div>
            </div>
            <div className="exp-card__right">
              <ul className="exp-card__highlights">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
