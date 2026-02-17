import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

const mockTestimonial = {
    id: "test-1",
    name: "Jane Doe",
    role: "CTO",
    company: "Acme Inc",
    quote: "Amazing developer with great attention to detail.",
    featured: true,
};

const mockTestimonialWithAvatar = {
    ...mockTestimonial,
    id: "test-2",
    avatarUrl: "https://example.com/avatar.jpg",
};

describe("TestimonialCard", () => {
    it("renders the quote", () => {
        render(<TestimonialCard testimonial={mockTestimonial} />);
        expect(screen.getByText(/Amazing developer/)).toBeInTheDocument();
        cleanup();
    });

    it("renders name and role", () => {
        render(<TestimonialCard testimonial={mockTestimonial} />);
        expect(screen.getByText("Jane Doe")).toBeInTheDocument();
        expect(screen.getByText("CTO, Acme Inc")).toBeInTheDocument();
        cleanup();
    });

    it("shows initials when no avatar is provided", () => {
        render(<TestimonialCard testimonial={mockTestimonial} />);
        expect(screen.getByText("JD")).toBeInTheDocument();
        cleanup();
    });

    it("shows avatar image when avatarUrl is provided", () => {
        render(<TestimonialCard testimonial={mockTestimonialWithAvatar} />);
        const img = screen.getByAltText("Jane Doe");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
        cleanup();
    });
});
