import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import "./styles.scss";

export const BadgeTypes = {
  LIKE: "LIKE",
  COMMENT: "COMMENT",
} as const;

export type BadgeTypeKeys = keyof typeof BadgeTypes;

type BadgeProps = {
  count: number;
  type: BadgeTypeKeys;
};

export default function Badge(props: BadgeProps) {
  const { count, type } = props;

  return (
    <div className="badge">
      {type === BadgeTypes.COMMENT && <MessageIcon className="badge__icon" />}
      {type === BadgeTypes.LIKE && <ThumbUpIcon className="badge__icon" />}
      {count}
    </div>
  );
}
