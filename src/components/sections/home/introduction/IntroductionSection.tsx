"use client"

import AnimatedIcon from '@/components/common-ui/animationIcon/AnimatedIcon';
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText';
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading';
import { IntroductionData } from '@/data/home/introduction';
import React from 'react'
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion'

interface IntroductionSectionProps {
    data: IntroductionData;
}

const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, ease: "easeOut" },
}

const IntroductionSection = ({ data }: IntroductionSectionProps) => {
    return (
        <section className="relative py-16 md:py-20 bg-white">
            <ContentContainer className='items-center justify-center space-y-10'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <SectionTitleText wrapperClassName='items-center'>{data.sectionTitle}</SectionTitleText>
                    <PageHeading wrapperClassName="items-center" className='text-4xl md:text-5xl text-center'>{data.heading}</PageHeading>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {data.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            {...cardVariants}
                            transition={{ ...cardVariants.transition, delay: index * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                        >
                            <FeatureCard
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                className="items-start text-left"
                            />
                        </motion.div>
                    ))}
                </div>
            </ContentContainer>
        </section>
    )
}

export default IntroductionSection