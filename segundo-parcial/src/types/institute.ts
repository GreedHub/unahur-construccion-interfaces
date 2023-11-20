const Institutes = {
  biotechnology: "biotechnology",
  education: "education",
  comunitary_health: "comunitary_health",
  technology_and_ingeniery: "technology_and_ingeniery",
} as const;

export type InstituteKeys = keyof typeof Institutes;

export type Institute = {
  name: string;
  id: InstituteKeys;
};

export default Institutes;
