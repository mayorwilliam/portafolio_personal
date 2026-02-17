import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getProjects, getPersonalInfo } from "@/lib/data";
import { generatePageMetadata } from "@/lib/metadata";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const projects = getProjects();
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};
    return generatePageMetadata(project.title, project.description, `/projects/${slug}`);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const personal = getPersonalInfo();
    const allProjects = getProjects();
    const relatedProjects = allProjects
        .filter((p) => p.slug !== slug && p.category === project.category)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4 max-w-4xl mx-auto">
                <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Link>

                <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="capitalize font-mono">{project.category}</Badge>
                    <Badge variant={project.status === "completed" ? "default" : "secondary"} className="capitalize">
                        {project.status}
                    </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground mb-8">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </Button>
                        </a>
                    )}
                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                <Github className="mr-2 h-4 w-4" /> Source Code
                            </Button>
                        </a>
                    )}
                </div>

                {project.videoUrl && (
                    <div className="mb-10">
                        <VideoEmbed url={project.videoUrl} title={project.title} />
                    </div>
                )}

                {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border mb-10">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {project.screenshots && project.screenshots.length > 0 && (
                    <div className="grid gap-4 sm:grid-cols-2 mb-10">
                        {project.screenshots.map((src, i) => (
                            <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-border">
                                <Image src={src} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>

                {project.longDescription && (
                    <article className="prose dark:prose-invert prose-sm max-w-none mb-16 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary prose-pre:border prose-pre:border-border">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {project.longDescription}
                        </ReactMarkdown>
                    </article>
                )}

                {relatedProjects.length > 0 && (
                    <section className="border-t border-border pt-12">
                        <h2 className="text-2xl font-bold tracking-tight mb-8">Related Projects</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {relatedProjects.map((p) => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                    </section>
                )}
            </div>

            <Footer socialLinks={personal.socialLinks} name={personal.name} />
        </main>
    );
}
