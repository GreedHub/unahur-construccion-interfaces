export const Langs = {
  "es-AR": "es-AR",
  "en-US": "en-US",
} as const;

export type Lang = keyof typeof Langs;

export default Langs;
