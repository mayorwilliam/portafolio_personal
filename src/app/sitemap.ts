import { getAllPosts } from "@/lib/mdx";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://guillermo.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: "https://guillermo.dev", lastModified: new Date(), priority: 1 },
    { url: "https://guillermo.dev/blog", lastModified: new Date(), priority: 0.8 },
    ...blogUrls,
  ];
}
