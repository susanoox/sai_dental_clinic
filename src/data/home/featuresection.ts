export interface Feature {
  title: string
  description: string
  icon: string
}

export const features: Feature[] = [
  {
    title: "Preventive care",
    description: "Regular checkups and cleanings help maintain optimal oral health and prevent potential issues.",
    icon: "Shield"
  },
  {
    title: "Emergency care",
    description: "Immediate assistance for dental emergencies, ensuring your comfort and quick resolution of urgent issues.",
    icon: "Clock"
  },
  {
    title: "Advanced technology",
    description: "Our state-of-the-art equipment ensures precise diagnostics and effective treatments for every patient.",
    icon: "Zap"
  },
  {
    title: "Personalized treatments",
    description: "Every service is tailored to meet your unique dental needs, ensuring the best possible outcomes.",
    icon: "Users"
  },
  {
    title: "Cosmetic solutions",
    description: "Transform your smile with teeth whitening, veneers, and other advanced aesthetic treatments.",
    icon: "Smile"
  },
  {
    title: "Family-friendly services",
    description: "We provide comprehensive care for patients of all ages, making us the perfect choice for your family.",
    icon: "Heart"
  }
]