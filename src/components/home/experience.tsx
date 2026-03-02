import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import type { Experience as ExperienceType } from "@/types/schema";

interface ExperienceProps {
    experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
    return (
        <AnimatedSection className="container py-32 px-4 sm:px-8">
            <div className="mb-16">
                <p className="inline-block text-xs font-mono uppercase tracking-[0.15em] bg-foreground text-background rounded-full px-3 py-1 mb-3">Career</p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">Experience</h2>
            </div>

            <div className="relative space-y-0">
                {experiences.map((job, index) => (
                    <div
                        key={job.id}
                        className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-16 py-10 border-t border-border first:border-t-0 first:pt-0 last:pb-0"
                    >
                        {/* Period + Company — left column */}
                        <div className="space-y-1">
                            <span className="text-xs font-medium text-muted-foreground tracking-wide">
                                {job.period}
                            </span>
                            <div className="text-sm font-medium text-primary">
                                {job.companyUrl ? (
                                    <a
                                        href={job.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline underline-offset-4"
                                    >
                                        {job.company}
                                    </a>
                                ) : (
                                    job.company
                                )}
                            </div>
                        </div>

                        {/* Content — right column */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-foreground tracking-tight">
                                {job.role}
                            </h3>

                            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                {job.description.map((desc, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary/50" />
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            {job.techUsed.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {job.techUsed.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-[10px] rounded-full px-2.5">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    );
}
