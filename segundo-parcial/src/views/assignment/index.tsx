import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { GetAssignmentById } from "../../services/assignment";
import { GetTopicsByAssignment } from "../../services/topic";

import Topic from "../../types/topic";
import AssignmentType from "../../types/assignment";

import Search from "../search";

import "./styles.scss";

export default function Assignment() {
  const [assignment, setAssignment] = useState<AssignmentType>();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [searchParams] = useSearchParams();

  const filterBy = (elements: Topic[], filterText: string): Topic[] => {
    console.log({ elements, filterText });
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
      .then((_topics) => setTopics(_topics))
      .catch((err) => console.error(err));
  }, [assignment]);

  return (
    <div className="assignment">
      <Search elements={topics} filterBy={filterBy} />
    </div>
  );
}
