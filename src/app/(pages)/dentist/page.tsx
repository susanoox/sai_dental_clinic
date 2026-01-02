// app/dentists/page.tsx
"use client"

import ContactSection from '@/components/common-ui/contactForm/ContactSection'
import SubscribeSection from '@/components/sections/home/subscribe/SubscribeSection'
import { contactLocations } from '@/data/contact/contact'
import { subscribeData } from '@/data/home/subscribe'
import { dentistsData } from '@/data/dentists/dentists'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DentistsPage() {
  const { heading, description, dentists } = dentistsData

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
      {/* Hero Section for Dentists */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <ContentContainer className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </ContentContainer>
      </section>

      {/* Dentists Grid */}
      <section className="py-16">
        <ContentContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {dentists.map((dentist, index) => (
              <motion.div
                key={dentist.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/dentist/${dentist.id}`} className="block">  {/* Using id */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-gray-200">
                    {/* Dentist Image */}
                    <div className="h-72 overflow-hidden">
                      {dentist.image ? (
                        <img 
                          src={dentist.image} 
                          alt={dentist.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                          <div className="text-5xl text-blue-300">👨‍⚕️</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Dentist Info */}
                    <div className="p-6 text-center">
                      {/* Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {dentist.name}
                      </h3>
                      
                      {/* Designation */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                          {dentist.designation}
                        </span>
                      </div>
                      
                      {/* Experience and Education */}
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center justify-center gap-1">
                          <span className="font-medium">Experience:</span>
                          <span>{dentist.experience}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <span className="font-medium">Education:</span>
                          <span className="text-xs">{dentist.education}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </ContentContainer>
      </section>

      <ContactSection locations={contactLocations} />
      <SubscribeSection data={subscribeData} />
    </>
  )
}