"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type HeroActionsProps = {
  className?: string
  motionProps?: MotionProps
  buttonText?: string
  contactLabel?: string
  phoneNumber?: string
}

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 50},
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.55, ease: "easeOut" },
}

export default function HeroActions({
  className,
  motionProps,
  buttonText = "Book Now",
  contactLabel = "Contact us",
  phoneNumber = "+91 9876543210",
}: HeroActionsProps) {
  return (
    <motion.div {...defaultMotion} {...motionProps} className={cn("flex items-center gap-4", className)}>
      <Button>{buttonText}</Button>
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
