import Topic from "../../types/topic";
import ForumMessage from "../../types/forum-message";
import ForumMessageCounters from "./counters";
import ForumMessageInfo from "./info";
import ForumMessageTitle from "./title";
import "./styles.scss";
import ForumMessageContent from "./content";
import ForumMessageAttachments from "./attachment";

type MessageProps = {
  topic: Topic;
  message: ForumMessage;
};

export default function Message(props: MessageProps) {
  const { ownerId, creationDateTime, content, likesCount, attachments } =
    props.message;

  const { name, type } = props.topic;

  return (
    <div className="message">
      <ForumMessageInfo ownerId={ownerId} creationDateTime={creationDateTime} />
      <ForumMessageTitle title={name} type={type} />
      <ForumMessageContent content={content} />
      <ForumMessageAttachments attachments={attachments} />
      <ForumMessageCounters likesCount={likesCount} />
    </div>
  );
}
