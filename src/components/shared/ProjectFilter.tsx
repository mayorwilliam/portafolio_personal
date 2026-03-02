"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
    categories: string[];
}

const categoryLabels: Record<string, string> = {
    fullstack: "Full Stack",
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    devops: "DevOps",
    "ai-ml": "AI / ML",
};

export function ProjectFilter({ categories }: ProjectFilterProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const active = searchParams.get("category") || "all";

    function setCategory(category: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (category === "all") {
            params.delete("category");
        } else {
            params.set("category", category);
        }
        router.push(`/projects?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="flex flex-wrap gap-2 mb-10">
            <button
                onClick={() => setCategory("all")}
                className={cn(
                    "rounded-full px-4 py-2 text-xs font-medium transition-all",
                    active === "all"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
            >
                All
            </button>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={cn(
                        "rounded-full px-4 py-2 text-xs font-medium transition-all",
                        active === cat
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    )}
                >
                    {categoryLabels[cat] || cat}
                </button>
            ))}
        </div>
    );
}
