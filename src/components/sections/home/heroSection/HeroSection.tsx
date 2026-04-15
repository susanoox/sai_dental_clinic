"use client";
import { useEffect, useState } from "react";
import type { MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionTitleText from "@/components/common-ui/contentText/SectionTitleText";
import PageHeading from "@/components/common-ui/headers/PageHeading";
import ContentText from "@/components/common-ui/contentText/ContentText";
import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";
import ContentContainer from "@/components/common-ui/containers/ContentContainer";
import ToothAnimation from "@/components/animations/ToothAnimation";
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

export default function HeroSection({
    data,
    wrapperClassName,
    rightImageClassName,
}: HeroSectionProps) {

    const [showAnimation, setShowAnimation] = useState(false);

useEffect(() => {
  setShowAnimation(true);

  setTimeout(() => {
    setShowAnimation(false);
  }, 2500);
}, []);
    return (
        <section className={cn("min-h-[100svh] flex items-center", wrapperClassName)}>
            <ContentContainer className="md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="space-y-5 md:space-y-6">
                        <SectionTitleText className="text-md sm:text-sm md:text-base lg:text-xl xl:text-2xl tracking-[0.2em]" motionProps={{
  initial: false,
  animate: { opacity: 1, y: 0 }
}}>{data?.sectionTitle}</SectionTitleText>
                        <PageHeading
  motionProps={{
  initial: false,
  animate: { opacity: 1, y: 0 }
}}
  className="font-['Oswald'] text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-[1.05] text-blue-700"
>
  Sai Dental <br className="block md:hidden" /> Clinic
</PageHeading>

           
                        {data.content.map((text, index) => (
                            <ContentText key={index} motionProps={{
  initial: false,
  animate: { opacity: 1, y: 0 }
}}>{text} </ContentText>
                        ))}

                        <HeroActions
                            buttonText={data.buttonText}
                            contactLabel="Contact us"
                            phoneNumber={data.phone}
                            motionProps={{
  initial: false,
  animate: { opacity: 1, y: 0 }
}}
                        />
                    </div>

                    <div
  className={cn(
    "relative w-full max-w-md lg:max-w-lg mx-auto",
    rightImageClassName
  )}
>
  {/* Image */}
  <HeroImage
    src={data.image}
    alt={data.heading}
    motionProps={{
  initial: false,
  animate: { opacity: 1, y: 0 }
}}
    className="w-full h-auto max-h-[280px] sm:max-h-[320px] md:max-h-[360px] lg:max-h-[380px] object-contain"
  />

  {/* ✅ BIG SUBHEADING BELOW IMAGE */}
  <div className="mt-4 text-center px-2">
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 leading-tight">
      Dr. Srinivas S K
    </p>
    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
      BDS, FDS (Endodontics) • RCT Specialist
    </p>
  </div>
</div>
                </div>
            </ContentContainer>
        </section>
    );
}
