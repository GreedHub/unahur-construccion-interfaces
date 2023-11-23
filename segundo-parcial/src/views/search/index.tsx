import { useEffect, useState } from "react";

import { AssignmentWithLink } from "../../types/assignment";
import { TopicWithLink } from "../../types/topic";

import Search from "../../components/search";

import { GetAssignments } from "../../services/assignment";

import "./styles.scss";
import { GetTopics } from "../../services/topic";
import Back from "../../components/back";

type AssignmentOrTopicWithLink = AssignmentWithLink | TopicWithLink;

export default function SearchView() {
  const [elements, setElements] = useState<AssignmentOrTopicWithLink[]>([]);

  const filterBy = (
    elements: AssignmentOrTopicWithLink[],
    filterText: string
  ): AssignmentOrTopicWithLink[] => {
    return elements.filter((t) =>
      t.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  };

  const loadElements = async () => {
    const asignments = await GetAssignments()
      .then((_assignments) => {
        const assignmentsWithLink = _assignments.map((a) => ({
          ...a,
          link: `/assignment?id=${a.id}`,
        }));
        return assignmentsWithLink;
      })
      .catch((err) => {
        throw new Error(`Error, cannot render search. Reason: ${err}`);
      });

    const topics = await GetTopics()
      .then((_topics) => {
        const topicsWithLink = _topics.map((a) => ({
          ...a,
          link: `/post?id=${a.id}`,
        }));
        return topicsWithLink;
      })
      .catch((err) => {
        throw new Error(`Error, cannot render search. Reason: ${err}`);
      });

    setElements(() => [...asignments, ...topics]);
  };

  useEffect(() => {
    loadElements();
  }, []);

  return (
    <article className="search">
      <h1 className="search__title">
        <Back />
        Buscar:
      </h1>
      <Search elements={elements} filterBy={filterBy} />
    </article>
  );
}
