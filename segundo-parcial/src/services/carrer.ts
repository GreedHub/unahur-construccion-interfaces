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
  {
    id: "tec-programming",
    name: "Tecnicatura en Programación",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-industrial-maintenance",
    name: "Tecnicatura Universitaria en Mantenimiento Industrial",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "ing-electric",
    name: "Ingeniería Eléctrica",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "prof-physical-education",
    name: "Profesorado Universitario en Educación Física",
    institute: Institutes.education,
  },
  {
    id: "lic-education",
    name: "Licenciatura en Educación",
    institute: Institutes.education,
  },
  {
    id: "prof-english",
    name: "Profesorado Universitario de Inglés",
    institute: Institutes.education,
  },
  {
    id: "univ-nursing",
    name: "Enfermería Universitaria",
    institute: Institutes.comunitary_health,
  },
  {
    id: "lic-kinesiology-and-physiatry",
    name: "Licenciatura en Kinesiología y Fisiatría",
    institute: Institutes.comunitary_health,
  },
  {
    id: "lic-obstetrics",
    name: "Licenciatura en Obstetricia",
    institute: Institutes.comunitary_health,
  },
];

export async function GetCareers(): Promise<Career[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CAREERS);
    }, TIMEOUT);
  });
}

export async function GetFavoriteCareers(): Promise<Career[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CAREERS.filter((c) => c.isFavorite));
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
