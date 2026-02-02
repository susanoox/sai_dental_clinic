"use client"

import ContactSection from '@/components/common-ui/contactForm/ContactSection'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import SubscribeSection from '@/components/sections/subscribe/SubscribeSection'
import { contactLocations } from '@/data/contact/contact'
import { subscribeData } from '@/data/home/subscribe'
import { blogsData, getBlogById, BlogDetailData } from '@/data/blog/blogs'
import { FaCalendar, FaUser, FaClock, FaShareAlt, FaCheck } from 'react-icons/fa'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function BlogDetailPage() {
  const params = useParams()
  const blogId = params.id as string
  
  // Find the blog by ID using the helper function
  const blog = getBlogById(blogId)

  // If blog not found, show 404
  if (!blog) {
    notFound()
  }

  // Get featured checklist if exists
  const featureChecklist = (blog as BlogDetailData).featureChecklist || []
  
  // Get details page data if exists
  const detailsData = (blog as BlogDetailData).detailsPageData || []

  // Function to render description paragraphs with proper formatting
  const renderDescription = (description: string[]) => {
    return description.map((paragraph, index) => {
      // Check if it's a bold paragraph starting with **
      if (paragraph.startsWith('**') && paragraph.includes('**:')) {
        const [boldPart, ...rest] = paragraph.split(':')
        const boldText = boldPart.replace(/\*\*/g, '')
        const normalText = rest.join(':')
        return (
          <div key={index} className="mb-4">
            <strong className="text-lg text-gray-800 block mb-1">{boldText}:</strong>
            <p className="text-gray-600 leading-relaxed">{normalText}</p>
          </div>
        )
      }
      // Check if it's a numbered list item
      else if (/^\d+\./.test(paragraph)) {
        return (
          <div key={index} className="mb-3 ml-6">
            <p className="text-gray-600 leading-relaxed">{paragraph}</p>
          </div>
        )
      }
      // Regular paragraph
      else {
        return (
          <div key={index} className="mb-6">
            <p className="text-gray-600 leading-relaxed text-base">{paragraph}</p>
          </div>
        )
      }
    })
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
            {(blog as BlogDetailData).author && (
              <div className="flex items-center gap-2">
                <FaUser className="w-4 h-4" />
                <span>{(blog as BlogDetailData).author}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {(blog as BlogDetailData).tags && (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {(blog as BlogDetailData).tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
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
            {/* Excerpt as introduction */}
            <div className="mb-10">
              <p className="text-xl font-medium text-gray-700 leading-relaxed">
                {blog.excerpt || ""}
              </p>
            </div>
            
            {/* Dynamic sections from detailsPageData */}
            {detailsData.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {renderDescription(section.description)}
                </div>
              </div>
            ))}

            {/* Feature Checklist */}
            {featureChecklist.length > 0 && (
              <div className="mt-12 mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                  Key Takeaways
                </h2>
                <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                  <ul className="space-y-4">
                    {featureChecklist.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <FaCheck className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Share Section */}
          <div className="py-8 border-t border-b border-gray-200 mb-12">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold text-lg">Share this article:</span>
              <div className="flex items-center gap-4">
                <button 
                  className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200"
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
                  <FaShareAlt className="w-6 h-6" aria-hidden="true" />
                  <span className="sr-only">Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogsData.blogs
                .filter(b => b.id.toString() !== blogId)
                .slice(0, 3)
                .map((relatedBlog, index: number) => (
                  <Link 
                    key={relatedBlog.id}
                    href={`/blogs/${relatedBlog.id}`}
                    className="block p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
                  >
                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {relatedBlog.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                      <span className="font-medium">{relatedBlog.category}</span>
                      <span>{relatedBlog.readTime}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </ContentContainer>

    </>
  )
}