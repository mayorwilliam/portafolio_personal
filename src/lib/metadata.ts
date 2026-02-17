import type { Metadata } from "next";
import { getSiteConfig, getPersonalInfo } from "./data";

export function generatePageMetadata(
    title: string,
    description: string,
    path: string = ""
): Metadata {
    const site = getSiteConfig();
    const personal = getPersonalInfo();
    const fullTitle = `${title} | ${personal.name}`;
    const url = `${site.siteUrl}${path}`;

    return {
        title: fullTitle,
        description,
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: site.siteName,
            locale: site.locale,
            type: "website",
            ...(site.ogImage && { images: [{ url: site.ogImage }] }),
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
        },
    };
}
