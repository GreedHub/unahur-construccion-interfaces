import Topic, { TopicTypes } from "../types/topic";

const TIMEOUT = 100;

const TOPICS: Topic[] = [
  {
    id: "id-topic-mate1-1",
    assignmentId: "mate1",
    type: TopicTypes.CONTRIBUTION,
    name: "Parciales resueltos Mate I",
    ownerId: "ojqweqwoiweoqiwei",
    commentsCount: 20,
    likesCount: 15,
    creationDateTime: "2023-11-21T14:43:05.861Z",
    isFavorite: true,
    isPinned: true,
  },
  {
    id: "id-topic-mate1-2",
    assignmentId: "mate1",
    type: TopicTypes.HELP,
    name: "Ejercicio de grupos 24",
    ownerId: "ojqweqwoiweoqiwei",
    commentsCount: 20,
    likesCount: 15,
    creationDateTime: "2023-11-20T14:43:05.861Z",
    isFavorite: false,
    isPinned: false,
  },
];

export async function GetTopicsByAssignment(
  assignmentId: string
): Promise<Topic[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(TOPICS.filter((topic) => topic.assignmentId === assignmentId));
    }, TIMEOUT);
  });
}

export async function GetTopicById(
  topicId: string
): Promise<Topic | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const topic = TOPICS.find((topic) => topic.id === topicId);
      if (!topic) reject(`Topic with id ${topicId} not found`);

      resolve(topic);
    }, TIMEOUT);
  });
}
