import DialogflowDriver, {Lang, SessionData} from "../drivers/dialogflow";

const DialogFlow = DialogflowDriver.getInstance('ciu-parcial')


export function createSession(lang?:Lang): string{
    return DialogFlow.newSession(lang)
}

export function getAllSessions():  SessionData[]{
    return DialogFlow.getAllSessions()
}

export async function answerPrompt(sessionId:string, prompt:string): Promise<string>{
    return DialogFlow.answerPrompt(sessionId,prompt)
}