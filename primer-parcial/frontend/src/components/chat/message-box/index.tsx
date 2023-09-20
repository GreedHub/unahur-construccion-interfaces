import {  FormEvent, ReactElement, useContext } from "react";
import "./styles.scss";
import ChatContext from '../../../context/chat'
import Perspective from "../../../types/perspective"
import { Send } from "@mui/icons-material";

export default function MessageBox(): ReactElement {
  const { addMessage, isPromptEnabled } = useContext(ChatContext);

  const onFromSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    if(!isPromptEnabled) return

    const msg:string = e.currentTarget.msg.value

    if(!msg) return

    addMessage(msg,Perspective.USER)

    e.currentTarget.msg.value = ''
  }

  return (
    /* todo: deshabilitar en caso de is... sea falso */
    <form className={`chat__msg-box`} onSubmit={onFromSubmit} >
      <div className="chat__inputs">
        <input type="text" name="msg" id="msg" placeholder="Enter your prompt..." />
        <button className="chat__submit"><Send/></button>
      </div>
    </form>
  );
}
