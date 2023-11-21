import Badge from "../badge";
import "./styles.scss";

type ForumMessageCountersProps = {
  likesCount: number;
};

export default function ForumMessageCounters(props: ForumMessageCountersProps) {
  const { likesCount } = props;

  return (
    <div className="forum-message__counters">
      <Badge type="LIKE" count={likesCount} />
    </div>
  );
}
