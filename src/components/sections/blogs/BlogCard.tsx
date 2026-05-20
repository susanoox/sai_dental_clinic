"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
    <Link href={`/blogs/${data.slug}`} className="block">
      <motion.div
        {...motionProps}
        className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer ${className}`}
      >
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          <Image 
            src={data.image} 
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
          {data.category && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
              {data.category}
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span>{data.date}</span>
            <span>•</span>
            <span>{data.readTime} read</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {data.title}
          </h3>

          <p className="text-gray-600 line-clamp-3 mb-4">
            {data.excerpt}
          </p>

          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
            Read More
            <svg 
              className="w-4 h-4 ml-2"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default BlogCard