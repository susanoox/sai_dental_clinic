"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, MotionProps } from "framer-motion"

import ContentContainer from "@/components/common-ui/containers/ContentContainer"
import PageHeading from "@/components/common-ui/headers/PageHeading"
import ContentText from "@/components/common-ui/contentText/ContentText"
import { Button } from "@/components/ui/button"

import ClinicGalleryModal from "./ClinicGalleryModal"
import { GalleryImage } from "@/data/gallery/clinicGallery"

interface ClinicGalleryPreviewProps {
  images: GalleryImage[]
}

/* ✅ SAME motion config as ServiceCard */
const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function ClinicGalleryPreview({
  images,
}: ClinicGalleryPreviewProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.section {...defaultMotion} className="mt-32">
      {/* ✅ THIS fixes alignment + width */}
      <ContentContainer className="items-center space-y-8">
        
        {/* ✅ Centered heading (same as ServiceSection) */}
        <PageHeading
          wrapperClassName="items-center"
          className="text-center"
        >
          Clinic Treatment Gallery
        </PageHeading>

        <ContentText className="text-center max-w-2xl">
          Real moments from our dental clinic
        </ContentText>

        {/* ✅ Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {images.slice(0, 3).map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="relative rounded-xl overflow-hidden aspect-square"
            >     
               <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                />
                
            </motion.div>
          ))}
        </div>

        {/* ✅ Center button */}
        <div className="flex justify-center">
          <Button onClick={() => setOpen(true)}>
            View More Gallery
          </Button>
        </div>
      </ContentContainer>

      <ClinicGalleryModal
        open={open}
        onClose={() => setOpen(false)}
        images={images}
      />
    </motion.section>
  )
}
