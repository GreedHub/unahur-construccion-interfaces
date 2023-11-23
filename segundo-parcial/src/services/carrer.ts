import Career from "../types/career";
import Institutes from "../types/institute";

const TIMEOUT = 100;

const CAREERS: Career[] = [
  {
    id: "tec-laboratory",
    name: "Tecnicatura Universitaria en Laboratorios",
    institute: Institutes.biotechnology,
  },
  {
    id: "tec-ambiental-science",
    name: "Tecnicatura Universitaria en Ciencias del Ambiente",
    institute: Institutes.biotechnology,
  },
  {
    id: "tec-food-technology",
    name: "Tecnicatura en Tecnología de los Alimentos",
    institute: Institutes.biotechnology,
  },
  {
    id: "tec-nursery",
    name: "Tecnicatura  Universitaria en Viverismo",
    institute: Institutes.biotechnology,
  },
  {
    id: "tec-peri-urban-agro-production",
    name: "Tecnicatura  Universitaria en Producción Agroecológica Periurbana",
    institute: Institutes.biotechnology,
  },
  {
    id: "lic-biotechnology",
    name: "Licenciatura en Biotecnología",
    institute: Institutes.biotechnology,
  },
  {
    id: "lic-environmental-management",
    name: "Licenciatura en Gestión Ambiental",
    institute: Institutes.biotechnology,
  },
  {
    id: "lic-food-technology",
    name: "Licenciatura en Tecnología de los Alimentos",
    institute: Institutes.biotechnology,
  },
  {
    id: "lic-agricultural-development",
    name: "Licenciatura en Desarrollo Agrario",
    institute: Institutes.biotechnology,
  },

  {
    id: "prof-physical-education",
    name: "Profesorado Universitario en Educación Física",
    institute: Institutes.education,
  },
  {
    id: "prof-letters",
    name: "Profesorado Universitario de Letras",
    institute: Institutes.education,
  },
  {
    id: "prof-english",
    name: "Profesorado Universitario de Inglés",
    institute: Institutes.education,
  },
  {
    id: "lic-education",
    name: "Licenciatura en Educación",
    institute: Institutes.education,
  },
  {
    id: "prof-mathematics",
    name: "Profesorado Universitario de Matemática",
    institute: Institutes.education,
  },
  {
    id: "prof-biology",
    name: "Profesorado Universitario de Biología",
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
  {
    id: "lic-nursing",
    name: "Licenciatura en Enfermería",
    institute: Institutes.comunitary_health,
  },

  {
    id: "tec-hospital-maintenance",
    name: "Tecnicatura Universitaria en Mantenimiento Hospitalario",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-industrial-maintenance",
    name: "Tecnicatura Universitaria en Mantenimiento Industrial",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-industrial-design",
    name: "Tecnicatura Universitaria en Diseño Industrial",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-metallurgy",
    name: "Tecnicatura Universitaria en Metalurgia",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-electrical-energy",
    name: "Tecnicatura Universitaria en Energía Eléctrica",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-electromobility",
    name: "Tecnicatura Universitaria en Electromovilidad",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-artificial-intelligence",
    name: "Tecnicatura Universitaria en Inteligencia Artificial",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-computer-networks-and-operations",
    name: "Tecnicatura Universitaria en Redes y Operaciones Informáticas",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-maintenance-management",
    name: "Licenciatura en Gestión del Mantenimiento",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-industrial-design",
    name: "Licenciatura en Diseño Industrial",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "ing-metallurgical",
    name: "Ingeniería Metalúrgica",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "ing-electric",
    name: "Ingeniería Eléctrica",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "lic-computing",
    name: "Licenciatura en Informática",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-programming",
    name: "Tecnicatura Universitaria en Programación",
    institute: Institutes.technology_and_ingeniery,
  },
  {
    id: "tec-programming-video-game",
    name: "Tecnicatura Universitaria en Programación de Videojuegos",
    institute: Institutes.technology_and_ingeniery,
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
