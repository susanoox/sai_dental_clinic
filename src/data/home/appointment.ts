export interface AppointmentItem {
  id: number;
  image: string;
  title: string;
  description: string;
  features: string[];
}

export interface AppointmentData {
  sectionTitle: string;
  heading: string;
  items: AppointmentItem[];
}

export const appointmentData: AppointmentData = {
  sectionTitle: 'How it works',
  heading: 'Schedule your visit',
  items: [
    {
      id: 1,
      image: '/images/heroSectionImage1.jpg', // You'll need to add this image
      title: 'Book an appointment',
      description: 'Book an appointment at your convenience through our easy scheduling system, and we\'ll ensure a hassle-free experience from the start.',
      features: [
        'Contact us',
        'See All Templates', 
        'Made in Framer'
      ]
    },
    // We'll add 2 more items later for the 3 repetitions
    {
      id: 2,
      image: '/images/heroSectionImage1.jpg',
      title: 'Consultation',
      description: 'Meet our dental experts for a comprehensive consultation and personalized treatment plan.',
      features: [
        'Professional assessment',
        'Treatment planning',
        'Cost estimation'
      ]
    },
    {
      id: 3,
      image: '/images/heroSectionImage1.jpg',
      title: 'Treatment',
      description: 'Receive top-quality dental care with our advanced technology and experienced team.',
      features: [
        'Advanced equipment',
        'Expert care',
        'Follow-up support'
      ]
    }
  ]
};