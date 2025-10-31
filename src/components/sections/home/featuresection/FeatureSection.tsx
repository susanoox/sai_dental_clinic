"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import { IntroductionData } from '@/data/home/introduction'
import FeatureCard from '@/components/sections/home/introduction/FeatureCard'

interface FeaturesSectionProps {
  data: IntroductionData;
}

const FeaturesSection = ({ data }: FeaturesSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // Override the heading for features section
  const featuresHeading = "Delivering more than just dental care & ideas"

  return (
    <section className="py-16 bg-blue-600">
      <ContentContainer className="items-center justify-center space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionTitleText wrapperClassName='items-center'>
            <span className="text-white">Features</span>
          </SectionTitleText>
          <PageHeading 
            wrapperClassName="items-center" 
            className="text-4xl lg:text-5xl text-white text-center mb-6"
          >
            {featuresHeading}
          </PageHeading>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              
<FeatureCard
  icon={card.icon}
  title={card.title}
  description={card.description}
  variant="feature" // ← This is crucial
  className="items-start text-left"
  motionProps={{
    whileHover: { y: -4, scale: 1.01 },
    whileTap: { scale: 0.99 }
  }}
/>
            </motion.div>
          ))}
        </motion.div>
      </ContentContainer>
    </section>
  )
}

export default FeaturesSection