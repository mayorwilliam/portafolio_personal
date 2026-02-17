import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import type { Experience as ExperienceType } from "@/types/schema";

interface ExperienceProps {
    experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
    return (
        <AnimatedSection className="container py-20 px-4">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Experience</h2>

            <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
                {experiences.map((job) => (
                    <div key={job.id} className="relative pl-8 md:pl-12">
                        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                            <span className="text-sm font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                {job.period}
                            </span>
                        </div>

                        <div className="text-lg text-primary mb-4 font-medium">
                            {job.companyUrl ? (
                                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {job.company}
                                </a>
                            ) : (
                                job.company
                            )}
                        </div>

                        <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground mb-4">
                            {job.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>

                        {job.techUsed.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                                {job.techUsed.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="font-mono text-[10px]">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </AnimatedSection>
    );
}
