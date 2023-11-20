import Assignment from "../types/assignment.ts";

const TIMEOUT = 100;

const ASSIGNMENTS: Assignment[] = [
  {
    id: "mate1",
    name: "Matemática 1",
    careers: ["tec-laboratory", "tec-ambiental-science", "lic-food-technology"],
  },
];

export async function GetAssignments(): Promise<Assignment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ASSIGNMENTS);
    }, TIMEOUT);
  });
}
