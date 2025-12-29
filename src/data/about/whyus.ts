export interface WhyUsData {
  sectionTitle: "Why us";
  heading: string;
  features: {
    title: string;
    description: string;
  }[];
}

export const whyUsData: WhyUsData = {
  sectionTitle: 'Why us',
  heading: "Expertise, precision, and care for every patient",
  features: [
    {
      title: "Patient-centered care",
      description: "Focused on your comfort and satisfaction at every visit."
    },
    {
      title: "Cutting-edge technology",
      description: "Delivering precise, efficient treatments using advanced tools and modern techniques for optimal results and faster recovery."
    }
  ]
};