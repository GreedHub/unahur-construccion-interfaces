import Favoriteable from "./favorite";
import { InstituteKeys } from "./institute";

type Career = Favoriteable & {
  id: string;
  name: string;
  institute: InstituteKeys;
};

export default Career;
