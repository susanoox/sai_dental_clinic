"use client"

import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import ContentText from '@/components/common-ui/contentText/ContentText'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"

interface AboutHeroProps {
  data: {
    title: string
    subtitle: string
    description: string
  }
}

const AboutHero = ({ data }: AboutHeroProps) => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleContactClick = () => {
    router.push("/contact")
    setIsMenuOpen(false)
  }

  return (
    <ContentContainer className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        <div className="text-blue-600 font-medium text-xl">
          {data.title}
        </div>

        <PageHeading className="text-6xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
          {data.subtitle}
        </PageHeading>

        <div className="mt-8 max-w-3xl mx-auto">
          <ContentText className="text-base md:text-lg text-gray-700 leading-relaxed">
            {data.description}
          </ContentText>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={handleContactClick}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get matched
          </button>
        </div>

      </div>
    </ContentContainer>
  )
}

export default AboutHero
