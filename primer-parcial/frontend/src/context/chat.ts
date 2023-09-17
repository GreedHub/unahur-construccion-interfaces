import { createContext } from "react";
import type Message from "../types/msg";
import { Perspectives } from "../types/perspective";

export const defaultChatValues = {
    title: '',
    messages: [] as Message[],
    isPromptEnabled: true,
    addMessage: function(msg:string,perspective:Perspectives){
        this.messages.push({msg,perspective})
    },
    changeTitle: function(newTitle:string): void{
        this.title = newTitle
    }
}

export default createContext<typeof defaultChatValues>(defaultChatValues)