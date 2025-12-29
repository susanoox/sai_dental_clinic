"use client"

import React from 'react';
import { motion } from "framer-motion"
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import SectionTitleText from "@/components/common-ui/contentText/SectionTitleText";
import { CheckCircle } from 'lucide-react' // For feature icons

interface WhyUsData {
  sectionTitle: 'Why us',
  heading: string;
  features: {
    title: string;
    description: string;
  }[];
}

interface AboutWhyUsSectionProps {
  data: WhyUsData;
}

const defaultMotion = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.55, ease: "easeOut" },
}

const AboutWhyUsSection = ({ data }: AboutWhyUsSectionProps) => {
  const { heading, features } = data || {};
  
  return (
    <div className='bg-white w-full'> {/* Changed to white background */}
      <ContentContainer className='py-16 md:py-24 px-0 max-w-none'>
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-start">
            
            {/* CONTENT ON LEFT */}
            <div className="space-y-8 w-full flex flex-col justify-center h-full">
              
              {/* Main Heading */}
              <SectionTitleText motionProps={{ animate: { opacity: 1, y: 0 } }}>{data?.sectionTitle}</SectionTitleText>
              <motion.div {...defaultMotion}>
                <PageHeading 
                  wrapperClassName="items-start w-full" 
                  className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'
                >
                  {heading}
                </PageHeading>
              </motion.div>

              {/* Features List */}
              <div className="space-y-8">
                {features?.map((feature, index) => (
                  <motion.div 
                    key={index}
                    {...defaultMotion}
                    transition={{ ...defaultMotion.transition, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    {/* Feature Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <ContentText className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </ContentText>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* IMAGE ON RIGHT - Matching your sample dimensions */}
            <motion.div 
              {...defaultMotion}
              transition={{ ...defaultMotion.transition, delay: 0.2 }}
              className="relative w-full h-full"
            >
              <img
                src="/images/heroSectionImage1.jpg" // You'll need to update this
                alt="Dental treatment with modern equipment"
                className="rounded-2xl w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover shadow-lg"
              />
            </motion.div>

          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default AboutWhyUsSection;