"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
    url: string;
    title?: string;
}

function getEmbedUrl(url: string): string | null {
    // YouTube
    const ytMatch = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

    // Loom
    const loomMatch = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
    if (loomMatch) return `https://www.loom.com/embed/${loomMatch[1]}`;

    return null;
}

function getThumbnail(url: string): string | null {
    const ytMatch = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (ytMatch) return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
    return null;
}

export function VideoEmbed({ url, title = "Video" }: VideoEmbedProps) {
    const [loaded, setLoaded] = useState(false);
    const embedUrl = getEmbedUrl(url);
    const thumbnail = getThumbnail(url);

    if (!embedUrl) return null;

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/20">
            {!loaded && thumbnail ? (
                <button
                    onClick={() => setLoaded(true)}
                    className="group relative flex h-full w-full items-center justify-center"
                    aria-label={`Play ${title}`}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={thumbnail}
                        alt={`Thumbnail for ${title}`}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-7 w-7 ml-1" />
                    </div>
                </button>
            ) : (
                <iframe
                    src={loaded ? embedUrl : undefined}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                />
            )}
        </div>
    );
}
