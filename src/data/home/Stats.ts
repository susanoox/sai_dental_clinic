export interface StatsItem {
  number: string;
  label: string;
}

export interface StatsData {
  stats: StatsItem[];
}

export const statsData: StatsData = {
  stats: [
    { number: "150+", label: "Smiles Transformed" },
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Happy Patients" },
    { number: "98%", label: "Patient Satisfaction" }
  ]
};