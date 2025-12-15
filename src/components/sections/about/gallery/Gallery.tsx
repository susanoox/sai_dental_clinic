"use client"

import * as React from "react"
import Image from "next/image"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import ContentContainer from "@/components/common-ui/containers/ContentContainer"

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" },
};

interface GalleryImageData {
  id: number;
  src: string;
  alt: string;
  emoji: string;
  className: string;
}

const galleryImagesData: GalleryImageData[] = [
  {
    id: 1,
    src: "/images/gallery1.jpg",
    alt: "Modern dental clinic interior",
    emoji: "🏥",
    className: "h-[500px] lg:h-[650px]",
  },
  {
    id: 2,
    src: "/images/gallery2.jpg",
    alt: "Advanced dental equipment",
    emoji: "⚕️",
    className: "h-[300px] lg:h-[315px]",
  },
  {
    id: 3,
    src: "/images/gallery3.jpg",
    alt: "Patient waiting area",
    emoji: "💺",
    className: "h-[300px] lg:h-[315px]",
  },
  {
    id: 4,
    src: "/images/gallery4.jpg",
    alt: "Treatment room setup",
    emoji: "🦷",
    className: "h-[500px] lg:h-[650px]",
  },
];

type GalleryImageProps = {
  src: string
  alt: string
  emoji: string
  className?: string
  motionProps?: MotionProps
}

const GalleryImage = ({ 
  src, 
  alt, 
  emoji, 
  className,
  motionProps 
}: GalleryImageProps) => {
  const [hasError, setHasError] = React.useState(false)

  return (
    <motion.div
      {...defaultMotion}
      {...motionProps}
      className={cn(
        "relative z-0 w-full overflow-hidden rounded-3xl shadow-lg",
        className
      )}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Placeholder BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center rounded-3xl">
        <div className="text-6xl mb-3">{emoji}</div>
        <p className="text-gray-700 font-medium px-4 text-center">{alt}</p>
      </div>

      {/* Image */}
      {src && !hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setHasError(true)}
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      )}
    </motion.div>
  )
}

const Gallery = () => {
  return (
    <ContentContainer className="py-20 md:py-32">
      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT TALL IMAGE */}
          <div className="lg:col-span-4">
            <GalleryImage {...galleryImagesData[0]} />
          </div>

          {/* MIDDLE STACKED IMAGES */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
            <GalleryImage {...galleryImagesData[1]} />
            <GalleryImage {...galleryImagesData[2]} />
          </div>

          {/* RIGHT TALL IMAGE */}
          <div className="lg:col-span-4">
            <GalleryImage {...galleryImagesData[3]} />
          </div>

        </div>
      
    </ContentContainer>
  )
}

export default Gallery