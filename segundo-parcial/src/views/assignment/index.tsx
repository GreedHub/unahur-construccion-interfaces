import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { GetAssignmentById } from "../../services/assignment";
import { GetTopicsByAssignment } from "../../services/topic";

import { TopicWithLink } from "../../types/topic";
import AssignmentType from "../../types/assignment";

import Search from "../../components/search";

import "./styles.scss";
import Back from "../../components/back";

export default function Assignment() {
  const [assignment, setAssignment] = useState<AssignmentType>();
  const [topics, setTopics] = useState<TopicWithLink[]>([]);
  const [searchParams] = useSearchParams();

  const filterBy = (
    elements: TopicWithLink[],
    filterText: string
  ): TopicWithLink[] => {
    return elements.filter((t) =>
      t.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    const assignmentId = searchParams.get("id");

    if (!assignmentId)
      throw new Error("Error, cannot render post. Reason: No assignment id");

    GetAssignmentById(assignmentId)
      .then((_assignment) => setAssignment(_assignment))
      .catch((err) => {
        throw new Error(`Error, cannot render post. Reason: ${err}`);
      });
  }, []);

  useEffect(() => {
    if (!assignment) return;
    GetTopicsByAssignment(assignment.id)
      .then((_topics) => {
        const topicsWithLink = _topics.map((t) => ({
          ...t,
          link: `/post?id=${t.id}`,
        }));
        setTopics(() => topicsWithLink);
      })
      .catch((err) => console.error(err));
  }, [assignment]);

  return (
    <article className="assignment">
      <h1 className="assignment__title">
        <Back />
        {assignment?.name}
      </h1>
      <Search elements={topics} filterBy={filterBy} />
    </article>
  );
}
