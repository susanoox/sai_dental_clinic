"use client"

import React from 'react';
import { motion } from "framer-motion"
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import PageHeading from '@/components/common-ui/headers/PageHeading'

interface AboutMissionData {
  heading: string;
  mission: string;
}

interface AboutMissionSectionProps {
  data: AboutMissionData;
}

const defaultMotion = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.55, ease: "easeOut" },
}

const AboutMissionSection = ({ data }: AboutMissionSectionProps) => {
  const { heading, mission } = data || {};
  
  return (
    <div className='bg-[#f5f5f7] w-full'>
      <ContentContainer className='py-20 md:py-32 px-0 max-w-none'>
        {/* Use a wider max-width or remove it completely */}
        <div className="max-w-screen-2xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
            
            {/* Image on the left - Use a wider grid span */}
            <motion.div 
              {...defaultMotion}
              className="relative w-full h-full"
            >

                <img
                  src="/images/gallery2.jpg"
                  alt="Dental clinic interior"
                  className="rounded-3xl w-full h-full object-cover shadow-lg"
                />
              
            </motion.div>

            {/* Content on the right */}
            <div className="space-y-8 w-full">
              
              {/* "About goals" Section Heading */}
              <motion.div {...defaultMotion}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  About goals
                </h2>
              </motion.div>

              {/* Main Heading "A trusted partner for all your dental needs" */}
              <motion.div {...defaultMotion}>
                <PageHeading 
                  wrapperClassName="items-start w-full" 
                  className='text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight'
                >
                  {heading}
                </PageHeading>
              </motion.div>

              {/* Mission Card - White background */}
              <motion.div 
                {...defaultMotion}
                transition={{ ...defaultMotion.transition, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission:</h3>
                  <ContentText className="text-lg text-gray-700 leading-relaxed">
                    {mission}
                  </ContentText>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default AboutMissionSection;