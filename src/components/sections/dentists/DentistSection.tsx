// components/sections/dentists/DentistSection.tsx
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import DentistCard, { DentistCardData } from './DentistCard'
import { DentistsSectionData } from '@/data/dentists/dentists'
import Link from 'next/link'

interface DentistsSectionProps {
  data: DentistsSectionData
  showViewAll?: boolean
}

const DentistsSection = ({ data, showViewAll = true }: DentistsSectionProps) => {
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
              {data.sectionTitle}
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
            className="text-xl text-gray-600 mt-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {data.description}
          </motion.p>
          {showViewAll && (
            <Link
              href="/dentist"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Meet Our Full Team
            </Link>
          )}
        </motion.div>

        {/* Dentists Grid with Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-8 w-full justify-center"
        >
          {data.dentists
            .filter(dentist => dentist.id === 1)
            .map((dentist, index) => (
              <DentistCard
                key={dentist.id}
                data={{
                  id: dentist.id,
                  name: dentist.name,
                  designation: dentist.designation,
                  image: dentist.image,
                  slug: dentist.slug,
                  experience: dentist.experience,
                  education: dentist.education,
                  featured: dentist.featured
                }}
                motionProps={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.25 },
                  transition: { duration: 0.6, ease: "easeOut" },
                  whileHover: { y: -8, scale: 1.02 },
                  whileTap: { scale: 0.98 }
                }}
              />
            ))}
        </motion.div>

      </ContentContainer>
    </section>
  )
}

export default DentistsSection