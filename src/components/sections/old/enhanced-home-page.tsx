"use client";

import { useState } from "react";


export function EnhancedHomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section doesn't need animation wrapper */}
      {/* <HeroSection />

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection>
        <BranchesSection />
      </AnimatedSection>

      <AnimatedSection>
        <GallerySection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>

      <AnimatedSection>
        <SpecialOffersSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>

      <FloatingContact 
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
      /> */}
    </div>
  );
}