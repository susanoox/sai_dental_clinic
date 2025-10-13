import AnimatedIcon from '@/components/common-ui/animationIcon/AnimatedIcon';
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText';
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading';
import { IntroductionData } from '@/data/home/introduction';
import React from 'react'
import FeatureCard from './FeatureCard';

interface IntroductionSectionProps {
    data: IntroductionData;
}

const IntroductionSection = ({ data }: IntroductionSectionProps) => {
    return (
        <div>
            <ContentContainer className='items-center justify-center space-y-8'>
                <SectionTitleText wrapperClassName='items-center'>{data.sectionTitle}</SectionTitleText>
                <PageHeading wrapperClassName="items-center w-1/2" className='text-5xl text-center '>{data.heading}</PageHeading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {data.cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left gap-4"
                        >
                            <FeatureCard
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </div>
    )
}

export default IntroductionSection