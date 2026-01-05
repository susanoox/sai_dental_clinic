import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import ContentText from '@/components/common-ui/contentText/ContentText'
import React from 'react'

interface AboutHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
  }
}

const AboutHero = ({ data }: AboutHeroProps) => {
  return (
    <ContentContainer className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* "About us" - Section Title */}
        <div className="text-blue-600 font-medium text-xl">
          {data.title}
        </div>
        
        {/* "A modern dental care home for families" - Main Heading */}
        <PageHeading className="text-6xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
          {data.subtitle}
        </PageHeading>
        
        {/* "Dedicated to providing exceptional dental care..." - Description */}
        <div className="mt-8 max-w-3xl mx-auto">
          <ContentText className="text-base md:text-lg text-gray-700 leading-relaxed">
            {data.description}
          </ContentText>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Get matched
          </button>
          
        </div>
      </div>
    </ContentContainer>
  )
}

export default AboutHero