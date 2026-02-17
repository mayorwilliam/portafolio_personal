import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, getPosts, getPersonalInfo } from "@/lib/data";
import { generatePageMetadata } from "@/lib/metadata";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};
    return generatePageMetadata(post.title, post.summary, `/blog/${slug}`);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const personal = getPersonalInfo();

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4 max-w-3xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>

                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-mono text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {post.readingTime} min read
                    </span>
                </div>

                <article className="prose dark:prose-invert prose-sm max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary prose-pre:border prose-pre:border-border">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </article>
            </div>

            <Footer socialLinks={personal.socialLinks} name={personal.name} />
        </main>
    );
}
