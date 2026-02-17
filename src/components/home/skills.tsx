import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/types/schema";

const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    devops: "DevOps",
    mobile: "Mobile",
    "ai-ml": "AI / ML",
    testing: "Testing",
    tools: "Tools",
};

interface SkillsProps {
    skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
    const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <AnimatedSection className="container py-20 px-4 bg-secondary/20 rounded-3xl my-20">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Technical Arsenal</h2>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(grouped).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-base font-mono uppercase tracking-wider text-primary border-b border-border pb-2">
                            {categoryLabels[category] || category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <div key={skill.name} className="flex flex-col gap-1">
                                    <Badge variant="outline" className="text-sm py-1 px-3 bg-background/50 hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">
                                        {skill.name}
                                    </Badge>
                                    {skill.level != null && (
                                        <div className="h-1 w-full bg-secondary overflow-hidden rounded-full">
                                            <div className="h-full bg-primary/50" style={{ width: `${skill.level}%` }} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    );
}
