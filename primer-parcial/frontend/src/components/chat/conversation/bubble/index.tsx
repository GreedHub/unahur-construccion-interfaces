import { forwardRef } from "react";
import "./styles.scss";
import Message from "../../../../types/msg";

type BubbleProps = Message;

const Bubble = forwardRef<HTMLDivElement,BubbleProps>((props,ref) => {
  const { perspective, msg } = props;

  return <div ref={ref} className={`chat__bubble ${perspective}`}>{msg}</div>;
})

export default Bubble
