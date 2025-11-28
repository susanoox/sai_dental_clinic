import HeroSection from '@/components/sections/home/heroSection/HeroSection'
import IntroductionSection from '@/components/sections/home/introduction/IntroductionSection'
import VideoSection from '@/components/sections/home/video/VideoSection' 
import StatsSection from '@/components/sections/home/stats/StatsSection'
import ServiceSection from '@/components/sections/service/ServiceSection'
import WhyChooseUsSection from '@/components/sections/home/homeabout/WhyChooseUs'
import FeaturesSection from '@/components/sections/home/featuresection/FeatureSection'
import TestimonialsSection from '@/components/sections/home/testimonials/TestimonialsSection'
import BlogsSection from '@/components/sections/home/blogs/BlogsSection'
import AppointmentSection from '@/components/sections/home/appointment/AppointmentSection'
import FAQSection from '@/components/sections/home/faq/FAQSection'
import ContactSection from '@/components/sections/home/contact/ContactSection'
import SubscribeSection from '@/components/sections/home/subscribe/SubscribeSection'
import { heroSectionData } from '@/data/home/hero'
import { introductionData } from '@/data/home/introduction'
import { videoData } from '@/data/home/video' 
import { statsData } from '@/data/home/Stats'
import { serviceData } from '@/data/service/service'
import { whyChooseUsData } from "@/data/home/whychooseusnew"
import { appointmentData } from '@/data/home/appointment'
import { sampleTestimonials } from '@/data/home/testimonials'
import { blogsData } from '@/data/home/blogs'
import { faqData } from '@/data/home/faq'
import { contactData } from '@/data/home/contact'
import { subscribeData } from '@/data/home/subscribe'
const Page = () => {
  return (
    <main className="">
      <HeroSection data={heroSectionData} />
      <IntroductionSection data={introductionData} />
      <VideoSection src={videoData.videoUrl} poster={videoData.videoPoster} />
      <StatsSection data={statsData} />
      <ServiceSection data={serviceData} pageHeading={false} />
      <WhyChooseUsSection data={whyChooseUsData} />
      <FeaturesSection data={introductionData} />
      <TestimonialsSection data={sampleTestimonials} />
      <AppointmentSection data={appointmentData} />
      <BlogsSection data={blogsData} />
      <FAQSection data={faqData} />
      <ContactSection data={contactData} />
      <SubscribeSection data={subscribeData} />
    </main>
  )
}

export default Page