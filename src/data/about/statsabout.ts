export interface StatsItem {
  number: string;
  label: string;
}

export interface StatsData {
  stats: StatsItem[];
}

export const aboutStatsData: StatsData = {
  stats: [
    { number: "150+", label: "Smiles Transformed" },
    { number: "1000+", label: "Happy Patients" },
    { number: "250+", label: "Successful treatments" },
    { number: "5+", label: "Years of Experience" },
  ]
}