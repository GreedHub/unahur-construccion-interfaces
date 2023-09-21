import { ModelKeys } from "../../types/model";

export function invalidModelException(model: string) {
  return `Model "${model}" is not a valid model, please use: [${ModelKeys.join(
    ", "
  )}]`;
}
