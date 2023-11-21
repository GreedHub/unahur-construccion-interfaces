type ForumMessage = {
  id: string;
  topicId: string;
  ownerId: string;
  creationDateTime: Date | string;
  content: string;
  likesCount: number;
  attachments?: ForumAttachment[];
};

export type ForumAttachment = {
  id: string;
  title: string;
};

export default ForumMessage;
