import Career from "../types/carrer";
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
