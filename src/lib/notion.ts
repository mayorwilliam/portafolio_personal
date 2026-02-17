/**
 * Notion CMS integration check.
 *
 * Data is served from JSON files in src/data/ via src/lib/data.ts.
 * To sync from Notion, run: npm run sync:notion
 *
 * Required env vars:
 * - NOTION_TOKEN
 * - NOTION_PROJECTS_DATABASE_ID
 * - NOTION_EXPERIENCE_DATABASE_ID
 */

export function isNotionConfigured(): boolean {
    return !!(process.env.NOTION_TOKEN && process.env.NOTION_PROJECTS_DATABASE_ID);
}
