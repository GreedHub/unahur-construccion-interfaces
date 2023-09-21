import { Lang } from "../types/lang";
import DialogflowDriver from "../drivers/dialogflow";
import Models, { Model, ModelKeys } from "../types/model";
import * as uuid from "uuid";
import { invalidModelException } from "./errors/chat";
import { SessionData } from "../drivers";
import GPTDriver from "../drivers/gpt";

const DialogFlow = DialogflowDriver.getInstance("ciu-parcial");
const GPT = GPTDriver.getInstance("ciu-parcial");


export function createSession(model: Model, lang?: Lang): Promise<string> {
  const sessionId = uuid.v4();

  switch (model) {
    case Models.DIALOGFLOW:
      return Promise.resolve(DialogFlow.newSession(sessionId, lang));
    case Models.GPT:
      return Promise.resolve(GPT.newSession(sessionId, lang));
    case Models.MOCK:
      return Promise.resolve('mock_id');
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
    session = GPT.getSessionById(sessionId)

  if(!session)
    session = {
      id: "mock_id",
      model: "MOCK",
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
      return GPT.answerPrompt(sessionId, prompt);
    case Models.MOCK:
      return Promise.resolve(`Response to ${prompt}`);
    default:
      Promise.reject(invalidModelException(model));
  }
}
