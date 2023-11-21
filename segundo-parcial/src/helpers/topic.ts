import { TopicKeys, TopicTypes } from "../types/topic";

export function ParseTopicType(type: TopicKeys): string {
  switch (type) {
    case TopicTypes.CONTRIBUTION:
      return "APORTE";
    case TopicTypes.HELP:
      return "AYUDA";
    default:
      return "";
  }
}
