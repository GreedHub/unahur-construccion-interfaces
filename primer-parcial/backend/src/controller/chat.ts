import { Lang } from "../types/lang";
import DialogflowDriver, { SessionData } from "../drivers/dialogflow";
import Models, { Model, ModelKeys } from "../types/model";
import * as uuid from "uuid";
import { invalidModelException } from "./errors/chat";

const DialogFlow = DialogflowDriver.getInstance("ciu-parcial");

export function createSession(model: Model, lang?: Lang): Promise<string> {
  const sessionId = uuid.v4();

  switch (model) {
    case Models.DIALOGFLOW:
      return Promise.resolve(DialogFlow.newSession(sessionId, lang));
    case Models.GPT:
      return Promise.resolve(sessionId);
    default:
      return Promise.reject(
        `Model "${model}" is not a valid model, please use: [${ModelKeys.join(
          ", "
        )}]`
      );
  }
}

export function getAllSessions(): SessionData[] {
  return DialogFlow.getAllSessions();
}

function _getSessionById(sessionId: string): SessionData {
  let session = DialogFlow.getSessionById(sessionId);

  if (!session)
    session = {
      id: "gpt_id",
      model: "GPT",
      title: "new_session",
      lang: "es-AR",
    };

  return session;
}

export async function answerPrompt(
  sessionId: string,
  prompt: string
): Promise<string> {
  const { model } = _getSessionById(sessionId);

  switch (model) {
    case Models.DIALOGFLOW:
      return DialogFlow.answerPrompt(sessionId, prompt);
    case Models.GPT:
      return Promise.resolve(`Response to ${prompt}`);
    default:
      Promise.reject(invalidModelException(model));
  }
}
