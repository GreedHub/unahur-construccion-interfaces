import Badge from "../badge";
import "./styles.scss";

type TopicCountersProps = {
  commentsCount?: number;
  likesCount?: number;
};

export default function TopicCounters(props: TopicCountersProps) {
  const { commentsCount, likesCount } = props;

  return (
    <div className="topic__counters">
      {commentsCount && <Badge type="COMMENT" count={commentsCount} />}
      {likesCount && <Badge type="LIKE" count={likesCount} />}
    </div>
  );
}
