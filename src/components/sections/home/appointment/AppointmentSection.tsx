// AppointmentSection.tsx
// Added whileInView animations — transforms only apply when section is visible,
// not permanently from page load. This prevents stale transforms from clipping
// fixed-position elements above/below this section.

"use client"

import React from 'react';
import { motion } from 'framer-motion';
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
    // Use a semantic section, not a bare div — avoids stacking context issues
    <section>
      <ContentContainer className='space-y-12'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='text-center space-y-4 max-w-4xl mx-auto'
        >
          <SectionTitleText wrapperClassName='items-center'>
            {data.sectionTitle}
          </SectionTitleText>
          <PageHeading
            wrapperClassName="items-center"
            className='text-4xl md:text-5xl text-center'
          >
            {data.heading}
          </PageHeading>
        </motion.div>

        <div className="space-y-12">
          {data.items.map((item, index) => (
            <AppointmentItem
              key={item.id}
              item={item}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default AppointmentSection;