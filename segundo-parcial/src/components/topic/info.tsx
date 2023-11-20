import { useEffect, useMemo, useState } from "react";
import { Pineable } from "../../types/favorite";
import "./styles.scss";
import { ParsedTimeSince } from "../../helpers/date";
import User from "../../types/user";
import { GetUserInfo } from "../../services/user";
import { PushPin } from "@mui/icons-material";

type TopicInfoProps = Pineable & {
  ownerId: string;
  creationDateTime: Date | string;
};

export default function TopicInfo(props: TopicInfoProps) {
  const { ownerId, creationDateTime, isPinned } = props;

  const [user, SetUser] = useState<User>();

  const timeSinceCreation = useMemo<string>(
    () => ParsedTimeSince(creationDateTime),
    [creationDateTime]
  );

  useEffect(() => {
    GetUserInfo(ownerId)
      .then((_user: User | undefined) => {
        if (!_user) return;
        SetUser(_user);
      })
      .catch((e) => console.error(e));
  }, [ownerId]);

  return (
    <div className="topic__info">
      {user?.picture && (
        <img src={user.picture} alt="user_picture" className="topic__picture" />
      )}
      {user?.username}
      <span className="topic__time">{timeSinceCreation}</span>
      {isPinned && <PushPin className="topic__pin" />}
    </div>
  );
}
