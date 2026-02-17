export interface SocialLink {
    platform: "github" | "linkedin" | "twitter" | "youtube" | "website" | "email";
    url: string;
    label?: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    email: string;
    socialLinks: SocialLink[];
    availabilityStatus: "available" | "busy" | "not-available";
    resumeUrl?: string;
    heroTechHighlights: string[];
}

export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    techStack: string[];
    demoUrl?: string;
    repoUrl?: string;
    image?: string;
    videoUrl?: string;
    screenshots?: string[];
    category: "fullstack" | "frontend" | "backend" | "mobile" | "devops" | "ai-ml";
    status: "completed" | "in-progress" | "archived";
    featured: boolean;
}

export interface Experience {
    id: string;
    company: string;
    companyUrl?: string;
    role: string;
    period: string;
    startDate: string;
    endDate?: string;
    description: string[];
    techUsed: string[];
}

export interface Skill {
    name: string;
    category: "frontend" | "backend" | "devops" | "mobile" | "tools" | "databases" | "ai-ml" | "testing";
    level?: number;
    icon?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    quote: string;
    avatarUrl?: string;
    featured: boolean;
}

export interface Post {
    id: string;
    title: string;
    slug: string;
    date: string;
    summary: string;
    content: string;
    tags: string[];
    readingTime: number;
    published: boolean;
}

export interface SiteConfig {
    siteUrl: string;
    siteName: string;
    locale: string;
    ogImage?: string;
}
