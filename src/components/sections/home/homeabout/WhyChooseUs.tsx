"use client"

import React from 'react';
import { whyChooseUsData } from "@/data/home/whychooseusnew"
import { motion } from "framer-motion"
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import PageHeading from '@/components/common-ui/headers/PageHeading'

interface WhyChooseUsSectionProps {
  data: typeof whyChooseUsData;
}

const defaultMotion = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.55, ease: "easeOut" },
}

const itemMotion = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.4, ease: "easeOut" },
}

const WhyChooseUsSection = ({ data }: WhyChooseUsSectionProps) => {
  return (
    <div>
      <ContentContainer className='items-center justify-center space-y-8'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          {/* Image on the left */}
          <motion.div 
            {...defaultMotion}
            className="relative w-full"
          >
            <img
              src={data.image}
              alt="Dental care"
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </motion.div>

          {/* Content on the right */}
          <div className="space-y-6 w-full">
            {/* Main Heading */}
            <PageHeading 
              wrapperClassName="items-center w-full" 
              className='text-3xl lg:text-4xl text-center lg:text-left font-bold'
            >
              {data.heading}
            </PageHeading>

            {/* Description */}
            <motion.div {...defaultMotion}>
              <ContentText className="text-base lg:text-lg text-center lg:text-left leading-relaxed text-gray-600">
                {data.description}
              </ContentText>
            </motion.div>

            {/* Features list - simple bullet points */}
            <div className="space-y-3">
              {data.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  {...itemMotion}
                  transition={{ ...itemMotion.transition, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  {/* Checkbox icon */}
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-lg">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* About us button */}
            <motion.div 
              {...defaultMotion}
              transition={{ ...defaultMotion.transition, delay: 0.3 }}
              className="flex justify-center lg:justify-start pt-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
                {data.buttonText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default WhyChooseUsSection;