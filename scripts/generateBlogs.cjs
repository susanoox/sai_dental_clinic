const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")

const BLOG_DIR = path.join(process.cwd(), "src/content/blogs")
const OUT_FILE = path.join(process.cwd(), "src/generated/blogs.json")

const blogs = fs
  .readdirSync(BLOG_DIR)
  .filter(file => file.endsWith(".mdx"))
  .map(file => {
    const slug = file.replace(".mdx", "")
    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
    const { data, content } = matter(source)

    return {
      slug,
      ...data,
      content
    }
  })

fs.writeFileSync(OUT_FILE, JSON.stringify(blogs, null, 2))
console.log("✅ Blogs generated")
