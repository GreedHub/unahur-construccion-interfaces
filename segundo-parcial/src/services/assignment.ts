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
