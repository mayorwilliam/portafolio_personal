"use client";

import { Project } from "@/types/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
        >
            <Link href={`/projects/${project.slug}`}>
                <div className="relative aspect-video w-full overflow-hidden bg-muted/20">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/30 flex items-center justify-center">
                            <span className="font-mono text-sm text-muted-foreground">{project.title}</span>
                        </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
                        <div className="flex gap-3">
                            {project.demoUrl && (
                                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                                    <ExternalLink className="mr-1.5 h-3 w-3" /> Live Demo
                                </span>
                            )}
                            {project.videoUrl && (
                                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                                    <Play className="mr-1.5 h-3 w-3" /> Video
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>

            <div className="p-6">
                <Link href={`/projects/${project.slug}`}>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {project.title}
                    </h3>
                </Link>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono text-[10px]">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    {project.repoUrl ? (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary flex items-center transition-colors" onClick={(e) => e.stopPropagation()}>
                            <Github className="mr-2 h-4 w-4" /> View Code
                        </a>
                    ) : <div />}

                    <Badge variant="outline" className="text-[10px] font-mono capitalize">
                        {project.category}
                    </Badge>
                </div>
            </div>
        </motion.div>
    );
}
