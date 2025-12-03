"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface FAQItemData {
  id: number
  question: string
  answer: string
}

interface FAQItemProps {
  data: FAQItemData
  className?: string
}

const FAQItem = ({ data, className = "" }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}>
      {/* Question Header */}
      <motion.div 
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {data.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <div className="w-6 h-6 relative">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-4 h-0.5 bg-blue-600 rounded-full" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-0.5 h-4 bg-blue-600 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Answer Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeIn" },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {data.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQItem