import AnimatedBlogGrid from "@/components/sections/blogs/AnimatedBlogGrid"
import { getAllBlogs } from "@/lib/mdx"

export default function BlogsPage() {
  const blogs = getAllBlogs()

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Dental Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oral Health & Dental Care
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert dental knowledge from Sai Dental Clinic.
          </p>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedBlogGrid blogs={blogs} />
        </div>
      </section>
    </>
  )
}
