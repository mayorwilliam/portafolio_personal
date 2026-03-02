"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";
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
        <AnimatedSection className="py-32">
            <div className="container px-4 sm:px-8">
                <div className="mb-16">
                    <p className="inline-block text-xs font-mono uppercase tracking-[0.15em] bg-foreground text-background rounded-full px-3 py-1 mb-3">Expertise</p>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">Technical Skills</h2>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(grouped).map(([category, items], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.06 }}
                            className="space-y-5"
                        >
                            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground pb-3 border-b border-border">
                                {categoryLabels[category] || category}
                            </h3>
                            <div className="space-y-3">
                                {items.map((skill) => (
                                    <div key={skill.name}>
                                        <span className="text-sm text-foreground">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
