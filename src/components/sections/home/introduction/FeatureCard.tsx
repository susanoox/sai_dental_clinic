"use client"

import type * as React from "react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import PageHeading from "@/components/common-ui/headers/PageHeading"
import ContentText from "@/components/common-ui/contentText/ContentText"
import AnimatedIcon from "@/components/common-ui/animationIcon/AnimatedIcon"

type FeatureCardProps = {
    icon: string
    title: string
    description: string
    className?: string
    motionProps?: MotionProps
}

const defaultMotion: MotionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.5, ease: "easeOut" },
}

export default function FeatureCard({ icon, title, description, className, motionProps }: FeatureCardProps) {
    return (
        <motion.div
            {...defaultMotion}
            {...motionProps}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={cn("flex flex-col items-start text-left gap-4", className)}
        >
            <AnimatedIcon icon={icon} />
            <PageHeading className="text-xl mb-2">{title}</PageHeading>
            <ContentText className="text-base">{description}</ContentText>
        </motion.div>
    )
}
