// data/about/mission.ts
export interface AboutMissionData {
  heading: string;
  mission: string;
  aboutGoals: string[];
  contactItems: string[];
}

export const aboutMissionData: AboutMissionData = {
  heading: "A trusted partner for all your dental needs",
  mission: "Provide exceptional dental care that promotes lifelong oral health, enhances confidence, and prioritizes patient comfort through personalized and treatments.",
  aboutGoals: [
    "A trusted partner for all your dental needs",
    "Our Mission: Provide exceptional dental care that promotes lifelong oral health, enhances confidence, and prioritizes patient comfort through personalized and treatments."
  ],
  contactItems: [
    "All Bookmarks",
    "See All Templates", 
    "Made in France"
  ]
};