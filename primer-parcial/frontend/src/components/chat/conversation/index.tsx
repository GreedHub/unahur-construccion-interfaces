import { ReactElement, useContext, useEffect, useRef } from "react";
import Bubble from "./bubble";
import "./styles.scss";
import ChatContext from '../../../context/chat'

export default function Conversation(): ReactElement {
  const { messages } = useContext(ChatContext);
  const lastBubble = useRef(null)

  useEffect(()=>{
    if(!lastBubble) return;
    if(!lastBubble.current) return;

    const current = lastBubble.current as HTMLDivElement
    
    current.scrollIntoView({behavior:"smooth"})
  },[messages])

  return (
    <div className={`chat__conversation`} id="chat__conversation">
      {messages.map((msg,index) => {
        if(index === messages.length-1)
          return <Bubble msg={msg.msg} perspective={msg.perspective} key={index} ref={lastBubble}/>

        return <Bubble msg={msg.msg} perspective={msg.perspective} key={index} />
      })}
    </div>
  );
}
