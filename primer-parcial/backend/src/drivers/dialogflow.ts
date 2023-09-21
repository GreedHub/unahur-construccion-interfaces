//import * as DialogFlow from  'dialogflow'
const DialogFlow = require("dialogflow");
const { SessionsClient } = DialogFlow;
import PromiseHelper from "../utils/promise";
import { Lang } from "../types/lang";

export type SessionMapData = {
  title: string;
  sessionPath: any;
  lang: Lang;
  model: string;
};

export type SessionData = {
  title: string;
  id: string;
  lang: Lang;
  model: string;
};

export type SessionMap = Record<string, SessionMapData>;

export default class DialogflowDriver {
  private client: any;
  private sessions: SessionMap;
  private projectId: string;
  private static instance: DialogflowDriver;
  private static modelName = "DIALOGFLOW";

  private constructor(projectId: string) {
    this.client = new SessionsClient({
      keyFilename: "./credentials/gcp.json",
    });

    this.projectId = projectId;
    this.sessions = {};
  }

  public static getInstance(projectId: string) {
    if (!DialogflowDriver.instance)
      DialogflowDriver.instance = new DialogflowDriver(projectId);

    return DialogflowDriver.instance;
  }

  newSession(sessionId: string, lang: Lang = "es-AR"): string {
    const sessionPath = this.client.sessionPath(this.projectId, sessionId);
    this.sessions[sessionId] = {
      sessionPath,
      title: "new_session",
      lang,
      model: DialogflowDriver.modelName,
    };
    return sessionId;
  }

  getAllSessions(): SessionData[] {
    return Object.keys(this.sessions).map((id) => {
      const { title, lang, model } = this.sessions[id];

      return {
        id,
        title,
        model,
        lang,
      };
    });
  }

  getSessionById(sessionId: string): SessionData {
    const { title, lang, model } = this.sessions[sessionId];

    return {
      id: sessionId,
      title,
      model,
      lang,
    };
  }

  async answerPrompt(sessionId: string, prompt: string): Promise<string> {
    const { sessionPath, lang } = this.sessions[sessionId];

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: prompt,
          languageCode: lang,
        },
      },
    };

    const [responses, err] = await PromiseHelper(
      this.client.detectIntent(request)
    );

    if (err) {
      const parsedError = `Cannot get response from sessionId: ${sessionId}. Reason ${err}`;
      console.error(parsedError);
      throw new Error(parsedError);
    }

    const result = responses[0].queryResult;

    console.log(`Query: ${result.queryText}`);
    console.log(`Response: ${result.fulfillmentText}`);

    return result.fulfillmentText;
  }
}
