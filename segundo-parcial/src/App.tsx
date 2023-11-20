import { useEffect, useState } from "react";
import "./App.scss";
import Category from "./components/category";
import { Institute } from "./types/institute";
import { GetInstitutes } from "./services/institute";
import Career from "./types/carrer";
import { GetCareers } from "./services/carrer";
import { GetTopicsByAssignment } from "./services/topic";
import Topic from "./components/topic";
import TopicType from "./types/topic";
import MobileNav from "./components/nav-mobile";
import { GetUserInfo } from "./services/user";
import User from "./types/user";

function App() {
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [user, setUser] = useState<User>([]);

  const [topics, setTopics] = useState<TopicType[]>([]);

  useEffect(() => {
    GetInstitutes()
      .then((inst) => setInstitutes(inst))
      .catch((err) => console.error(err));

    GetCareers()
      .then((car) => setCareers(car))
      .catch((err) => console.error(err));

    GetTopicsByAssignment("mate1")
      .then((topics) => setTopics(topics))
      .catch((err) => console.error(err));

    GetUserInfo("ojqweqwoiweoqiwei")
      .then((user) => {
        if (!user) return;
        setUser(user);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      {topics.map((topic, id) => (
        <Topic topic={topic} key={id} />
      ))}

      {institutes.map((category, id) => (
        <Category
          img={`/icons/institutes/${category.id}.svg`}
          color={category.id}
          title={category.name}
          key={id}
        />
      ))}
      {careers.map((category, id) => (
        <Category
          img={`/icons/careers/${category.id}.svg`}
          color={category.institute}
          title={category.name}
          key={id}
        />
      ))}
      <MobileNav user={user} />
    </div>
  );
}

export default App;
