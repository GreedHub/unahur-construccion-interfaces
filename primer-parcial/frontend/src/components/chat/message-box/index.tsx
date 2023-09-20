import {  FormEvent, ReactElement, useContext } from "react";
import "./styles.scss";
import ChatContext from '../../../context/chat'
import Perspective from "../../../types/perspective"
import { SendOutlined } from "@mui/icons-material";

export default function MessageBox(): ReactElement {
  const { addMessage, isPromptEnabled } = useContext(ChatContext);

  const onFromSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    if(!isPromptEnabled) return

    const msg:string = e.currentTarget.msg.value

    addMessage(msg,Perspective.USER)
  }

  return (
    /* todo: deshabilitar en caso de is... sea falso */
    <form className={`chat__msg-box`} onSubmit={onFromSubmit} >
      <div className="chat__inputs">
        <input type="text" name="msg" id="msg" placeholder="Enter your prompt..." />
        <input type="submit"><SendOutlined/></input>
      </div>
    </form>
  );
}
