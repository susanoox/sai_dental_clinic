import HeroSection from '@/components/sections/home/heroSection/HeroSection'
import IntroductionSection from '@/components/sections/home/introduction/IntroductionSection'
import ServiceSection from '@/components/sections/service/ServiceSection'
import { heroSectionData } from '@/data/home/hero'
import { introductionData } from '@/data/home/introduction'
import { serviceData } from '@/data/service/service'
import React from 'react'


const Page = () => {
  return (
    <main className="">
      {/* Hero Section */}
      <HeroSection
        data={heroSectionData}
      />
      <IntroductionSection data={introductionData} />
      <ServiceSection data={serviceData} pageHeading={false} />

    </main>
  )
}

export default Page