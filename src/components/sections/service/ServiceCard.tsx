"use client"

import { cn } from "@/lib/utils"
import { motion, type MotionProps } from "framer-motion"
import React from 'react'
import HeroImage from "../home/heroSection/HeroImage"
import PageHeading from "@/components/common-ui/headers/PageHeading"
import ContentText from "@/components/common-ui/contentText/ContentText"
import RatingBadge from "@/components/common-ui/ratingBadge/RatingBadge"
import CardImage from "@/components/common-ui/cardImage/CardImage"
import { useRouter } from "next/navigation"

type FeatureCardProps = {
    icon: string
    title: string
    description: string
    className?: string
    motionProps?: MotionProps
    imgSrc: string
    rating: number
    id:number
}

const ServiceCard = ({ icon, id , title, description, className, motionProps, imgSrc, rating }: FeatureCardProps) => {

    const router = useRouter();

    const defaultMotion: MotionProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.5, ease: "easeOut" },
    }

    const handleNavigateDeatilsPage = (id: number) => {
        router.push(`/servicePage/${id}`)
    }
    return (
        <motion.div
            {...defaultMotion}
            {...motionProps}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={cn(
  "h-[320px] flex flex-col justify-between items-start text-left gap-4 border border-black md:border-none p-3 md:p-0 rounded-md hover:cursor-pointer",
  className
)}
            onClick={() => handleNavigateDeatilsPage(id)}
        >
            <CardImage
                src={imgSrc}
                className="w-full"
                imageClassName="h-40 w-full object-cover rounded-md"
                />
            <RatingBadge value={rating}  motionProps={motionProps}  />
            <PageHeading className="text-xl font-semibold" >{title}</PageHeading>
            <ContentText className="text-lg min-h-[48px] line-clamp-2">{description}</ContentText>

        </motion.div>
    )
}

export default ServiceCard