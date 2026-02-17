import type { Testimonial } from "@/types/schema";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    const initials = testimonial.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

            <p className="mb-6 text-muted-foreground leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3">
                {testimonial.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                        {initials}
                    </div>
                )}
                <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    );
}
