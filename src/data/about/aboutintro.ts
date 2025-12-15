export interface AboutIntroCard {
  icon: string;
  title: string;
  description: string;
}

export interface AboutIntroData {
  sectionTitle: string;
  heading: string;
  cards: AboutIntroCard[];
}

export const aboutIntroData: AboutIntroData = {
  sectionTitle: 'Our Philosophy',
  heading: 'Dedicated to excellence in dental care',
  cards: [
    {
      icon: "Heart",
      title: "Family-Focused Care",
      description: "We treat every patient like family, providing comfortable, compassionate care in a welcoming environment for all ages."
    },
    {
      icon: "Shield",
      title: "Advanced Technology",
      description: "Utilizing cutting-edge dental technology and techniques to ensure precise, effective, and minimally invasive treatments."
    },
    {
      icon: "Users",
      title: "Expert Team",
      description: "Our experienced dental professionals are dedicated to continuous learning and providing the highest standard of care."
    }
  ]
}