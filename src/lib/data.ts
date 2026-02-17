import type { PersonalInfo, Project, Experience, Skill, Testimonial, Post, SiteConfig } from "@/types/schema";

import personalData from "@/data/personal.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";
import testimonialsData from "@/data/testimonials.json";
import postsData from "@/data/posts.json";
import siteData from "@/data/site.json";

export function getPersonalInfo(): PersonalInfo {
    return personalData as PersonalInfo;
}

export function getProjects(): Project[] {
    return (projectsData as Project[]).sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return 0;
    });
}

export function getFeaturedProjects(): Project[] {
    return getProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getProjectCategories(): string[] {
    const categories = new Set((projectsData as Project[]).map((p) => p.category));
    return Array.from(categories);
}

export function getExperience(): Experience[] {
    return (experienceData as Experience[]).sort(
        (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
}

export function getSkills(): Skill[] {
    return skillsData as Skill[];
}

export function getTestimonials(): Testimonial[] {
    return (testimonialsData as Testimonial[]).sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return 0;
    });
}

export function getPosts(): Post[] {
    return (postsData as Post[])
        .filter((p) => p.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
    return (postsData as Post[]).find((p) => p.slug === slug && p.published);
}

export function getSiteConfig(): SiteConfig {
    return siteData as SiteConfig;
}
