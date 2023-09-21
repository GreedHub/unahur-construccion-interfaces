require("dotenv").config();
import PromiseHelper from "../utils/promise";
import { Lang } from "../types/lang";
import Driver, { SessionData, SessionMap } from ".";
import Models from "../types/model";
import axios, { AxiosRequestConfig } from "axios";

export default class GPTDriver extends Driver {
  protected client: any;
  protected sessions: SessionMap;
  protected projectId: string;
  protected static instance: GPTDriver;
  protected static modelName = Models.GPT;
  protected OPENAI_API_KEY = process.env.GPT_TOKEN;

  protected constructor(projectId: string) {
    super(projectId);
    this.projectId = projectId;
    this.sessions = {};
    this.client = axios;
  }

  public static getInstance(projectId: string) {
    if (!GPTDriver.instance) GPTDriver.instance = new GPTDriver(projectId);

    return GPTDriver.instance;
  }

  newSession(sessionId: string, lang: Lang = "es-AR"): string {
    this.sessions[sessionId] = {
      title: "new_session",
      lang,
      model: GPTDriver.modelName,
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

  getSessionById(sessionId: string): SessionData | null {
    const session = this.sessions[sessionId];

    if (!session) return null;

    const { title, lang, model } = session;

    return {
      id: sessionId,
      title,
      model,
      lang,
    };
  }

  async answerPrompt(sessionId: string, prompt: string): Promise<string> {
    const req: AxiosRequestConfig = {
      method: "POST",
      url: `https://api.openai.com/v1/chat/completions`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.OPENAI_API_KEY}`,
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
    };

    const [response, err] = await PromiseHelper(axios(req));

    if (err) {
      const parsedError = `Cannot get response from sessionId: ${sessionId}. Reason: ${err}`;
      console.error(parsedError);
      return Promise.reject(parsedError);
    }

    const result = response?.choices[0];

    if (!result) {
      const parsedError = `Cannot get response from sessionId: ${sessionId}. Reason: no response choices`;
      console.error(parsedError);
      return Promise.reject(parsedError);
    }

    return result.message.content;
  }
}
