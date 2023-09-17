import { ReactElement } from "react";
import "./styles.scss";
import Message from "../../../../types/msg";

type BubbleProps = Message;

export default function Bubble(props: BubbleProps): ReactElement {
  const { perspective, msg } = props;

  return <div className={`chat__bubble ${perspective}`}>{msg}</div>;
}
