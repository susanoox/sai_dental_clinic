import ContactSection from '@/components/common-ui/contactForm/ContactSection'
import ServiceSection from '@/components/sections/service/ServiceSection'
import SubscribeSection from '@/components/sections/subscribe/SubscribeSection'
import { contactLocations } from '@/data/contact/contact'
import { serviceData } from '@/data/service/service'
import { subscribeData } from '@/data/home/subscribe'

export default function ServicePage() {
  return (
    <div className="min-h-screen">
      {/* Make sure ServiceSection has pageHeading={true} */}
      <ServiceSection 
        data={serviceData} 
        pageHeading={true}
        animate={{ animate: { opacity: 1, y: 0 } }} 
      />
      
      <ContactSection locations={contactLocations} />
      
      <SubscribeSection data={subscribeData} />
    </div>
  )
}