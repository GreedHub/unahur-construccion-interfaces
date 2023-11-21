import Topic from "../../types/topic";
import ForumMessageType from "../../types/forum-message";
import ForumMessageCounters from "./counters";
import ForumMessageInfo from "./info";
import ForumMessageTitle from "./title";
import ForumMessageContent from "./content";
import ForumMessageAttachments from "./attachment";
import "./styles.scss";

type ForumMessageProps = {
  topic?: Topic;
  message: ForumMessageType;
};

export default function ForumMessage(props: ForumMessageProps) {
  const { ownerId, creationDateTime, content, likesCount, attachments } =
    props.message;

  const { topic } = props;

  return (
    <div className="forum-message">
      <ForumMessageInfo ownerId={ownerId} creationDateTime={creationDateTime} />
      {topic && <ForumMessageTitle title={topic.name} type={topic.type} />}
      <ForumMessageContent content={content} />
      {attachments && <ForumMessageAttachments attachments={attachments} />}
      <ForumMessageCounters likesCount={likesCount} />
    </div>
  );
}
