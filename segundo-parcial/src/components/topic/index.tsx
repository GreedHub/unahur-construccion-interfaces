import { Pineable } from "../../types/favorite";
import TopicType from "../../types/topic";
import TopicCounters from "./counters";
import TopicFavorite from "./favorite";
import TopicInfo from "./info";
import "./styles.scss";
import TopicTitle from "./title";

export type TopicProps = Pineable &
  Partial<TopicType> & {
    name: string;
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
  } = props;

  const hasInfo = (ownerId && creationDateTime) || false;
  const hasCounters = commentsCount || likesCount;

  const customClasses = `${!hasInfo && "hide-info"} ${
    !hasCounters && "hide-counters"
  }`;

  return (
    <div className={`topic ${customClasses}`}>
      {ownerId && creationDateTime && (
        <TopicInfo
          ownerId={ownerId}
          creationDateTime={creationDateTime}
          isPinned={isPinned}
        />
      )}
      <TopicTitle title={name} type={type} />
      <TopicCounters commentsCount={commentsCount} likesCount={likesCount} />
      <TopicFavorite isFavorite={isFavorite} />
    </div>
  );
}
