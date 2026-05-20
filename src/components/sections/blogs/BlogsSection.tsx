"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import BlogCard, { BlogCardData } from './BlogCard'
import { BlogSectionData } from '@/data/blog/blogs'

interface BlogsSectionProps {
  data: BlogSectionData
}

const BlogsSection = ({ data }: BlogsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="py-16 bg-white">
      <ContentContainer className="items-center justify-center space-y-12">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <SectionTitleText wrapperClassName='items-center'>
            <span className="text-blue-600">
              {data.sectionTitle || 'Blogs'}
            </span>
          </SectionTitleText>
          <PageHeading 
            wrapperClassName="items-center" 
            className="text-4xl lg:text-5xl text-gray-900 text-center mb-6"
          >
            {data.heading}
          </PageHeading>
          <p className="text-xl text-gray-600 mt-4">
            {data.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {data.blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              data={{
                id: blog.id,
                title: blog.title,
                excerpt: blog.excerpt || '',
                date: blog.date || '',
                readTime: blog.readTime || '',
                image: blog.image || '',
                category: blog.category || '',
                slug: blog.slug
              }}
              motionProps={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, ease: "easeOut", delay: index * 0.05 },
              }}
            />
          ))}
        </motion.div>

        <div className="text-center">
        </div>
      </ContentContainer>
    </section>
  )
}

export default BlogsSection

export type { BlogCardData } from './BlogCard'