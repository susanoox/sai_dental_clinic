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
        "Every smile is unique, and treatments are carefully tailored to your specific needs — from preventive care to advanced dental procedures."
    },
    {
      icon: "Box",
      title: "Advanced technology",
      description:
        "Modern, state-of-the-art tools and techniques are used to ensure precise, comfortable, and effective treatments."
    },
    {
      icon: "Heart",
      title: "A Dentist Who Cares",
      description:
        "You’ll be treated by a dentist who listens, explains, and truly cares about your comfort and smile."
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