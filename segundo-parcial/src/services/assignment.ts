import Assignment from "../types/assignment.ts";

const TIMEOUT = 100;

const ASSIGNMENTS: Assignment[] = [
  {
    id: "mate1",
    name: "Matemática 1",
    careers: [
      "tec-laboratory",
      "tec-ambiental-science",
      "lic-food-technology",
      "tec-programming",
      "tec-industrial-maintenance",
      "ing-electric",
      "prof-physical-education",
      "lic-education",
      "prof-english",
      "univ-nursing",
      "lic-kinesiology-and-physiatry",
      "lic-obstetrics",
    ],
    isFavorite: true,
  },
  {
    id: "bio-gral",
    name: "Obstetricia II",
    careers: ["lic-obstetrics"],
  },
  {
    id: "epidemiologia",
    name: "Epidemiología",
    careers: ["lic-kinesiology-and-physiatry"],
  },
  {
    id: "enf-en-salud-mental",
    name: "Enfermería en Salud Mental ",
    careers: ["univ-nursing"],
  },
  {
    id: "obstr2",
    name: "Biología General",
    careers: ["tec-laboratory", "lic-food-technology"],
  },
  {
    id: "filosof-en-educ",
    name: "Filosofía de la educación",
    careers: ["lic-education"],
  },
  {
    id: "ed-fis-en-ninez",
    name: "Educación física en la niñez",
    careers: ["prof-physical-education"],
  },
  {
    id: "leng-inglesa1",
    name: "Lengua Inglesa I",
    careers: ["prof-english"],
  },
  {
    id: "intro-energ-elec",
    name: "Introducción a la Energía Eléctrica",
    careers: ["ing-electric"],
  },
  {
    id: "mat-y-elem-de-maq",
    name: "Materiales y elementos de máquinas",
    careers: ["tec-industrial-maintenance"],
  },
  {
    id: "fisica",
    name: "Física",
    careers: ["tec-laboratory", "tec-ambiental-science", "lic-food-technology"],
  },
  {
    id: "ingles1",
    name: "Inglés 1",
    careers: [
      "tec-laboratory",
      "tec-ambiental-science",
      "lic-food-technology",
      "tec-programming",
      "tec-industrial-maintenance",
      "ing-electric",
      "prof-physical-education",
      "lic-education",
      "prof-english",
      "univ-nursing",
      "lic-kinesiology-and-physiatry",
      "lic-obstetrics",
    ],
  },
  {
    id: "CIU",
    name: "Construcción de Interfaces de Usuario",
    careers: ["tec-programming"],
    isFavorite: true,
  },
  {
    id: "BD",
    name: "Bases de Datos",
    careers: ["tec-programming"],
    isFavorite: true,
  },
  {
    id: "EP",
    name: "Estrategias de persistencia",
    careers: ["tec-programming"],
    isFavorite: true,
  },
  {
    id: "intro-log-y-problem-comp",
    name: "Introducción a lógica y problemas computacionales",
    careers: ["tec-programming"],
  },
  {
    id: "taller-marcado",
    name: "Taller de lenguajes de marcado y tecnologías web",
    careers: ["tec-programming"],
    isFavorite: true,
  },
];

export async function GetAssignments(): Promise<Assignment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ASSIGNMENTS);
    }, TIMEOUT);
  });
}

export async function GetFavoriteAssignments(): Promise<Assignment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ASSIGNMENTS.filter((a) => a.isFavorite));
    }, TIMEOUT);
  });
}

export async function GetAssignmentsByCareerId(
  carrerId: string
): Promise<Assignment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const assignments = ASSIGNMENTS.filter((a) =>
        a.careers.includes(carrerId)
      );
      resolve(assignments);
    }, TIMEOUT);
  });
}

export async function GetAssignmentById(
  assignmentId: string
): Promise<Assignment> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const assignment = ASSIGNMENTS.find(
        (assignment) => assignment.id === assignmentId
      );
      if (!assignment)
        return reject(`No assignment with id ${assignmentId} found`);

      resolve(assignment);
    }, TIMEOUT);
  });
}
