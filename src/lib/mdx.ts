import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
    },
    content,
  };
}
