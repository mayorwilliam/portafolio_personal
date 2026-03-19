import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.meta.title} | Guillermo`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="blog-post section-dark">
      <Link href="/blog" className="blog-back">
        ← Back to blog
      </Link>
      <h1>{post.meta.title}</h1>
      <p className="blog-meta">
        {new Date(post.meta.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="mdx-content">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
