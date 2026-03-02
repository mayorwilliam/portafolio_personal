import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { ProjectFilter } from "@/components/shared/ProjectFilter";
import { getProjects, getProjectCategories, getPersonalInfo } from "@/lib/data";
import { generatePageMetadata } from "@/lib/metadata";
import { Suspense } from "react";

export const metadata = generatePageMetadata(
    "Projects",
    "Showcase of my technical projects and experiments.",
    "/projects"
);

interface ProjectsPageProps {
    searchParams: Promise<{ category?: string }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
    const { category } = await searchParams;
    const allProjects = getProjects();
    const categories = getProjectCategories();
    const personal = getPersonalInfo();

    const filtered = category
        ? allProjects.filter((p) => p.category === category)
        : allProjects;

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4 sm:px-8">
                <p className="inline-block text-xs font-mono uppercase tracking-[0.15em] bg-foreground text-background rounded-full px-3 py-1 mb-3">Portfolio</p>
                <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">Projects</h1>
                <p className="text-muted-foreground mb-10 max-w-xl text-sm leading-relaxed">
                    A comprehensive list of my work, featuring fullstack applications, open source contributions, and technical experiments.
                </p>

                <Suspense fallback={null}>
                    <ProjectFilter categories={categories} />
                </Suspense>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="text-center text-muted-foreground py-16 text-sm">
                        No projects found in this category.
                    </p>
                )}
            </div>

            <Footer socialLinks={personal.socialLinks} name={personal.name} />
        </main>
    );
}
