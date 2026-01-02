"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import BlogCard, { BlogCardData } from './BlogCard'
import { BlogSectionData } from '@/data/blog/blogs' // Import the new interface

interface BlogsSectionProps {
  data: BlogSectionData // Change from BlogsSectionData to BlogSectionData
}

const BlogsSection = ({ data }: BlogsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-16 bg-white">
      <ContentContainer className="items-center justify-center space-y-12">
        {/* Header with Motion */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <SectionTitleText wrapperClassName='items-center'>
            <motion.span 
              className="text-blue-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {data.sectionTitle || 'Blogs'}
            </motion.span>
          </SectionTitleText>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <PageHeading 
              wrapperClassName="items-center" 
              className="text-4xl lg:text-5xl text-gray-900 text-center mb-6"
            >
              {data.heading}
            </PageHeading>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* Blogs Grid with Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {data.blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              data={{
                id: blog.id,
                title: blog.title,
                excerpt: blog.excerpt,
                date: blog.date,
                readTime: blog.readTime,
                image: blog.image,
                category: blog.category,
                slug: blog.slug
              }}
              motionProps={{
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.25 },
                transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
                whileHover: { y: -8, scale: 1.02 },
                whileTap: { scale: 0.98 }
              }}
            />
          ))}
        </motion.div>

        {/* See All Button with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          {/* Add a "View All Blogs" button if you have a dedicated blogs page */}
        </motion.div>
      </ContentContainer>
    </section>
  )
}

export default BlogsSection

// Export the old interface for backward compatibility
export type { BlogCardData } from './BlogCard'