"use client";

import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/SocialLinks";
import Link from "next/link";
import { ArrowRight, Code2, Database, Layout, Cloud, Container } from "lucide-react";
import { motion } from "framer-motion";
import type { PersonalInfo } from "@/types/schema";

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "React/Next.js": Code2,
    "Node.js/NestJS": Database,
    PostgreSQL: Database,
    AWS: Cloud,
    Docker: Container,
};

interface HeroProps {
    personal: PersonalInfo;
}

const statusLabels: Record<string, string> = {
    available: "Available for hire",
    busy: "Currently busy",
    "not-available": "Not available",
};

export function Hero({ personal }: HeroProps) {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

            <div className="container px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary font-mono backdrop-blur-sm"
                >
                    <span className={`mr-2 flex h-2 w-2 rounded-full ${personal.availabilityStatus === "available" ? "bg-green-500 animate-pulse" : personal.availabilityStatus === "busy" ? "bg-yellow-500" : "bg-red-500"}`} />
                    {statusLabels[personal.availabilityStatus]}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                >
                    {personal.title.split(" ").map((word, i) => (
                        <span key={i}>
                            {i === Math.floor(personal.title.split(" ").length / 2) ? (
                                <span className="text-primary">{word}</span>
                            ) : (
                                word
                            )}{" "}
                        </span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl font-mono"
                >
                    {personal.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/projects">
                        <Button size="lg" className="h-12 px-8 text-base">
                            View Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href={`mailto:${personal.email}`}>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm">
                            Contact Me
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8"
                >
                    <SocialLinks links={personal.socialLinks} className="justify-center" iconSize="h-5 w-5" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center gap-8 opacity-70"
                >
                    {personal.heroTechHighlights.map((tech) => {
                        const Icon = techIcons[tech] || Layout;
                        return (
                            <div key={tech} className="flex items-center gap-2 text-muted-foreground">
                                <Icon className="h-5 w-5" /> {tech}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
