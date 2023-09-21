export const Models = {
  GPT: "GPT",
  DIALOGFLOW: "DIALOGFLOW",
  MOCK: "MOCK",
} as const;

export const ModelKeys = Object.keys(Models);

export type Model = keyof typeof Models;

export default Models;
