import HeroSection from '@/components/sections/home/heroSection/HeroSection'
import IntroductionSection from '@/components/sections/home/introduction/IntroductionSection'
import VideoSection from '@/components/sections/home/video/VideoSection' 
import StatsSection from '@/components/sections/home/stats/StatsSection'
import ServiceSection from '@/components/sections/service/ServiceSection'
import WhyChooseUsSection from '@/components/sections/home/homeabout/WhyChooseUs';
import FeaturesSection from '@/components/sections/home/featuresection/FeatureSection';
import { heroSectionData } from '@/data/home/hero'
import { introductionData } from '@/data/home/introduction'
import { videoData } from '@/data/home/video' 
import { statsData } from '@/data/home/Stats'
import { serviceData } from '@/data/service/service'
import { whyChooseUsData } from "@/data/home/whychooseusnew"

import React from 'react'


const Page = () => {
  return (
    <main className="">
      {/* Hero Section */}
      <HeroSection data={heroSectionData} />
      
      {/* Introduction Section */}
      <IntroductionSection data={introductionData} />
      
      {/* Video Section - Added after Introduction */}
      <VideoSection 
        src={videoData.videoUrl}
        poster={videoData.videoPoster}
    
      />
      
      {/* Stats Section - After Video */}
      <StatsSection data={statsData} />
      
      {/* Service Section */}
      <ServiceSection data={serviceData} pageHeading={false} />

<WhyChooseUsSection data={whyChooseUsData} />
      <FeaturesSection data={introductionData} />
    </main>
  )
}

export default Page