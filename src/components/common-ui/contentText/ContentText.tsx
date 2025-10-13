"use client"

import type * as React from "react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type ContentTextProps = {
  children: React.ReactNode
  className?: string
  wrapperClassName?: string
  motionProps?: MotionProps
}

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  // animate: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function ContentText({ children, className, wrapperClassName, motionProps }: ContentTextProps) {
  return (
    <div className={cn("flex flex-col gap-2", wrapperClassName)}>
      <motion.p
        {...defaultMotion}
        {...motionProps}
        className={cn("text-muted-foreground font-normal text-xl", className)}
      >
        {children}
      </motion.p>
    </div>
  )
}