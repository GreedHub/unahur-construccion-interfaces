import { useEffect, useMemo, useState } from "react";
import "./styles.scss";
import { ParsedTimeSince } from "../../helpers/date";
import User from "../../types/user";
import { GetUserInfoById } from "../../services/user";

type ForumMessageInfoProps = {
  ownerId: string;
  creationDateTime: Date | string;
};

export default function ForumMessageInfo(props: ForumMessageInfoProps) {
  const { ownerId, creationDateTime } = props;

  const [user, SetUser] = useState<User>();

  const timeSinceCreation = useMemo<string>(
    () => ParsedTimeSince(creationDateTime),
    [creationDateTime]
  );

  useEffect(() => {
    GetUserInfoById(ownerId)
      .then((_user: User | undefined) => {
        if (!_user) return;
        SetUser(_user);
      })
      .catch((e) => console.error(e));
  }, [ownerId]);

  return (
    <div className="forum-message__info">
      {user?.picture && (
        <img
          src={user.picture}
          alt="user_picture"
          className="forum-message__picture"
        />
      )}
      {user?.username}
      <span className="forum-message__time">{timeSinceCreation}</span>
    </div>
  );
}
