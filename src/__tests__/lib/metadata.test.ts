import { describe, it, expect } from "vitest";
import { generatePageMetadata } from "@/lib/metadata";

describe("generatePageMetadata", () => {
    it("generates metadata with title and description", () => {
        const meta = generatePageMetadata("Projects", "My projects showcase", "/projects");
        expect(meta.title).toContain("Projects");
        expect(meta.description).toBe("My projects showcase");
    });

    it("includes OpenGraph metadata", () => {
        const meta = generatePageMetadata("Blog", "Tech blog", "/blog");
        expect(meta.openGraph).toBeDefined();
        expect(meta.openGraph!.title).toContain("Blog");
        expect(meta.openGraph!.description).toBe("Tech blog");
        expect(meta.openGraph!.url).toContain("/blog");
    });

    it("includes Twitter card metadata", () => {
        const meta = generatePageMetadata("Test", "Test description");
        expect(meta.twitter).toBeDefined();
        expect(meta.twitter!.card).toBe("summary_large_image");
    });
});
