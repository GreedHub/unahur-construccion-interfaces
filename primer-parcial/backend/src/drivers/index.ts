import { Lang } from "../types/lang";

export type SessionMapData = {
    title: string;
    sessionPath?: any;
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

export default abstract class Driver{

    protected client: any;
    protected sessions: SessionMap;
    protected projectId: string;
    protected static instance: Driver;
    protected static modelName = "";
  
    protected constructor(projectId: string) {
      this.projectId = projectId;
      this.sessions = {};
    }
  
    public static getInstance(projectId: string) {  
      return Driver.instance;
    }
  
    abstract newSession(sessionId: string, lang: Lang): string 
  
    abstract getAllSessions(): SessionData[] 
  
    abstract getSessionById(sessionId: string): SessionData | null 
  
    abstract answerPrompt(sessionId: string, prompt: string): Promise<string> 

}


