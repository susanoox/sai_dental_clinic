// components/sections/dentists/DentistCard.tsx
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaUserMd, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

export interface DentistCardData {
  id: number
  name: string
  designation: string
  image: string
  slug: string
  experience: string
  education: string
  featured?: boolean
}

interface DentistCardProps {
  data: DentistCardData
  motionProps?: any
  className?: string
}

const DentistCard = ({ data, motionProps, className = "" }: DentistCardProps) => {
  return (
    <Link href={`/dentist/${data.id}`}>  {/* Changed from slug to id */}
      <motion.div
        {...motionProps}
        className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer ${className}`}
      >
        {/* ... rest of the component remains the same ... */}
        {/* Dentist Image */}
        <motion.div 
          className="relative h-72 bg-gray-100 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img 
            src={data.image} 
            alt={data.name}
            className="w-full h-full object-cover"
          />
          {data.featured && (
            <motion.div 
              className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Featured
            </motion.div>
          )}
        </motion.div>

        {/* Dentist Info */}
        <div className="p-6">
          {/* Name */}
          <motion.h3 
            className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {data.name}
          </motion.h3>

          {/* Designation */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
              {data.designation}
            </span>
          </motion.div>

          {/* Experience and Education */}
          <motion.div 
            className="space-y-3 text-sm text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <FaUserMd className="w-4 h-4 text-blue-500" />
              <span className="font-medium">Experience:</span>
              <span>{data.experience}</span>
            </div>
            <div className="flex items-start gap-2">
              <FaGraduationCap className="w-4 h-4 text-blue-500 mt-0.5" />
              <div>
                <span className="font-medium block">Education:</span>
                <span className="text-xs">{data.education}</span>
              </div>
            </div>
          </motion.div>

          {/* View Profile Button */}
          <motion.div 
            className="mt-6 flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            View Profile
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
    </Link>
  )
}

export default DentistCard