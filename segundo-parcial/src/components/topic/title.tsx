import { useMemo } from "react";
import { Link } from "react-router-dom";

import { TopicKeys } from "../../types/topic";
import "./styles.scss";
import { ParseTopicType } from "../../helpers/topic";

type TopicTitleProps = {
  title: string;
  link: string;
  type?: TopicKeys;
};

export default function TopicTitle(props: TopicTitleProps) {
  const { title, type, link } = props;

  const parsedType = type
    ? useMemo<string>(() => ParseTopicType(type), [type])
    : ``;

  return (
    <h2 className="topic__title">
      <Link to={link}>
        {parsedType && `[${parsedType}] `}
        {title}
      </Link>
    </h2>
  );
}
