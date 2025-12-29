import AboutHero from '@/components/sections/about/abouthero/AboutHero'
import Gallery from '@/components/sections/about/gallery/Gallery'
import StatsSection from '@/components/sections/about/statsabout/StatsSection'
import ContactSection from '@/components/sections/home/contact/ContactSection'
import SubscribeSection from '@/components/sections/home/subscribe/SubscribeSection'
import AboutMissionSection from '@/components/sections/about/aboutmission/AboutMissionSection'
import AboutWhyUsSection from '@/components/sections/about/aboutwhyus/AboutWhyUs'
import VideoSection from '@/components/sections/home/video/VideoSection'
import { whyUsData } from '@/data/about/whyus'
import { aboutMissionData } from '@/data/about/mission'
import { aboutHeroData } from '@/data/about/abouthero'
import { statsData } from '@/data/home/Stats'
import { contactData } from '@/data/home/contact'
import { subscribeData } from '@/data/home/subscribe'

import { aboutVideoData } from '@/data/about/video'


const AboutPage = () => {
  return (
    <main className="">
      <AboutHero data={aboutHeroData} />
      <Gallery />
      <StatsSection statsData={statsData} />
      <AboutMissionSection data={aboutMissionData} />
      <AboutWhyUsSection data={whyUsData} />
      <div className="w-full bg-white">
        {/* Remove all max-width constraints and padding wrappers */}
        <VideoSection 
          src={aboutVideoData.videoUrl}
          poster={aboutVideoData.videoPoster}
          className="w-full" // Force full width
          videoClassName="w-full" // Video takes full width
        />
      </div>
      <ContactSection data={contactData} />
      <SubscribeSection data={subscribeData} />
    </main>
  )
}

export default AboutPage