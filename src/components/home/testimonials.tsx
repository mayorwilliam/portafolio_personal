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
        <AnimatedSection className="container py-20 px-4">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">What People Say</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Feedback from colleagues and clients I&apos;ve had the pleasure of working with.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <TestimonialCard testimonial={testimonial} />
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
}
