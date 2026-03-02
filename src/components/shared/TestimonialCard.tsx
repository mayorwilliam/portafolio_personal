import type { Testimonial } from "@/types/schema";

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
        <div className="relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-sm h-full flex flex-col">
            {/* Quote mark */}
            <div className="text-4xl font-display text-muted-foreground/15 leading-none mb-3 select-none">&ldquo;</div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {testimonial.quote}
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-border">
                {testimonial.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        className="h-9 w-9 rounded-full object-cover ring-2 ring-border"
                    />
                ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary ring-2 ring-border">
                        {initials}
                    </div>
                )}
                <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    );
}
