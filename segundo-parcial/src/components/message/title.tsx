import { useMemo } from "react";
import { TopicKeys } from "../../types/topic";
import "./styles.scss";
import { ParseTopicType } from "../../helpers/topic";

type ForumMessageTitleProps = {
  title: string;
  type: TopicKeys;
};

export default function ForumMessageTitle(props: ForumMessageTitleProps) {
  const { title, type } = props;

  const parsedType = useMemo<string>(() => ParseTopicType(type), [type]);

  return (
    <h2 className="forum-message__title">
      {parsedType && `[${parsedType}] `}
      {title}
    </h2>
  );
}
