import React from 'react';
import ContentContainer from '@/components/common-ui/containers/ContentContainer';
import SectionTitleText from '@/components/common-ui/contentText/SectionTitleText';
import PageHeading from '@/components/common-ui/headers/PageHeading';
import { AppointmentData } from '@/data/home/appointment';
import AppointmentItem from '@/components/sections/home/appointment/AppointmentItem';

interface AppointmentSectionProps {
  data: AppointmentData;
}

const AppointmentSection = ({ data }: AppointmentSectionProps) => {
  return (
    <div>
      <ContentContainer className='space-y-12'>
        {/* Header Section */}
        <div className='text-center space-y-4'>
          <SectionTitleText wrapperClassName='items-center'>
            {data.sectionTitle}
          </SectionTitleText>
          <PageHeading 
            wrapperClassName="items-center" 
            className='text-4xl md:text-5xl text-center'
          >
            {data.heading}
          </PageHeading>
        </div>

        {/* Appointment Items - will repeat 3 times */}
        <div className="space-y-16">
          {data.items.map((item, index) => (
            <AppointmentItem 
              key={item.id}
              item={item}
              reverse={index % 2 !== 0} // Alternate layout for each item
            />
          ))}
        </div>
      </ContentContainer>
    </div>
  );
};

export default AppointmentSection;