"use client";
import { useEffect, useState } from "react";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionTitleText from "@/components/common-ui/contentText/SectionTitleText";
import PageHeading from "@/components/common-ui/headers/PageHeading";
import ContentText from "@/components/common-ui/contentText/ContentText";
import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";
import ContentContainer from "@/components/common-ui/containers/ContentContainer";
import type { HeroSectionData } from "@/data/home/hero";

type HeroSectionProps = {
    data: HeroSectionData;
    wrapperClassName?: string;
    actionsClassName?: string;
    rightImageClassName?: string;
    sectionTitleMotion?: MotionProps;
    headingMotion?: MotionProps;
    contentMotion?: MotionProps;
    actionsMotion?: MotionProps;
    rightImageMotion?: MotionProps;
    rightImageImageClassName?: string;
};

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const imageVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
};

export default function HeroSection({
    data,
    wrapperClassName,
    rightImageClassName,
}: HeroSectionProps) {
    return (
        <section className={cn("", wrapperClassName)}>

            {/* ── MOBILE: Text screen (first viewport) ── */}
            <div className="min-h-[100svh] flex items-center md:hidden">
                <ContentContainer className="py-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-5"
                    >
                        {/* Subtitle — larger than before */}
                        <motion.p
                            variants={fadeUpVariant}
                            className="text-lg sm:text-xl font-semibold tracking-[0.2em] uppercase text-gray-400"
                        >
                            {data?.sectionTitle}
                        </motion.p>

                        {/* HUGE heading — clamp fills screen width */}
                        <motion.h1
                            variants={fadeUpVariant}
                            className="font-['Oswald'] font-bold uppercase leading-[0.92] tracking-wide text-blue-700"
                            style={{ fontSize: "clamp(3.8rem, 20vw, 6.5rem)" }}
                        >
                            Sai
                            <br />
                            Dental
                            <br />
                            Clinic
                        </motion.h1>

                        {/* Description */}
                        {data.content.map((text, index) => (
                            <motion.p
                                key={index}
                                variants={fadeUpVariant}
                                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                            >
                                {text}
                            </motion.p>
                        ))}

                        <motion.div variants={fadeUpVariant}>
                            <HeroActions
                                buttonText={data.buttonText}
                                contactLabel="Contact us"
                                phoneNumber={data.phone}
                                motionProps={{ initial: false, animate: { opacity: 1, y: 0 } }}
                            />
                        </motion.div>
                    </motion.div>
                </ContentContainer>
            </div>

            {/* ── MOBILE: Photo screen (second viewport, scroll to see) ── */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={imageVariant}
                className="min-h-[100svh] flex flex-col items-center justify-center md:hidden"
            >
                <ContentContainer className="py-10 flex flex-col items-center">
                    <HeroImage
                        src={data.image}
                        alt={data.heading}
                        motionProps={{ initial: false, animate: { opacity: 1 } }}
                        className="w-full h-auto max-h-[55svh] object-contain"
                    />
                    <div className="mt-6 text-center px-2">
                        <p className="text-3xl sm:text-4xl font-bold text-blue-700 leading-tight">
                            Dr. Srinivas S K
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 mt-2">
                            BDS, FDS (Endodontics) • RCT Specialist
                        </p>
                    </div>
                </ContentContainer>
            </motion.div>

            {/* ── DESKTOP: Two-column layout (md+) ── */}
            <div className="hidden md:flex min-h-[100svh] items-center">
                <ContentContainer className="py-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-2 gap-8 items-center"
                    >
                        {/* Left — text */}
                        <div className="flex flex-col gap-6">
                            <motion.div
                                variants={fadeUpVariant}
                                className="text-base lg:text-lg xl:text-xl font-semibold tracking-[0.18em] uppercase text-gray-400"
                            >
                                {data?.sectionTitle}
                            </motion.div>

                            <motion.div
                                variants={fadeUpVariant}
                                className="font-['Oswald'] text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] tracking-wide text-blue-700"
                            >
                                Sai Dental
                                <br />
                                Clinic
                            </motion.div>

                            {data.content.map((text, index) => (
                                <motion.p
                                    key={index}
                                    variants={fadeUpVariant}
                                    className="text-base lg:text-lg text-gray-600 leading-relaxed"
                                >
                                    {text}
                                </motion.p>
                            ))}

                            <motion.div variants={fadeUpVariant}>
                                <HeroActions
                                    buttonText={data.buttonText}
                                    contactLabel="Contact us"
                                    phoneNumber={data.phone}
                                    motionProps={{ initial: false, animate: { opacity: 1, y: 0 } }}
                                />
                            </motion.div>
                        </div>

                        {/* Right — image */}
                        <motion.div
                            variants={imageVariant}
                            className={cn(
                                "relative w-full max-w-md lg:max-w-lg mx-auto",
                                rightImageClassName
                            )}
                        >
                            <HeroImage
                                src={data.image}
                                alt={data.heading}
                                motionProps={{ initial: false, animate: { opacity: 1 } }}
                                className="w-full h-auto max-h-[280px] sm:max-h-[320px] md:max-h-[360px] lg:max-h-[380px] object-contain"
                            />
                            <div className="mt-4 text-center px-2">
                                <p className="text-3xl md:text-4xl font-bold text-blue-700 leading-tight">
                                    Dr. Srinivas S K
                                </p>
                                <p className="text-sm md:text-base text-gray-500 mt-1">
                                    BDS, FDS (Endodontics) • RCT Specialist
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </ContentContainer>
            </div>

        </section>
    );
}