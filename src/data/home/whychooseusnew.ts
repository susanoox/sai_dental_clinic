export interface WhyChooseUsFeature {
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  sectionTitle: string;
  heading: string;
  description: string;
  buttonText: string;
  image: string;
  features: WhyChooseUsFeature[];
}

export const whyChooseUsData: WhyChooseUsData = {
  sectionTitle: 'Why Choose Us',
  heading: 'Why choose us',
  description: 'We are dedicated to providing exceptional dental care that prioritizes your comfort, convenience, and lasting results. Here\'s what makes us stand out:',
  buttonText: 'About us',
  image: '/images/teeth.jpg',
  features: [
    {
      title: "Compassionate care with a focus",
      description: "Our team provides gentle, empathetic dental care tailored to your individual needs and concerns."
    },
    {
      title: "State-of-the-art technology for treatments",
      description: "We utilize the latest dental technology and equipment to ensure precise, efficient, and comfortable treatments."
    },
    {
      title: "Personalized solutions to every smile",
      description: "Every treatment plan is customized to achieve your unique dental goals and create your perfect smile."
    }
  ]
};