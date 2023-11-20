import TopicType from "../../types/topic";
import TopicCounters from "./counters";
import TopicFavorite from "./favorite";
import TopicInfo from "./info";
import "./styles.scss";
import TopicTitle from "./title";

type TopicProps = {
  topic: TopicType;
};

export default function Topic(props: TopicProps) {
  const {
    type,
    name,
    ownerId,
    commentsCount,
    likesCount,
    creationDateTime,
    isPinned,
    isFavorite,
  } = props.topic;

  return (
    <div className="topic">
      <TopicInfo
        ownerId={ownerId}
        creationDateTime={creationDateTime}
        isPinned={isPinned}
      />
      <TopicTitle title={name} type={type} />
      <TopicCounters commentsCount={commentsCount} likesCount={likesCount} />
      <TopicFavorite isFavorite={isFavorite} />
    </div>
  );
}
