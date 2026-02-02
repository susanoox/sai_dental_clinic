import ContactSection from "@/components/common-ui/contactForm/ContactSection"
import ServiceSection from "@/components/sections/service/ServiceSection"
import SubscribeSection from "@/components/sections/subscribe/SubscribeSection"
import ClinicGalleryPreview from "@/components/sections/gallery/ClinicGalleryPreview"
import { contactLocations } from "@/data/contact/contact"
import { serviceData } from "@/data/service/service"
import { subscribeData } from "@/data/home/subscribe"
import { clinicGallery } from "@/data/gallery/clinicGallery"

export default function ServicePage() {
  return (
    <div className="min-h-screen">
      <ServiceSection
        data={serviceData}
        pageHeading={true}
        animate={{ animate: { opacity: 1, y: 0 } }}
      />

      {/* ✅ GALLERY BELOW SERVICES */}
      <ClinicGalleryPreview images={clinicGallery} />

    </div>
  )
}
