import { useMemo } from "react";
import { TopicKeys } from "../../types/topic";
import "./styles.scss";
import { ParseTopicType } from "../../helpers/topic";

type TopicTitleProps = {
  title: string;
  type?: TopicKeys;
};

export default function TopicTitle(props: TopicTitleProps) {
  const { title, type } = props;

  const parsedType = type
    ? useMemo<string>(() => ParseTopicType(type), [type])
    : ``;

  return (
    <h2 className="topic__title">
      {parsedType && `[${parsedType}] `}
      {title}
    </h2>
  );
}
