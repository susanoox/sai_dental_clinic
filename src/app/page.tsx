import HeroSection from '@/components/sections/home/heroSection/HeroSection'
import IntroductionSection from '@/components/sections/home/introduction/IntroductionSection'
import VideoSection from '@/components/sections/home/video/VideoSection' // Import VideoSection
import StatsSection from '@/components/sections/home/stats/StatsSection'
import ServiceSection from '@/components/sections/service/ServiceSection'
import { heroSectionData } from '@/data/home/hero'
import { introductionData } from '@/data/home/introduction'
import { videoData } from '@/data/home/video' // Import video data
import { statsData } from '@/data/home/Stats'
import { serviceData } from '@/data/service/service'
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
    </main>
  )
}

export default Page