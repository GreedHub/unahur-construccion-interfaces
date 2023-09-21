import { Lang } from "../types/lang";
import DialogflowDriver, { SessionData } from "../drivers/dialogflow";
import Models, { Model, ModelKeys } from "../types/model";

const DialogFlow = DialogflowDriver.getInstance("ciu-parcial");

export function createSession(model: Model, lang?: Lang): string {
  switch (model) {
    case Models.DIALOGFLOW:
      return DialogFlow.newSession(lang);
    case Models.GPT:
      return "123";
    default:
      throw new Error(
        `Model "${model}" is not a valid model, please use: [${ModelKeys.join(
          ", "
        )}]`
      );
  }
}

export function getAllSessions(): SessionData[] {
  return DialogFlow.getAllSessions();
}

export async function answerPrompt(
  sessionId: string,
  prompt: string
): Promise<string> {
  return DialogFlow.answerPrompt(sessionId, prompt);
}
