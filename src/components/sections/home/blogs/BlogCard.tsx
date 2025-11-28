"use client"

import React from 'react'
import { motion } from 'framer-motion'

export interface BlogCardData {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category?: string
  slug: string
}

interface BlogCardProps {
  data: BlogCardData
  motionProps?: any
  className?: string
}

const BlogCard = ({ data, motionProps, className = "" }: BlogCardProps) => {
  return (
    <motion.div
      {...motionProps}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer ${className}`}
    >
      {/* Blog Image with Motion */}
      <motion.div 
        className="relative h-48 bg-gray-100 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover"
        />
        {data.category && (
          <motion.div 
            className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {data.category}
          </motion.div>
        )}
      </motion.div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Date and Read Time with Motion */}
        <motion.div 
          className="flex items-center gap-4 text-sm text-gray-500 mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span>{data.date}</span>
          <span>•</span>
          <span>{data.readTime} read</span>
        </motion.div>

        {/* Title with Motion */}
        <motion.h3 
          className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {data.title}
        </motion.h3>

        {/* Excerpt with Motion */}
        <motion.p 
          className="text-gray-600 line-clamp-3 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {data.excerpt}
        </motion.p>

        {/* Read More Link with Motion */}
        <motion.div 
          className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          Read More
          <motion.svg 
            className="w-4 h-4 ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BlogCard