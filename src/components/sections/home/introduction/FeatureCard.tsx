"use client"

import type * as React from "react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import PageHeading from "@/components/common-ui/headers/PageHeading"
import ContentText from '@/components/common-ui/contentText/ContentText'
import AnimatedIcon from '@/components/common-ui/animationIcon/AnimatedIcon'

type FeatureCardProps = {
  icon: string
  title: string
  description: string
  className?: string
  motionProps?: MotionProps
  variant?: 'default' | 'feature'
}

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  className, 
  motionProps,
  variant = 'default'
}: FeatureCardProps) {
  // Text colors based on variant
  const titleColor = variant === 'feature' ? 'text-white' : 'text-gray-900'
  const descriptionColor = variant === 'feature' ? 'text-white' : 'text-gray-600'

  return (
    <motion.div
      {...defaultMotion}
      {...motionProps}
      className={cn("flex flex-col items-start text-left gap-4", className)}
    >
      <AnimatedIcon icon={icon} />
      <PageHeading className={cn("text-xl mb-2", titleColor)}>
        {title}
      </PageHeading>
      <ContentText className={cn("text-base", descriptionColor)}>
        {description}
      </ContentText>
    </motion.div>
  )
}