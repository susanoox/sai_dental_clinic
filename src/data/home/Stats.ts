export interface StatsItem {
  number: string;
  label: string;
}

export interface StatsData {
  stats: StatsItem[];
}

export const statsData: StatsData = {
  stats: [
    { number: "2000+", label: "Smiles Transformed" },
    { number: "5+", label: "Years of Experience" },
    { number: "3000+", label: "Happy Patients" },
    { number: "100%", label: "Patient Satisfaction" }
  ]
};