"use client";

import type { MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionTitleText from "@/components/common-ui/contentText/SectionTitleText";
import PageHeading from "@/components/common-ui/headers/PageHeading";
import ContentText from "@/components/common-ui/contentText/ContentText";
import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";
import ContentContainer from "@/components/common-ui/containers/ContentContainer";

import type { HeroSectionData } from "@/data/home/hero"; // import your type

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
    return (
        <section className={cn("", wrapperClassName)}>
            <ContentContainer className="md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-8">
                        <SectionTitleText motionProps={{ animate: { opacity: 1, y: 0 } }}>{data?.sectionTitle}</SectionTitleText>
                        <PageHeading motionProps={{ animate: { opacity: 1, y: 0 } }}>{data.heading}</PageHeading>
                        {data.content.map((text, index) => (
                            <ContentText key={index} motionProps={{ animate: { opacity: 1, y: 0 } }}>{text} </ContentText>
                        ))}

                        <HeroActions
                            buttonText={data.buttonText}
                            contactLabel="Contact us"
                            phoneNumber={data.phone}
                            motionProps={{ animate: { opacity: 1, y: 0 } }}
                        />
                    </div>

                    <div
                        className={cn(
                            "relative aspect-square w-full max-w-xl mx-auto",
                            rightImageClassName
                        )}
                    >
                        <HeroImage src={data.image} alt={data.heading} motionProps={{ animate: { opacity: 1, y: 0 } }} />
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}
