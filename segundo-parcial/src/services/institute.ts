import Institutes, { Institute } from "../types/institute";

const TIMEOUT = 100;

const INSTITUTES: Institute[] = [
  { name: "Instituto biotecnologia", id: Institutes.biotechnology },
  { name: "Instituto educación", id: Institutes.education },
  { name: "Instituto salud comunitaria", id: Institutes.comunitary_health },
  {
    name: "Instituto tecnología e ingeniería",
    id: Institutes.technology_and_ingeniery,
  },
];

export async function GetInstitutes(): Promise<Institute[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(INSTITUTES);
    }, TIMEOUT);
  });
}
