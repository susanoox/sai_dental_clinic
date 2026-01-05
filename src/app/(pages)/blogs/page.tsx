"use client"

import ContactSection from '@/components/common-ui/contactForm/ContactSection'
import SubscribeSection from '@/components/sections/subscribe/SubscribeSection'
import { contactLocations } from '@/data/contact/contact'
import { subscribeData } from '@/data/home/subscribe'
import { blogsData } from '@/data/blog/blogs'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function BlogsPage() {
  // Access the data from the blogsData object
  const { sectionTitle, heading, description, blogs } = blogsData
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      {/* Hero Section for Blogs */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              {sectionTitle}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href={`/blogs/${blog.id}`}
                  className="group block"
                >
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    {/* Blog Image */}
                    <div className="h-48 overflow-hidden">
                      {blog.image ? (
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                          <div className="text-5xl text-blue-300">📄</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Blog Content */}
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <FaCalendar className="w-3 h-3" aria-hidden="true" />
                            <time dateTime={blog.date}>{blog.date}</time>
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="w-3 h-3" aria-hidden="true" />
                            {blog.readTime}
                          </span>
                        </div>
                        {blog.category && (
                          <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                            {blog.category}
                          </span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {blog.excerpt}
                      </p>
                      
                      {/* Read More */}
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 mt-auto">
                        <span>Read More</span>
                        <FaArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactSection locations={contactLocations} />
      <SubscribeSection data={subscribeData} />
    </>
  )
}