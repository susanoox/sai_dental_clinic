"use client"

import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import React from 'react'
import { ServiceData } from '@/data/service/service'
import ServiceCard from './ServiceCard'
import { MotionProps } from 'framer-motion'
import Link from "next/link";
import { motion } from "framer-motion"

interface ServiceSectionProps {
  data: ServiceData;
  pageHeading?: boolean;
  showViewAll?: boolean;
  animate?: MotionProps
}

const ServiceSection = ({ data, pageHeading, showViewAll, animate }: ServiceSectionProps) => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
      <ContentContainer className='items-center justify-center space-y-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <SectionTitleText wrapperClassName='items-center' motionProps={animate}>{data.sectionTitle}</SectionTitleText>
          <PageHeading wrapperClassName="items-center"
            className="text-center text-4xl md:text-5xl"
            motionProps={animate}
          >
            {data.heading}
          </PageHeading>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="h-full group"
            >
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                imgSrc={card.imgSrc}
                rating={card.rating}
                id={card.id}
                motionProps={animate}
              />             
            </div>
          ))}
        </div>
        {showViewAll && (
        <motion.div 
          className="mt-4 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/servicePage">
            <button className="px-8 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </motion.div>
      )}
        
      </ContentContainer>
    </section>
  )
}

export default ServiceSection