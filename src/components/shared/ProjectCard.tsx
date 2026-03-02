"use client";

import { Project } from "@/types/schema";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-md"
        >
            <Link href={`/projects/${project.slug}`}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/30">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20" />
                            <span className="text-xs text-muted-foreground/60 tracking-wide relative z-10">
                                {project.title}
                            </span>
                        </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/5 group-hover:opacity-100">
                        <div className="flex gap-2">
                            {project.demoUrl && (
                                <span className="inline-flex items-center rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground">
                                    <ExternalLink className="mr-1.5 h-3 w-3" /> Live
                                </span>
                            )}
                            {project.videoUrl && (
                                <span className="inline-flex items-center rounded-full bg-card px-3.5 py-1.5 text-xs font-medium text-card-foreground">
                                    <Play className="mr-1.5 h-3 w-3" /> Video
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>

            <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                    <Link href={`/projects/${project.slug}`}>
                        <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                            {project.title}
                        </h3>
                    </Link>
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="mb-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[10px] rounded-full px-2.5">
                            {tech}
                        </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                        <Badge variant="secondary" className="text-[10px] rounded-full px-2.5">
                            +{project.techStack.length - 4}
                        </Badge>
                    )}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                    {project.repoUrl ? (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github className="h-3.5 w-3.5" /> Source
                        </a>
                    ) : <div />}

                    <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
