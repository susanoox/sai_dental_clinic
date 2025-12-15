import AboutHero from '@/components/sections/about/abouthero/AboutHero'
import Gallery from '@/components/sections/about/gallery/Gallery'
import StatsSection from '@/components/sections/about/statsabout/StatsSection'
import ContactSection from '@/components/sections/home/contact/ContactSection'
import SubscribeSection from '@/components/sections/home/subscribe/SubscribeSection'
import AboutMissionSection from '@/components/sections/about/aboutmission/AboutMissionSection'
import { aboutMissionData } from '@/data/about/mission'
import { aboutHeroData } from '@/data/about/abouthero'
import { statsData } from '@/data/home/Stats' // Import from homepage
import { contactData } from '@/data/home/contact'
import { subscribeData } from '@/data/home/subscribe'

const AboutPage = () => {
  return (
    <main className="">
      <AboutHero data={aboutHeroData} />
      <Gallery />
      <StatsSection statsData={statsData} />
      <AboutMissionSection data={aboutMissionData} />
      <ContactSection data={contactData} />
      <SubscribeSection data={subscribeData} />
    </main>
  )
}

export default AboutPage