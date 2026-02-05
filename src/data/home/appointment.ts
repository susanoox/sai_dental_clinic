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
  sectionTitle: "How it works",
  heading: "Schedule your visit",
  items: [
    {
      id: 1,
      image: "/images/heroSectionImage1.jpg",
      title: "Book an Appointment",
      description:
        "Schedule your appointment easily by phone or online at a time that works best for you.",
      features: [
        "Quick & easy booking",
        "Flexible appointment slots",
        "Friendly assistance"
      ]
    },
    {
      id: 2,
      image: "/images/heroSectionImage1.jpg",
      title: "Consultation",
      description:
        "Get a thorough dental check-up and a personalized treatment plan tailored to your needs.",
      features: [
        "Detailed dental examination",
        "Clear treatment explanation",
        "Transparent cost guidance"
      ]
    },
    {
      id: 3,
      image: "/images/heroSectionImage1.jpg",
      title: "Treatment",
      description:
        "Receive high-quality dental care using modern technology in a comfortable environment.",
      features: [
        "Advanced dental technology",
        "Gentle & precise care",
        "Post-treatment guidance"
      ]
    }
  ]
}
