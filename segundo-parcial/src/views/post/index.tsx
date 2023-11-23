import Topic from "../../types/topic";
import ForumMessageType from "../../types/forum-message";
import "./styles.scss";
import { GetMessagesByTopicId } from "../../services/topic-messages";
import { useEffect, useState } from "react";
import ForumMessage from "../../components/message";
import { GetTopicById } from "../../services/topic";
import { useSearchParams } from "react-router-dom";
import Back from "../../components/back";

export default function ForumPost() {
  const [topic, setTopic] = useState<Topic>();
  const [messages, setMessages] = useState<ForumMessageType[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const topicId = searchParams.get("id");

    if (!topicId)
      throw new Error("Error, cannot render post. Reason: No topic id");

    GetTopicById(topicId)
      .then((topic) => setTopic(topic))
      .catch((err) => {
        throw new Error(`Error, cannot render post. Reason: ${err}`);
      });
  }, []);

  useEffect(() => {
    if (!topic) return;
    GetMessagesByTopicId(topic.id)
      .then((messages) => setMessages(messages))
      .catch((err) => console.error(err));
  }, [topic]);

  return (
    <article className="forum-post">
      <Back />
      {messages.map((message, id) => (
        <ForumMessage
          topic={id === 0 ? topic : undefined}
          message={message}
          key={id}
        />
      ))}
    </article>
  );
}
