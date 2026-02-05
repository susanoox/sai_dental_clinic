import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

const BLOG_DIR = path.join(process.cwd(), "src/content/blogs")

export interface BlogMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
  author?: string
  tags?: string[]
  featured?: boolean
}

export interface BlogWithContent extends BlogMeta {
  content: MDXRemoteSerializeResult
}

/* LIST PAGE */
export function getAllBlogs(): BlogMeta[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter(file => file.endsWith(".mdx"))
    .map(file => {
      const slug = file.replace(".mdx", "")
      const source = fs.readFileSync(
        path.join(BLOG_DIR, file),
        "utf8"
      )

      const { data } = matter(source)

      return {
        slug,
        ...(data as Omit<BlogMeta, "slug">),
      }
    })
}

/* DETAIL PAGE */
export async function getBlogBySlug(
  slug: string
): Promise<BlogWithContent | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(source)

  const mdxSource = await serialize(content)

  return {
    slug,
    ...(data as Omit<BlogMeta, "slug">),
    content: mdxSource, // ✅ serialized
  }
}
