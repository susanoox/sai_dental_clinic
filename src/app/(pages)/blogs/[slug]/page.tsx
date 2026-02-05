      import { notFound } from "next/navigation"
      import Link from "next/link"
      import { FaCalendar, FaUser, FaClock, FaShareAlt } from "react-icons/fa"

      import MDXRenderer from "@/components/mdx/MDXRenderer"

      import ContentContainer from "@/components/common-ui/containers/ContentContainer"
      import PageHeading from "@/components/common-ui/headers/PageHeading"

      import { getBlogBySlug, getAllBlogs } from "@/lib/mdx"

      interface PageProps {
        params: {
          slug: string
        }
      }

      export default async function BlogDetailPage({ params }: PageProps) {
        const blog = await getBlogBySlug(params.slug)

        if (!blog) notFound()

        const relatedBlogs = getAllBlogs()
          .filter(b => b.slug !== params.slug)
          .slice(0, 3)

        return (
          <ContentContainer>
            {/* Blog Header */}
            <div className="py-12 text-center">
              {blog.category && (
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                  {blog.category}
                </span>
              )}

              <PageHeading className="text-4xl md:text-5xl mb-6">
                {blog.title}
              </PageHeading>

              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>

                {blog.author && (
                  <div className="flex items-center gap-2">
                    <FaUser className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                )}
              </div>

              {blog.tags && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {blog.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {blog.image && (
              <div className="mb-12 rounded-xl overflow-hidden">
                <div className="w-full h-[400px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12 text-gray-800">
                <div className="mb-10">
                  <p className="text-xl font-medium text-gray-700 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <MDXRenderer source={blog.content} />


              </div>

              <div className="py-8 border-t border-b border-gray-200 mb-12">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-semibold text-lg">
                    Share this article:
                  </span>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `${blog.title} - ${blog.excerpt}`
                    )}`}
                    target="_blank"
                    className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                  >
                    <FaShareAlt className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  Related Articles
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedBlogs.map(related => (
                    <Link
                      key={related.slug}
                      href={`/blogs/${related.slug}`}
                      className="block p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
                    >
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                        {related.title}
                      </h4>

                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {related.excerpt}
                      </p>

                      <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                        <span className="font-medium">{related.category}</span>
                        <span>{related.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ContentContainer>
        )
      }
