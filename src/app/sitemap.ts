import type { MetadataRoute } from "next";
import { getSiteConfig, getProjects, getPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const site = getSiteConfig();
    const baseUrl = site.siteUrl;

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = getProjects().map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    const postRoutes: MetadataRoute.Sitemap = getPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
