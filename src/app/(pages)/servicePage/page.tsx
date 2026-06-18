"use client"

import ServiceSection from "@/components/sections/service/ServiceSection"
import ClinicGalleryPreview from "@/components/sections/gallery/ClinicGalleryPreview"
import { serviceData } from "@/data/service/service"
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
