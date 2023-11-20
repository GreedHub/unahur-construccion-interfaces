type ForumMessage = {
  id: string;
  ownerId: string;
  creationDateTime: Date;
  content: string;
  likesCount: number;
  attachments: ForumAttachment;
};

export type ForumAttachment = {
  id: string;
  title: string;
};

export default ForumMessage;
