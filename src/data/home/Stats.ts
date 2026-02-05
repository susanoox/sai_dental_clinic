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
    { number: "5+", label: "Years of Experience" },
    { number: "1000+", label: "Happy Patients" },
    { number: "100%", label: "Patient Satisfaction" }
  ]
};