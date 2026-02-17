import type { SocialLink } from "@/types/schema";
import { Github, Linkedin, Twitter, Youtube, Globe, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialLink["platform"], React.ComponentType<{ className?: string }>> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    youtube: Youtube,
    website: Globe,
    email: Mail,
};

interface SocialLinksProps {
    links: SocialLink[];
    className?: string;
    iconSize?: string;
}

export function SocialLinks({ links, className, iconSize = "h-5 w-5" }: SocialLinksProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {links.map((link) => {
                const Icon = iconMap[link.platform];
                const href = link.platform === "email" ? `mailto:${link.url}` : link.url;

                return (
                    <a
                        key={link.platform}
                        href={href}
                        target={link.platform === "email" ? undefined : "_blank"}
                        rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={link.label || link.platform}
                    >
                        <Icon className={iconSize} />
                    </a>
                );
            })}
        </div>
    );
}
