import Career from "../types/career";
import Institutes from "../types/institute";

const TIMEOUT = 100;

const CAREERS: Career[] = [
  {
    id: "tec-laboratory",
    name: "Tecnicatura en laboratorios",
    institute: Institutes.biotechnology,
  },
  {
    id: "tec-ambiental-science",
    name: "Tecnicatura en Ciencias del Ambiente",
    institute: Institutes.biotechnology,
  },
  {
    id: "lic-food-technology",
    name: "Licenciatura en Tecnología de los Alimentos",
    institute: Institutes.biotechnology,
  },
];

export async function GetCareers(): Promise<Career[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CAREERS);
    }, TIMEOUT);
  });
}

export async function GetCareerById(careerId: string): Promise<Career> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const career = CAREERS.find((c) => c.id === careerId);

      if (!career) return reject(`No career with id ${careerId} found`);

      resolve(career);
    }, TIMEOUT);
  });
}

export async function GetCareersByInstituteId(
  instituteId: string
): Promise<Career[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const careers = CAREERS.filter((c) => c.institute === instituteId);
      if (!careers)
        return reject(`No carrers with institute ${instituteId} found`);

      resolve(careers);
    }, TIMEOUT);
  });
}
