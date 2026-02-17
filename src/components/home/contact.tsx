"use client";

import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight, Mail } from "lucide-react";
import type { PersonalInfo } from "@/types/schema";

interface ContactProps {
    personal: PersonalInfo;
}

export function Contact({ personal }: ContactProps) {
    return (
        <AnimatedSection className="container py-20 px-4 max-w-2xl mx-auto text-center" id="contact">
            <div className="mb-8 p-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto text-primary">
                <Mail className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let&apos;s work together</h2>
            <p className="text-muted-foreground mb-4 text-lg">
                Interested in building something awesome? I&apos;m currently{" "}
                {personal.availabilityStatus === "available"
                    ? "open for new opportunities and freelance projects."
                    : personal.availabilityStatus === "busy"
                    ? "busy but feel free to reach out for future collaborations."
                    : "not available at the moment."}
            </p>

            <SocialLinks links={personal.socialLinks} className="justify-center mb-8" />

            <div className="bg-card border border-border rounded-2xl p-8 text-left shadow-2xl">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
                            <input
                                id="contact-name"
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
                        <textarea
                            id="contact-message"
                            className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <Button className="w-full" size="lg">
                        Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            </div>
        </AnimatedSection>
    );
}
