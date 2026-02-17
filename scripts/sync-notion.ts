#!/usr/bin/env npx tsx
/**
 * Notion Sync Script
 *
 * Fetches data from Notion databases and writes to local JSON files.
 * The JSON files are the runtime data source; this script updates them.
 *
 * Usage:
 *   npm run sync:notion
 *
 * Required env vars (set in .env or pass inline):
 *   NOTION_TOKEN=your_notion_api_key
 *   NOTION_PROJECTS_DATABASE_ID=your_database_id
 *   NOTION_EXPERIENCE_DATABASE_ID=your_database_id
 *
 * Notion database schemas are documented below each fetch function.
 */

import { Client } from "@notionhq/client";
import { writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Load .env if dotenv is available
try {
    const dotenv = await import("dotenv");
    dotenv.config();
} catch {
    // dotenv not installed, rely on env vars being set
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = resolve(__dirname, "../src/data");

// ─── Notion Helpers ──────────────────────────────────────────────

function getClient(): Client {
    if (!process.env.NOTION_TOKEN) {
        console.error("Error: NOTION_TOKEN is not set.");
        console.error("Set it in .env or pass it inline: NOTION_TOKEN=xxx npm run sync:notion");
        process.exit(1);
    }
    return new Client({ auth: process.env.NOTION_TOKEN });
}

function getText(props: Record<string, any>, key: string): string {
    const prop = props[key];
    if (!prop) return "";
    if (prop.type === "title") {
        return prop.title?.map((t: any) => t.plain_text).join("") ?? "";
    }
    if (prop.type === "rich_text") {
        return prop.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
    }
    return "";
}

function getSelect(props: Record<string, any>, key: string): string {
    return props[key]?.select?.name ?? "";
}

function getMultiSelect(props: Record<string, any>, key: string): string[] {
    return props[key]?.multi_select?.map((i: any) => i.name) ?? [];
}

function getCheckbox(props: Record<string, any>, key: string): boolean {
    return props[key]?.checkbox ?? false;
}

function getUrl(props: Record<string, any>, key: string): string | undefined {
    return props[key]?.url || undefined;
}

function getDate(props: Record<string, any>, key: string): string {
    return props[key]?.date?.start ?? "";
}

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

// ─── Sync Projects ───────────────────────────────────────────────
/**
 * Expected Notion database properties:
 * - Title (title): Project name
 * - Description (rich_text): Short description
 * - Long Description (rich_text): Detailed markdown content
 * - Category (select): fullstack | frontend | backend | mobile | devops | ai-ml
 * - Status (select): completed | in-progress | archived
 * - Tech Stack (multi_select): Technologies used
 * - Demo URL (url): Live demo link
 * - Repo URL (url): Source code link
 * - Image (url): Cover image URL
 * - Video URL (url): Demo video link
 * - Featured (checkbox): Whether to feature on homepage
 */
async function syncProjects(notion: Client) {
    const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID;
    if (!databaseId) {
        console.log("  Skipping projects (NOTION_PROJECTS_DATABASE_ID not set)");
        return;
    }

    console.log("Syncing projects...");

    const pages: any[] = [];
    let cursor: string | undefined;

    do {
        const response: any = await notion.databases.query({
            database_id: databaseId,
            start_cursor: cursor,
            sorts: [{ property: "Title", direction: "ascending" }],
        });
        pages.push(...response.results);
        cursor = response.has_more ? response.next_cursor : undefined;
    } while (cursor);

    const projects = pages.map((page: any, index: number) => {
        const props = page.properties;
        const title = getText(props, "Title");

        return {
            id: `proj-${index + 1}`,
            title,
            slug: slugify(title),
            description: getText(props, "Description"),
            longDescription: getText(props, "Long Description") || undefined,
            techStack: getMultiSelect(props, "Tech Stack"),
            demoUrl: getUrl(props, "Demo URL"),
            repoUrl: getUrl(props, "Repo URL"),
            image: getUrl(props, "Image"),
            videoUrl: getUrl(props, "Video URL"),
            screenshots: [],
            category: getSelect(props, "Category") || "fullstack",
            status: getSelect(props, "Status") || "completed",
            featured: getCheckbox(props, "Featured"),
        };
    });

    writeFileSync(
        resolve(DATA_DIR, "projects.json"),
        JSON.stringify(projects, null, 4) + "\n"
    );
    console.log(`  Synced ${projects.length} projects`);
}

// ─── Sync Experience ─────────────────────────────────────────────
/**
 * Expected Notion database properties:
 * - Role (title): Job title
 * - Company (rich_text): Company name
 * - Company URL (url): Company website
 * - Period (rich_text): Display period (e.g., "Jan 2023 - Present")
 * - Start Date (date): Start date
 * - End Date (date): End date (empty = current)
 * - Description (rich_text): Bullet points separated by newlines
 * - Tech Used (multi_select): Technologies used
 */
async function syncExperience(notion: Client) {
    const databaseId = process.env.NOTION_EXPERIENCE_DATABASE_ID;
    if (!databaseId) {
        console.log("  Skipping experience (NOTION_EXPERIENCE_DATABASE_ID not set)");
        return;
    }

    console.log("Syncing experience...");

    const pages: any[] = [];
    let cursor: string | undefined;

    do {
        const response: any = await notion.databases.query({
            database_id: databaseId,
            start_cursor: cursor,
            sorts: [{ property: "Start Date", direction: "descending" }],
        });
        pages.push(...response.results);
        cursor = response.has_more ? response.next_cursor : undefined;
    } while (cursor);

    const experience = pages.map((page: any, index: number) => {
        const props = page.properties;
        const descriptionText = getText(props, "Description");

        return {
            id: `exp-${index + 1}`,
            company: getText(props, "Company"),
            companyUrl: getUrl(props, "Company URL"),
            role: getText(props, "Role"),
            period: getText(props, "Period"),
            startDate: getDate(props, "Start Date"),
            endDate: getDate(props, "End Date") || undefined,
            description: descriptionText
                .split("\n")
                .map((line: string) => line.trim())
                .filter(Boolean),
            techUsed: getMultiSelect(props, "Tech Used"),
        };
    });

    writeFileSync(
        resolve(DATA_DIR, "experience.json"),
        JSON.stringify(experience, null, 4) + "\n"
    );
    console.log(`  Synced ${experience.length} experiences`);
}

// ─── Main ────────────────────────────────────────────────────────

async function main() {
    if (!existsSync(DATA_DIR)) {
        console.error(`Data directory not found: ${DATA_DIR}`);
        process.exit(1);
    }

    const notion = getClient();

    await syncProjects(notion);
    await syncExperience(notion);

    console.log("Done!");
}

main().catch((err) => {
    console.error("Sync failed:", err.message);
    process.exit(1);
});
