import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { getPosts, getPersonalInfo } from "@/lib/data";
import { generatePageMetadata } from "@/lib/metadata";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = generatePageMetadata(
    "Blog",
    "Thoughts on software engineering, architecture, and tech.",
    "/blog"
);

export default function BlogPage() {
    const posts = getPosts();
    const personal = getPersonalInfo();

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
                <p className="text-muted-foreground mb-12 max-w-2xl">
                    Thoughts on software engineering, architecture, and tech.
                </p>

                {posts.length === 0 ? (
                    <div className="max-w-md mx-auto p-6 rounded-lg border border-dashed border-border bg-card/50 text-center">
                        <span className="text-sm font-mono text-muted-foreground">No posts published yet.</span>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                                <article className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {post.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="font-mono text-[10px]">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <h2 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {post.summary}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {post.readingTime} min read
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Footer socialLinks={personal.socialLinks} name={personal.name} />
        </main>
    );
}
