"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import PageHeading from '@/components/common-ui/headers/PageHeading'

export interface SubscribeSectionData {
  // No specific data needed for this simple version
}

interface SubscribeSectionProps {
  data?: SubscribeSectionData
}

const SubscribeSection = ({ data }: SubscribeSectionProps) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <section className="py-12 md:py-16 bg-white w-full">
      <ContentContainer> {/* Remove the override - use default padding */}
        <div className="w-full"> {/* Remove mobile padding override */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full">
            {/* Left Side - Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 min-w-0"
            >
              <PageHeading 
                wrapperClassName="items-start" 
                className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 text-left break-words"
              >
                Subscribe for exclusive<br />content & news
              </PageHeading>
            </motion.div>

            {/* Right Side - Subscribe Form with integrated button */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 min-w-0"
            >
              <form onSubmit={handleSubmit} className="w-full">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors duration-200 pr-28 sm:pr-32 text-sm sm:text-base"
                    placeholder="Enter your company email"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-black text-white px-4 sm:px-6 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 text-right">name@email.com</p>
              </form>
            </motion.div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}

export default SubscribeSection