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
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
  "h-[380px] md:h-[360px] flex flex-col items-start text-left gap-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 p-4 md:p-5 hover:cursor-pointer transition-all duration-300",
  className
)}
            onClick={() => handleNavigateDeatilsPage(id)}
        >
            <div className="relative w-full overflow-hidden rounded-xl">
              <CardImage
                  src={imgSrc}
                  className="w-full"
                  imageClassName="h-44 w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <RatingBadge value={rating} motionProps={motionProps} />
              </div>
            </div>
            <PageHeading className="text-lg font-bold text-gray-900" >{title}</PageHeading>
            <ContentText className="text-sm text-gray-500 line-clamp-2 flex-1">{description}</ContentText>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all duration-300">
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
        </motion.div>
    )
}

export default ServiceCard