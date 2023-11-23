type ProfileData = {
  title: string;
  data: string;
};

export default function ProfileData(props: ProfileData) {
  const { title, data } = props;

  return (
    <div className="profile__data">
      <h4>{title}:</h4>
      <p>{data}</p>
    </div>
  );
}
