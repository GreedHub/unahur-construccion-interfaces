import { Linkeable } from "./favorite";

type Assignment = {
  id: string;
  name: string;
  careers: string[];
};

export type AssignmentWithLink = Assignment & Linkeable;

export default Assignment;
