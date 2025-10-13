"use client"

import ContactSection from '@/components/common-ui/contactForm/ContactSection'
import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import PageHeading from '@/components/common-ui/headers/PageHeading'
import HeroImage from '@/components/sections/home/heroSection/HeroImage'
import FeatureChecklist from '@/components/sections/service/FeatureChecklist'
import { contactLocations } from '@/data/contact/contact'
import { serviceData } from '@/data/service/service'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const param = useParams()
    console.log(param)

    const filteredData = serviceData.cards.filter((item) => item.id.toString() === param.id)
    console.log(filteredData)
    return (
        <div>
            <ContentContainer>
                {/* <div className="text-white bg-primary p-4 text-center">
                    <Image src="/images/teeth.svg" alt="teeth" width={100} height={100} />
                </div> */}
                {
                    filteredData.map((item) => (
                        <div key={item.id} className=' flex space-y-8  flex-col '>
                            <div className='flex flex-col items-center space-y-4'>
                                <PageHeading children={item.title} motionProps={{ animate: { opacity: 1, y: 0 } }} />
                                <div className='text-center w-[30rem]'>
                                    <ContentText children={item.description} className='px-6' motionProps={{ animate: { opacity: 1, y: 0 } }} />
                                </div>
                            </div>
                            <HeroImage src={item.imgSrc} alt={item.title} className='max-w-full h-[90vh]' motionProps={{ animate: { opacity: 1 , scale:1 } }} />
                            <div className='flex flex-col space-y-8 lg:px-20 '>
                                {
                                    item?.detailsPageData?.map((detail, idx) => (
                                        <div key={idx} className='flex flex-col  space-y-6 lg:mt-10 '>
                                            <PageHeading children={detail.title} className='text-5xl' />
                                            {
                                                detail?.description?.map((desc, idx) => (
                                                    <ContentText key={idx} children={desc} className='' />
                                                ))
                                            }
                                        </div>
                                    ))
                                }

                                {item.featureChecklist && <FeatureChecklist items={item.featureChecklist} />}
                            </div>

                        </div>

                    ))
                }

            </ContentContainer>
            <ContactSection locations={contactLocations} />
        </div>
    )
}

export default Page