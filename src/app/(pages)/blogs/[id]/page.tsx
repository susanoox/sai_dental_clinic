"use client"

import ContactSection from '@/components/common-ui/contactForm/ContactSection'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import SubscribeSection from '@/components/sections/home/subscribe/SubscribeSection'
import { contactLocations } from '@/data/contact/contact'
import { subscribeData } from '@/data/home/subscribe'
import { blogsData } from '@/data/blog/blogs'
import { FaCalendar, FaUser, FaClock, FaShareAlt } from 'react-icons/fa'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { BlogCardData } from '@/components/sections/blogs/BlogCard'
import Link from 'next/link'
export default function BlogDetailPage() {
  const params = useParams()
  const blogId = params.id as string
  
  // Find the blog by ID
  const blogs: BlogCardData[] = blogsData.blogs
  const blog = blogs.find(b => b.id.toString() === blogId)

  // If blog not found, show 404
  if (!blog) {
    notFound()
  }

  return (
    <>
      <ContentContainer>
        {/* Blog Header */}
        <div className="py-12 text-center">
          <div className="mb-6">
            {blog.category && (
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            )}
          </div>
          
          <PageHeading 
            children={blog.title} 
            className="text-4xl md:text-5xl mb-6"
          />
          
          {/* Blog Meta */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <FaCalendar className="w-4 h-4" />
              <span>{blog.date || "Jan 1, 2024"}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="w-4 h-4" />
              <span>{blog.readTime || "5 min read"}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
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

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <ContentText children={blog.excerpt || ""} />
            
            {/* Additional content - you can extend this */}
            <ContentText children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Why This Matters for Your Dental Health
            </h2>
            <ContentText children="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Practical Tips and Recommendations
            </h2>
            <ContentText children="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
          </div>

          {/* Share Section */}
    <div className="py-8 border-t border-b border-gray-200 mb-12">
    <div className="flex items-center justify-between">
        <span className="text-gray-700 font-semibold">Share this article:</span>
        <div className="flex items-center gap-4">
        <button 
            className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200"
            onClick={() => {
            // Add share functionality
            if (navigator.share) {
                navigator.share({
                title: blog.title,
                text: blog.excerpt,
                url: window.location.href,
                });
            } else {
                // Fallback: Copy to clipboard
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
            }}
            aria-label="Share this article"
            title="Share this article on social media"
        >
            <FaShareAlt className="w-5 h-5" aria-hidden="true" />
            <span className="sr-only">Share</span>
        </button>
        {/* Add more social share buttons as needed */}
        </div>
    </div>
    </div>

          {/* Related Articles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs
                .filter(b => b.id.toString() !== blogId)
                .slice(0, 3)
                .map((relatedBlog: BlogCardData, index: number) => (
                  <Link 
                    key={relatedBlog.id}
                    href={`/blogs/${relatedBlog.id}`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </ContentContainer>

      <ContactSection locations={contactLocations} />
      <SubscribeSection data={subscribeData} />
    </>
  )
}