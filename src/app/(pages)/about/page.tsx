import AboutHero from '@/components/sections/about/abouthero/AboutHero'
import Gallery from '@/components/sections/about/gallery/Gallery'
import StatsSection from '@/components/sections/about/statsabout/StatsSection'
import ContactSection from '@/components/common-ui/contactForm/ContactSection'
import SubscribeSection from '@/components/sections/subscribe/SubscribeSection'
import AboutMissionSection from '@/components/sections/about/aboutmission/AboutMissionSection'
import AboutWhyUsSection from '@/components/sections/about/aboutwhyus/AboutWhyUs'
import VideoSection from '@/components/sections/home/video/VideoSection'
import { whyUsData } from '@/data/about/whyus'
import { aboutMissionData } from '@/data/about/mission'
import { aboutHeroData } from '@/data/about/abouthero'
import { statsData } from '@/data/home/Stats'
import { contactLocations } from '@/data/contact/contact'
import { subscribeData } from '@/data/home/subscribe'
import { videoData } from '@/data/home/video' 
import { aboutVideoData } from '@/data/about/video'


const AboutPage = () => {
  return (
    <main className="">
      <AboutHero data={aboutHeroData} />
      <Gallery />
      <StatsSection statsData={statsData} />
      <AboutMissionSection data={aboutMissionData} />
      <AboutWhyUsSection data={whyUsData} />

        <VideoSection src={videoData.videoUrl} poster={videoData.videoPoster} />

      <ContactSection locations={contactLocations} />
      <SubscribeSection data={subscribeData} />
    </main>
  )
}

export default AboutPage