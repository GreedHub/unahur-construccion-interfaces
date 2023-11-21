import { ForumAttachment } from "../../types/forum-message";
import FilePresentIcon from "@mui/icons-material/FilePresent";

import "./styles.scss";

type ForumMessageAttachmentsProps = {
  attachments: ForumAttachment[];
};

type ForumMessageAttachmentProps = {
  attachment: ForumAttachment;
};

export default function ForumMessageAttachments(
  props: ForumMessageAttachmentsProps
) {
  const { attachments } = props;

  return (
    <div className="forum-message__attachments">
      {attachments.map((attachment, id) => (
        <ForumMessageAttachment attachment={attachment} key={id} />
      ))}
    </div>
  );
}

function ForumMessageAttachment(props: ForumMessageAttachmentProps) {
  const { title, id } = props.attachment;

  return (
    <div className="forum-message__attachment">
      <FilePresentIcon />
      <a href={`files/attachments/${id}`} download={true}>
        {title}
      </a>
    </div>
  );
}
