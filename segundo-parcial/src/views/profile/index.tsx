import { useContext, useMemo } from "react";
import { DateToCalendarFormat } from "../../helpers/date";
import ProfileData from "./profile-data";
import UserContext from "../../context/user";

import "./styles.scss";
import { AccountCircle } from "@mui/icons-material";
import Back from "../../components/back";

export default function Profile() {
  const user = useContext(UserContext).user;

  if (!user) {
    window.location.assign("/error");
    return <></>;
  }

  const { name, lastName, picture, email, phoneNumber, creationDate } = user;

  const parsedCreationDate = useMemo(
    () => DateToCalendarFormat(creationDate),
    [creationDate]
  );

  return (
    <article className="profile">
      <Back />

      <section className="profile__identification">
        {picture && <img src={picture} alt="user_picture" />}
        {!picture && <AccountCircle />}

        <h2>
          {name} {lastName}
        </h2>
      </section>

      <section className="profile__info">
        <ProfileData title="Correo" data={email} />
        {phoneNumber && <ProfileData title="Teléfono" data={phoneNumber} />}
        <ProfileData title="Fecha de ingreso" data={parsedCreationDate} />
      </section>
    </article>
  );
}
