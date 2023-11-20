import { useMemo } from "react";
import { TopicKeys, TopicTypes } from "../../types/topic";
import "./styles.scss";

type TopicTitleProps = {
  title: string;
  type: TopicKeys;
};

export default function TopicTitle(props: TopicTitleProps) {
  const { title, type } = props;

  const parsedType = useMemo<string>(() => {
    switch (type) {
      case TopicTypes.CONTRIBUTION:
        return "APORTE";
      case TopicTypes.HELP:
        return "AYUDA";
      default:
        return "";
    }
  }, [type]);

  return (
    <h2 className="topic__title">
      {parsedType && `[${parsedType}] `}
      {title}
    </h2>
  );
}
