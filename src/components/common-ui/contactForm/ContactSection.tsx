"use client";

import React from "react";
import ContentContainer from "@/components/common-ui/containers/ContentContainer";
import { ContactForm } from "@/components/common-ui/contactForm/ContactForm";
import { ContactInfoList } from "@/components/common-ui/contactForm/ContactInfoList";
import { contactLocations } from "@/data/contact/contact";

interface ContactSectionProps {
  locations?: typeof contactLocations;
  showForm?: boolean;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  locations = contactLocations,
  showForm = true,
  className = "",
}) => {
  return (
    <div className={`bg-[#f5f8ff] ${className}`}>
      <ContentContainer>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <ContactInfoList locations={locations} />
          {showForm && (
            <div className="md:pl-4">
              <ContactForm />
            </div>
          )}
        </div>
      </ContentContainer>
    </div>
  );
};

export default ContactSection;
