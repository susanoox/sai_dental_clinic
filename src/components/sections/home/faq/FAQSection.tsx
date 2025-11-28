"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import FAQItem, { FAQItemData } from '@/components/sections/home/faq/FAQItem'

export interface FAQSectionData {
  faqs: FAQItemData[]
}

interface FAQSectionProps {
  data: FAQSectionData
}

const FAQSection = ({ data }: FAQSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <ContentContainer className="items-center justify-center space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <SectionTitleText wrapperClassName='items-center'>
            <span className="text-blue-600">FAQ</span>
          </SectionTitleText>
          <PageHeading 
            wrapperClassName="items-center" 
            className="text-4xl lg:text-5xl text-gray-900 text-center mb-6"
          >
            Answers to your most common concerns
          </PageHeading>
          <p className="text-xl text-gray-600 mt-4">
            Find quick answers to frequently asked questions about dental care and our services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {data.faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <FAQItem data={faq} />
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          
        </motion.div>
      </ContentContainer>
    </section>
  )
}

export default FAQSection