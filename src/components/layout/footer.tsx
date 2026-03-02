"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SocialLinks } from "@/components/shared/SocialLinks";
import type { SocialLink } from "@/types/schema";

interface FooterProps {
    socialLinks: SocialLink[];
    name: string;
}

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
];

export function Footer({ socialLinks, name }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-foreground text-background">
            <div className="container mx-auto px-4 sm:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-background text-foreground text-xs font-bold font-display">
                                G
                            </span>
                            <span className="text-sm font-semibold tracking-tight">{name}</span>
                        </div>
                        <p className="text-sm text-background/60 leading-relaxed max-w-xs">
                            Building software that matters.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <p className="text-xs font-mono uppercase tracking-[0.15em] text-background/50">Navigation</p>
                        <nav className="flex flex-col gap-2.5">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className="text-sm font-mono uppercase text-background/70 transition-colors hover:text-background w-fit"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <p className="text-xs font-mono uppercase tracking-[0.15em] text-background/50">Connect</p>
                        <SocialLinks links={socialLinks} />
                    </div>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-background/15">
                    <p className="text-xs font-mono text-background/50">
                        &copy; {new Date().getFullYear()} {name}
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs font-mono uppercase text-background/50 transition-colors hover:text-background"
                        aria-label="Back to top"
                    >
                        Back to top
                        <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
