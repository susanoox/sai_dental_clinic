export interface HeroSectionData {
    sectionTitle: string;
    heading: string;
    content: string[];
    buttonText: string;
    phone: string;
    image: string;
  }

  export const heroSectionData: HeroSectionData = {
    sectionTitle: 'Healthy smiles, happy lives.',
    heading: 'Bringing brighter smiles to your family',
    content: [
      'Experience personalized dental care designed to meet your unique needs. From preventive checkups to advanced oral health and confidence are always at their best.'
    ],
    buttonText: 'Book Now',
    phone: '+91 9876543210',
    image: '/images/heroSectionImage1.jpg'
  };