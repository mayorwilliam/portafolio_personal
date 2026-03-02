"use client";

import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight } from "lucide-react";
import type { PersonalInfo } from "@/types/schema";

interface ContactProps {
    personal: PersonalInfo;
}

export function Contact({ personal }: ContactProps) {
    return (
        <AnimatedSection className="container py-32 px-4 sm:px-8" id="contact">
            <div className="max-w-2xl mx-auto">
                <div className="mb-12 text-center">
                    <p className="inline-block text-xs font-mono uppercase tracking-[0.15em] bg-foreground text-background rounded-full px-3 py-1 mb-3">Contact</p>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
                        Let&apos;s work together
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                        {personal.availabilityStatus === "available"
                            ? "I'm currently open for new opportunities and freelance projects."
                            : personal.availabilityStatus === "busy"
                            ? "I'm currently busy, but feel free to reach out for future collaborations."
                            : "I'm not available at the moment."}
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="contact-name" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent transition-shadow"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contact-email" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent transition-shadow"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="contact-message" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                className="min-h-[140px] w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent transition-shadow resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <Button className="w-full rounded-full h-12 text-sm font-semibold" size="lg">
                            Send Message <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </div>

                <div className="mt-8 flex justify-center">
                    <SocialLinks links={personal.socialLinks} className="justify-center" iconSize="h-[18px] w-[18px]" />
                </div>
            </div>
        </AnimatedSection>
    );
}
