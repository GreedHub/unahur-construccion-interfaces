import {  FormEvent, ReactElement, useContext } from "react";
import "./styles.scss";
import ChatContext from '../../../context/chat'
import Perspective from "../../../types/perspective";

export default function MessageBox(): ReactElement {
  const { addMessage, isPromptEnabled } = useContext(ChatContext);

  const onFromSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const msg:string = e.currentTarget.msg.value

    addMessage(msg,Perspective.USER)
  }

  return (
    /* todo: deshabilitar en caso de is... sea falso */
    <form className={`chat__msg-box`} onSubmit={onFromSubmit} >
      <input type="text" name="msg" id="msg" placeholder="Enter your prompt..." />
    </form>
  );
}
