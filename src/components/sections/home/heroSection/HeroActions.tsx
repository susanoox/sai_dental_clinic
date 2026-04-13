"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react";
type HeroActionsProps = {
  className?: string
  motionProps?: MotionProps
  buttonText?: string
  contactLabel?: string
  phoneNumber?: string
  whatsappNumber?: string // ← added
}

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.55, ease: "easeOut" },
}

export default function HeroActions({
  className,
  motionProps,
  buttonText = "Book Now",
  contactLabel = "Contact us",
  phoneNumber = "+91 9442264404",
  whatsappNumber = "8122835737", 
}: HeroActionsProps) {
const ref = useRef<HTMLDivElement>(null)
  function handleBookNow() {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to book now!")}`
    window.open(url, "_blank")
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (ref.current) {
          ref.current.style.transform = "none"
          ref.current.style.willChange = "auto"
        }
      }}
      {...motionProps}
      className={cn("flex items-center gap-4", className)}
    >
      <Button onClick={handleBookNow}>{buttonText}</Button>
      <div className="flex items-center justify-center gap-2">
        <span className="bg-primary text-primary-foreground p-3 rounded-full">
          <Phone className="w-4 h-4" />
        </span>
        <div className="flex flex-col">
          <span>{contactLabel}</span>
          <span className="text-primary font-medium">{phoneNumber}</span>
        </div>
      </div>
    </motion.div>
  )
}