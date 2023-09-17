import { ReactElement, useContext } from "react";
import Bubble from "./bubble";
import "./styles.scss";
import ChatContext from '../../../context/chat'

export default function Conversation(): ReactElement {
  const { messages } = useContext(ChatContext);

  return (
    <div className={`chat__conversation`}>
      {messages.map((msg,index) => (
        <Bubble msg={msg.msg} perspective={msg.perspective} key={index} />
      ))}
    </div>
  );
}
