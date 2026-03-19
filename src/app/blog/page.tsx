import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Guillermo",
  description: "Articles about web development, architecture, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="blog-list section-dark">
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p style={{ color: "var(--text-white-muted)" }}>
          No posts yet. Check back soon!
        </p>
      ) : (
        posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blog-post-card"
          >
            <h2>{post.title}</h2>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.description && <p>{post.description}</p>}
          </Link>
        ))
      )}
    </main>
  );
}
