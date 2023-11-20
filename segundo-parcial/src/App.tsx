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

function App() {
  const [institutes, SetInstitutes] = useState<Institute[]>([]);
  const [careers, SetCareers] = useState<Career[]>([]);

  const [topics, SetTopics] = useState<TopicType[]>([]);

  useEffect(() => {
    GetInstitutes()
      .then((inst) => SetInstitutes(inst))
      .catch((err) => console.error(err));

    GetCareers()
      .then((car) => SetCareers(car))
      .catch((err) => console.error(err));

    GetTopicsByAssignment("mate1")
      .then((topics) => SetTopics(topics))
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
    </div>
  );
}

export default App;
