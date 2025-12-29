"use client"

import type * as React from "react"
import Image from "next/image"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" },
};

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
  const [hasError, setHasError] = useState(false)

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
  console.log(src)

</motion.div>

  )
}

export default GalleryImage