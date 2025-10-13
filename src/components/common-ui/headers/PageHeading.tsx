"use client"

import type * as React from "react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type PageHeadingProps = {
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

export default function PageHeading({ children, className, wrapperClassName, motionProps }: PageHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", wrapperClassName)}>
      <motion.h1
        {...defaultMotion}
        {...motionProps}
        className={cn("text-6xl font-medium  text-balance", className)}
      >
        {children}
      </motion.h1>
    </div>
  )
}
