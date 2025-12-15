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
    { number: "500+", label: "Happy Patients" },
    { number: "250+", label: "Successful treatments" },
    { number: "10+", label: "Years of Experience" },
    { number: "98%", label: "Patient Satisfaction Rate" },
    { number: "20+", label: "Dedicated professionals" }
  ]
}