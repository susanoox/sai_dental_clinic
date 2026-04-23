// HeroImage.tsx
"use client"

import Image from "next/image"
import { motion, type MotionProps, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

type HeroImageProps = {
  className?: string
  imageClassName?: string
  src?: string
  alt?: string
  motionProps?: MotionProps
}

export default function HeroImage({
  className,
  imageClassName,
  src = "/images/heroSectionImage1.jpg",
  alt = "Smiling person at a dental clinic",
  motionProps,
}: HeroImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.70 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (ref.current) {
          ref.current.style.transform = "none"
          ref.current.style.willChange = "auto"
          // Also clear filter/opacity overrides Framer might leave
          ref.current.style.filter = ""
        }
      }}
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