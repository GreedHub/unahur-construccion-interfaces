import "./styles.scss";

type ForumMessageContentProps = {
  content: string;
};

export default function ForumMessageContent(props: ForumMessageContentProps) {
  const { content } = props;

  return (
    <div
      className="forum-message__title"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
