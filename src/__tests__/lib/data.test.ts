import { describe, it, expect } from "vitest";
import {
    getPersonalInfo,
    getProjects,
    getFeaturedProjects,
    getProjectBySlug,
    getProjectCategories,
    getExperience,
    getSkills,
    getTestimonials,
    getPosts,
    getPostBySlug,
    getSiteConfig,
} from "@/lib/data";

describe("getPersonalInfo", () => {
    it("returns personal info with required fields", () => {
        const info = getPersonalInfo();
        expect(info.name).toBeDefined();
        expect(info.title).toBeDefined();
        expect(info.bio).toBeDefined();
        expect(info.email).toBeDefined();
        expect(info.socialLinks).toBeInstanceOf(Array);
        expect(info.heroTechHighlights).toBeInstanceOf(Array);
        expect(["available", "busy", "not-available"]).toContain(info.availabilityStatus);
    });
});

describe("getProjects", () => {
    it("returns an array of projects", () => {
        const projects = getProjects();
        expect(projects).toBeInstanceOf(Array);
        expect(projects.length).toBeGreaterThan(0);
    });

    it("sorts featured projects first", () => {
        const projects = getProjects();
        const firstNonFeaturedIdx = projects.findIndex((p) => !p.featured);
        if (firstNonFeaturedIdx > 0) {
            const allBefore = projects.slice(0, firstNonFeaturedIdx);
            expect(allBefore.every((p) => p.featured)).toBe(true);
        }
    });

    it("each project has required fields", () => {
        const projects = getProjects();
        for (const p of projects) {
            expect(p.id).toBeDefined();
            expect(p.title).toBeDefined();
            expect(p.slug).toBeDefined();
            expect(p.description).toBeDefined();
            expect(p.techStack).toBeInstanceOf(Array);
            expect(p.category).toBeDefined();
            expect(p.status).toBeDefined();
            expect(typeof p.featured).toBe("boolean");
        }
    });
});

describe("getFeaturedProjects", () => {
    it("returns only featured projects", () => {
        const featured = getFeaturedProjects();
        expect(featured.every((p) => p.featured)).toBe(true);
    });

    it("returns a subset of all projects", () => {
        const all = getProjects();
        const featured = getFeaturedProjects();
        expect(featured.length).toBeLessThanOrEqual(all.length);
    });
});

describe("getProjectBySlug", () => {
    it("returns a project for a valid slug", () => {
        const projects = getProjects();
        const project = getProjectBySlug(projects[0].slug);
        expect(project).toBeDefined();
        expect(project!.slug).toBe(projects[0].slug);
    });

    it("returns undefined for an invalid slug", () => {
        const project = getProjectBySlug("non-existent-slug-xyz");
        expect(project).toBeUndefined();
    });
});

describe("getProjectCategories", () => {
    it("returns unique categories", () => {
        const categories = getProjectCategories();
        expect(categories).toBeInstanceOf(Array);
        expect(new Set(categories).size).toBe(categories.length);
    });

    it("categories match project data", () => {
        const categories = getProjectCategories();
        const projects = getProjects();
        const projectCategories = new Set(projects.map((p) => p.category));
        expect(categories.sort()).toEqual(Array.from(projectCategories).sort());
    });
});

describe("getExperience", () => {
    it("returns experiences sorted by start date descending", () => {
        const experiences = getExperience();
        expect(experiences.length).toBeGreaterThan(0);
        for (let i = 1; i < experiences.length; i++) {
            const prev = new Date(experiences[i - 1].startDate).getTime();
            const curr = new Date(experiences[i].startDate).getTime();
            expect(prev).toBeGreaterThanOrEqual(curr);
        }
    });
});

describe("getSkills", () => {
    it("returns an array of skills with name and category", () => {
        const skills = getSkills();
        expect(skills.length).toBeGreaterThan(0);
        for (const skill of skills) {
            expect(skill.name).toBeDefined();
            expect(skill.category).toBeDefined();
        }
    });
});

describe("getTestimonials", () => {
    it("returns testimonials with featured first", () => {
        const testimonials = getTestimonials();
        expect(testimonials.length).toBeGreaterThan(0);
        const firstNonFeaturedIdx = testimonials.findIndex((t) => !t.featured);
        if (firstNonFeaturedIdx > 0) {
            const allBefore = testimonials.slice(0, firstNonFeaturedIdx);
            expect(allBefore.every((t) => t.featured)).toBe(true);
        }
    });
});

describe("getPosts", () => {
    it("returns only published posts", () => {
        const posts = getPosts();
        expect(posts.every((p) => p.published)).toBe(true);
    });

    it("returns posts sorted by date descending", () => {
        const posts = getPosts();
        for (let i = 1; i < posts.length; i++) {
            const prev = new Date(posts[i - 1].date).getTime();
            const curr = new Date(posts[i].date).getTime();
            expect(prev).toBeGreaterThanOrEqual(curr);
        }
    });
});

describe("getPostBySlug", () => {
    it("returns a post for a valid slug", () => {
        const posts = getPosts();
        if (posts.length > 0) {
            const post = getPostBySlug(posts[0].slug);
            expect(post).toBeDefined();
            expect(post!.slug).toBe(posts[0].slug);
        }
    });

    it("returns undefined for an invalid slug", () => {
        const post = getPostBySlug("non-existent-post-xyz");
        expect(post).toBeUndefined();
    });
});

describe("getSiteConfig", () => {
    it("returns site config with required fields", () => {
        const config = getSiteConfig();
        expect(config.siteUrl).toBeDefined();
        expect(config.siteName).toBeDefined();
        expect(config.locale).toBeDefined();
    });
});
