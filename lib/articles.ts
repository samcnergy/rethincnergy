import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorBio?: string;
  tags: string[];
  coverImage?: string;
  content: string;
  readingTimeMinutes: number;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

function readArticleFile(filename: string): Article | null {
  const filePath = path.join(CONTENT_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx?$/, "");
  const words = content.trim().split(/\s+/).length;
  const readingTimeMinutes = Math.max(1, Math.round(words / 220));
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? new Date().toISOString()),
    author: String(data.author ?? "ReTHINK CNERGY"),
    authorBio: data.authorBio ? String(data.authorBio) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    content,
    readingTimeMinutes,
  };
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(readArticleFile)
    .filter((a): a is Article => a !== null)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}
