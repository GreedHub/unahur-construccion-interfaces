import Favoriteable, { Linkeable } from "./favorite";

type Assignment = Favoriteable & {
  id: string;
  name: string;
  careers: string[];
};

export type AssignmentWithLink = Assignment & Linkeable;

export default Assignment;
