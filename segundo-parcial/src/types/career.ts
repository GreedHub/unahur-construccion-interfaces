import Favoriteable, { Linkeable } from "./favorite";
import { InstituteKeys } from "./institute";

type Career = Favoriteable & {
  id: string;
  name: string;
  institute: InstituteKeys;
};

export type CareerWithLink = Career & Linkeable;

export default Career;
