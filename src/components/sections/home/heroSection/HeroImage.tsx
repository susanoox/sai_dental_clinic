"use client"

import Image from "next/image"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type HeroImageProps = {
  className?: string
  imageClassName?: string
  src?: string
  alt?: string
  motionProps?: MotionProps
}

const defaultMotion: MotionProps = {
  initial: { opacity: 0, scale: 0.70 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.8, ease: "easeOut" },
}

export default function HeroImage({
  className,
  imageClassName,
  src = "/images/heroSectionImage1.jpg",
  alt = "Smiling person at a dental clinic",
  motionProps,
}: HeroImageProps) {
  return (
    <motion.div
      {...defaultMotion}
      {...motionProps}
      className={cn("relative aspect-square w-full max-w-2xl mx-auto", className)}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={cn("object-cover rounded-2xl", imageClassName)}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </motion.div>
  )
}
