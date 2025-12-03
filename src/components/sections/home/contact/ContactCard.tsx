"use client"

import React from 'react'
import { motion } from 'framer-motion'

export interface ContactInfoData {
  id: number
  city: string
  address: string
  phone?: string
  email?: string
}

interface ContactCardProps {
  data: ContactInfoData
  className?: string
}

const ContactCard = ({ data, className = "" }: ContactCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="flex items-start gap-4">
        {/* Bigger Location Icon */}
        <div className="flex-shrink-0 w-8 h-8">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold text-lg mb-2">{data.city}</h3>
          <p className="text-gray-600 leading-relaxed">{data.address}</p>
          {data.phone && (
            <p className="text-gray-600 mt-2">Phone: {data.phone}</p>
          )}
          {data.email && (
            <p className="text-gray-600 mt-1">Email: {data.email}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactCard