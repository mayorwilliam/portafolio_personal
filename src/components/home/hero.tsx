"use client";

import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/SocialLinks";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import type { PersonalInfo } from "@/types/schema";

interface HeroProps {
    personal: PersonalInfo;
}

const statusConfig: Record<string, { label: string; color: string; pulse: boolean }> = {
    available: { label: "Open to work", color: "bg-emerald-500", pulse: true },
    busy: { label: "Currently busy", color: "bg-amber-500", pulse: false },
    "not-available": { label: "Not available", color: "bg-red-500", pulse: false },
};

export function Hero({ personal }: HeroProps) {
    const status = statusConfig[personal.availabilityStatus] || statusConfig.available;
    const words = personal.title.split(" ");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container px-4 sm:px-8 pt-32 pb-24">
                <div className="max-w-4xl mx-auto">
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-10"
                    >
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                {status.pulse && (
                                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${status.color} opacity-75`} />
                                )}
                                <span className={`relative inline-flex h-2 w-2 rounded-full ${status.color}`} />
                            </span>
                            <span className="text-muted-foreground">{status.label}</span>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-6"
                    >
                        {personal.name}
                    </motion.p>

                    {/* Main heading — editorial serif style */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-[-0.06em] uppercase mb-8"
                    >
                        {words.map((word, i) => (
                            <span key={i} className="inline-block mr-[0.2em]">
                                {word}
                            </span>
                        ))}
                    </motion.h1>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-xl text-lg leading-relaxed text-muted-foreground mb-10"
                    >
                        {personal.bio}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-start gap-4 mb-12"
                    >
                        <Link href="/projects">
                            <Button size="lg" className="h-12 px-8 text-sm font-semibold tracking-wide rounded-full">
                                View my work <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href={`mailto:${personal.email}`}>
                            <Button variant="outline" size="lg" className="h-12 px-8 text-sm font-semibold tracking-wide rounded-full">
                                Get in touch
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Social + Tech row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 border-t border-border"
                    >
                        <SocialLinks links={personal.socialLinks} iconSize="h-[18px] w-[18px]" />

                        <div className="hidden sm:block h-4 w-px bg-border" />

                        <div className="flex flex-wrap gap-3">
                            {personal.heroTechHighlights.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-mono uppercase text-muted-foreground/70 tracking-wide"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="h-5 w-5 text-muted-foreground/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
