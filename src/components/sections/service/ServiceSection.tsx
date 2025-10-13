import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import React from 'react'
import HeroActions from '../home/heroSection/HeroActions'
import { ServiceData } from '@/data/service/service'
import ServiceCard from './ServiceCard'
import { MotionProps } from 'framer-motion'

interface ServiceSectionProps {
  data: ServiceData;
  pageHeading?: boolean;
  animate?: MotionProps
}

const ServiceSection = ({ data, pageHeading, animate }: ServiceSectionProps) => {
  return (
    <div>
      <ContentContainer className='items-center justify-center space-y-8'>
        <SectionTitleText wrapperClassName='items-center' motionProps={animate}>{data.sectionTitle}</SectionTitleText>
        <PageHeading wrapperClassName={`items-center ${!pageHeading ? "w-1/2" : ""}`}
          className={`text-center ${!pageHeading ? "text-5xl  " : ""}`}
          motionProps={animate}
        >
          {data.heading}
        </PageHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left gap-16"
            >
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                imgSrc={card.imgSrc}
                rating={card.rating}
                id={card.id}
                motionProps={animate}
              />
            </div>
          ))}
        </div>
      </ContentContainer>
    </div>
  )
}

export default ServiceSection