"use client";

import Link from "next/link";
import { ArrowUp, Terminal } from "lucide-react";
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
        <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-2 text-foreground">
                        <Terminal className="h-5 w-5 text-primary" />
                        <span className="text-lg font-bold tracking-tighter font-mono">dev_portfolio</span>
                    </div>

                    <nav className="flex gap-6">
                        {navLinks.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <SocialLinks links={socialLinks} />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} {name}. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        aria-label="Back to top"
                    >
                        Back to top <ArrowUp className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
