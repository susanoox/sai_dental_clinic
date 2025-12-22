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
      <ContentContainer className='py-16 md:py-24 px-0 max-w-none'>
        {/* Use the same max-width as StatsSection */}
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 w-full items-start">
            
            {/* Image on the left - Matching StatsSection layout */}
            <motion.div 
              {...defaultMotion}
              className="relative w-full h-full pr-0 lg:pr-12"
            >
              <img
                src="/images/gallery2.jpg"
                alt="Dental clinic interior"
                className="rounded-2xl w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover shadow-lg"
              />
            </motion.div>

            {/* Content on the right - Matching StatsSection spacing */}
            <div className="space-y-6 w-full pl-0 lg:pl-12 flex flex-col justify-center h-full">

              
              {/* "About goals" Section Heading */}
              <motion.div {...defaultMotion}>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  About goals
                </h2>
              </motion.div>

              {/* Main Heading */}
              <motion.div {...defaultMotion}>
                <PageHeading 
                  wrapperClassName="items-start w-full" 
                  className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'
                >
                  {heading}
                </PageHeading>
              </motion.div>

              {/* Mission Card - Updated to match StatsSection styling */}
              <motion.div 
                {...defaultMotion}
                transition={{ ...defaultMotion.transition, delay: 0.1 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-200"
              >
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Our Mission:</h3>
                  <ContentText className="text-base md:text-lg text-gray-700 leading-relaxed">
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