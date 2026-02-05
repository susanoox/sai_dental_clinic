"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaCalendar, FaClock, FaArrowRight } from "react-icons/fa"
import { BlogMeta } from "@/lib/mdx"

export default function AnimatedBlogGrid({ blogs }: { blogs: BlogMeta[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {blogs.map(blog => (
        <motion.div
          key={blog.slug}
          variants={itemVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <Link href={`/blogs/${blog.slug}`} className="group block">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {blog.readTime}
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-blue-600 font-semibold mt-auto">
                  Read More <FaArrowRight className="ml-2" />
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
