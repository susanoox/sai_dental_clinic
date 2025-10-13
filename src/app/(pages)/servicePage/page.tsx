import { ContactForm } from '@/components/common-ui/contactForm/ContactForm'
import { ContactInfoList } from '@/components/common-ui/contactForm/ContactInfoList'
import ContactSection from '@/components/common-ui/contactForm/ContactSection'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ServiceSection from '@/components/sections/service/ServiceSection'
import { contactLocations } from '@/data/contact/contact'
import { serviceData } from '@/data/service/service'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServiceSection data={serviceData} animate={{ animate: { opacity: 1, y: 0 } }} />
      <ContactSection locations={contactLocations} />
    </div>
  )
}

export default page