import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { getPosts, getPersonalInfo } from "@/lib/data";
import { generatePageMetadata } from "@/lib/metadata";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
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

            <div className="container pt-32 px-4 sm:px-8 max-w-3xl mx-auto">
                <p className="inline-block text-xs font-mono uppercase tracking-[0.15em] bg-foreground text-background rounded-full px-3 py-1 mb-3">Writing</p>
                <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">Blog</h1>
                <p className="text-muted-foreground mb-12 max-w-lg text-sm leading-relaxed">
                    Thoughts on software engineering, architecture, and tech.
                </p>

                {posts.length === 0 ? (
                    <div className="max-w-md mx-auto py-16 text-center">
                        <p className="text-sm text-muted-foreground">No posts published yet.</p>
                    </div>
                ) : (
                    <div className="space-y-0">
                        {posts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                                <article className="py-8 border-t border-border first:border-t-0 first:pt-0 transition-colors">
                                    <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="h-3 w-3" />
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="h-3 w-3" />
                                            {post.readingTime} min
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h2 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h2>
                                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                                                {post.summary}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {post.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="text-[10px] rounded-full px-2.5">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <ArrowUpRight className="h-4 w-4 flex-shrink-0 mt-1 text-muted-foreground/30 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
