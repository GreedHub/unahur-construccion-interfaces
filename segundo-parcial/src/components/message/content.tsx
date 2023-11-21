import { useEffect, useRef } from "react";
import "./styles.scss";

type ForumMessageContentProps = {
  content: string;
};

export default function ForumMessageContent(props: ForumMessageContentProps) {
  const { content } = props;

  const contentRef = useRef<HTMLDivElement>(null);

  const setMaxWidth = () => {
    const content = contentRef.current;
    if (!content) return;

    const parent = content.parentElement as HTMLDivElement;
    if (!parent) return;

    const parentWidth = parent.clientWidth;

    content.style.maxWidth = `${parentWidth - 40}px`;
  };

  useEffect(() => {
    window.addEventListener("resize", setMaxWidth);
    setMaxWidth();
  });

  return (
    <div
      className="forum-message__content"
      ref={contentRef}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
