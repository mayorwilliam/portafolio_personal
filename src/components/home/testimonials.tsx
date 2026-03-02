"use client";

import type { Testimonial } from "@/types/schema";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
    return (
        <AnimatedSection className="py-32">
            <div className="container px-4 sm:px-8">
                <div className="mb-16 text-center">
                    <p className="inline-block text-xs font-mono uppercase tracking-[0.15em] bg-foreground text-background rounded-full px-3 py-1 mb-3">Testimonials</p>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
                        What People Say
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                        Feedback from colleagues and clients I&apos;ve had the pleasure of working with.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
