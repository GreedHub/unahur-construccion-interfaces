import { ReactElement, useContext } from "react";
import ChatContext from '../../../context/chat'
import "./styles.scss";

export default function MessageBox(): ReactElement {
  const { title } = useContext(ChatContext);


  return (
    <header>
        <h3>{title}</h3>
    </header>
  );
}
