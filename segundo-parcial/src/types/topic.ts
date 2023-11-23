import Favoriteable, { Linkeable, Pineable } from "./favorite";

export const TopicTypes = {
  HELP: "HELP",
  CONTRIBUTION: "CONTRIBUTION",
} as const;

export type TopicKeys = keyof typeof TopicTypes;

type Topic = Favoriteable &
  Pineable & {
    id: string;
    assignmentId: string;
    type: TopicKeys;
    name: string;
    ownerId: string;
    commentsCount: number;
    likesCount: number;
    creationDateTime: Date | string;
  };

export type TopicWithLink = Topic & Linkeable;

export default Topic;
