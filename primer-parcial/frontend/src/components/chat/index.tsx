import { ReactElement, useState } from "react";
import "./styles.scss";
import Message from "../../types/msg";
import Conversation from "./conversation";
import ChatContext from '../../context/chat'
import MessageBox from "./message-box";
import Perspective, { Perspectives } from "../../types/perspective";
import PromiseHelper from "../../utils/promise";
import Header from "./header";
import { answerPrompt } from "../../services/chat";

export default function Chat(): ReactElement {
  const [chatLog, setChatLog] = useState<Message[]>([]);
  const [title, setTitle] = useState<string>('Nuevo chat')
  const [isPromptEnabled, setPromptEnabled] = useState<boolean>(true)

  const addMessage = (msg:string,perspective:Perspectives)=>{
    setChatLog( (log:Message[]) => [...log, {msg,perspective}] )
  }

  const changeTitle = (newTitle:string) => {
    setTitle(() => newTitle)
  } 

  const getBotResponse = async (msg:string) =>{
    const [ response, err ] = await PromiseHelper(answerPrompt('fixme',msg))

    if(err) {
      setPromptEnabled(()=> true)
      console.error(err) ;
      /* fixme: enviar menesaje al usuario y retry */
      addMessage('Ocurrio un error al procesar tu mensaje, por favor intenta de nuevo', Perspective.CONTACT)
      setPromptEnabled(()=> true)
      return
    }

    addMessage(response.data.response, Perspective.CONTACT)
    setPromptEnabled(()=> true)
  }

  const addUserPrompt = (msg:string,perspective:Perspectives)=>{
    addMessage(msg,perspective)
    setPromptEnabled(()=> false)
    getBotResponse(msg)
  }

  return (
    <ChatContext.Provider value={{messages:chatLog,title,addMessage: addUserPrompt,changeTitle,isPromptEnabled}}>
      <div className="chat">
        <Header/> 
        <Conversation />
        <MessageBox/> 
      </div>
    </ChatContext.Provider>
  );
}
