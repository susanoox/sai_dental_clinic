import { Box, Heart, LucideIcon, Wrench } from "lucide-react";

export interface IntroductionCard {
  icon: string;
  title: string;
  description: string;
}

export interface IntroductionData {
  sectionTitle: string;
  heading: string;
  cards: IntroductionCard[];
}

export interface IntroductionData {
    sectionTitle: string;
    heading: string;
    cards: IntroductionCard[];
  }

export const introductionData = {
  sectionTitle: 'Introduction',
  heading: 'A commitment to healthier, brighter smiles',
  cards: [
    {
      icon: "Wrench",
      title: "Personalized care",
      description:
        "Every smile is unique, and our treatments are tailored to meet your specific needs. From preventive care to advanced treatments."
    },
    {
      icon: "Box",
      title: "Advanced technology",
      description:
        "We use state-of-the-art tools and techniques to deliver precise, efficient, and effective treatments."
    },
    {
      icon: "Heart",
      title: "Team that cares",
      description:
        "Our dedicated team combines expertise with compassion, ensuring you feel supported at every step."
    }
  ]
}

export async function getLucideIcon(name: string) {
    try {
      // Dynamically import the requested icon
      const iconModule = await import(`lucide-react`);
      const Icon = iconModule[name as keyof typeof iconModule];
  
      if (!Icon) {
        console.warn(`Lucide icon "${name}" not found.`);
        return null;
      }
  
      return Icon;
    } catch (error) {
      console.error(`Error loading Lucide icon "${name}":`, error);
      return null;
    }
  }