import Favoriteable, { Pineable } from "./favorite";

export const TopicTypes = {
  HELP: "HELP",
  CONTRIBUTION: "CONTRIBUTION",
} as const;

export type TopicKeys = keyof typeof TopicTypes;

type Topic = Favoriteable &
  Pineable & {
    id: string;
    type: TopicKeys;
    name: string;
    careers: string[];
    ownerId: string;
    commentsCount: number;
    likesCount: number;
    creationDateTime: Date;
  };

export default Topic;
