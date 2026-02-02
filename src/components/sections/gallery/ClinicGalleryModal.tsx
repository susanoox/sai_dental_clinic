"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { GalleryImage } from "@/data/gallery/clinicGallery"

interface ClinicGalleryModalProps {
  open: boolean
  onClose: () => void
  images: GalleryImage[]
}

export default function ClinicGalleryModal({
  open,
  onClose,
  images,
}: ClinicGalleryModalProps) {
  if (!open) return null

  // group all images into rows of 3
  const rows: GalleryImage[][] = []
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3))
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close Button */}
        <button
          className="fixed top-6 right-6 text-white z-50"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <X size={32} />
        </button>

        {/* Scrollable Marquee Grid */}
        <div className="max-w-6xl mx-auto py-24 px-4 space-y-6">
          {rows.map((row, rowIndex) => {
            const moveLeft = rowIndex % 2 === 0

            return (
              <div key={rowIndex} className="overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: moveLeft ? ["0%", "-50%"] : ["-50%", "0%"],
                  }}
                  transition={{
                    duration: 18,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {/* duplicate row images for seamless marquee */}
                  {[...row, ...row].map((img, i) => (
                    <div
                      key={`${img.id}-${i}`}
                      className="relative aspect-square w-[calc((100%-2rem)/3)] shrink-0 overflow-hidden rounded-xl"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="33vw"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
