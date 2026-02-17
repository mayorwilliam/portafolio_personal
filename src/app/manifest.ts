import type { MetadataRoute } from "next";
import { getSiteConfig, getPersonalInfo } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
    const site = getSiteConfig();
    const personal = getPersonalInfo();

    return {
        name: site.siteName,
        short_name: personal.name,
        description: personal.bio,
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",
        theme_color: "#7c3aed",
        icons: [
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    };
}
