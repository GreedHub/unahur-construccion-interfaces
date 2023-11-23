import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CareerType from "../../types/career";
import Assignment, { AssignmentWithLink } from "../../types/assignment";

import Search from "../../components/search";

import { GetCareerById } from "../../services/carrer";
import { GetAssignmentsByCareerId } from "../../services/assignment";

import "./styles.scss";

export default function CareerView() {
  const [career, setCareer] = useState<CareerType>();
  const [assignments, setAssignments] = useState<AssignmentWithLink[]>([]);
  const [searchParams] = useSearchParams();

  const filterBy = (
    elements: AssignmentWithLink[],
    filterText: string
  ): AssignmentWithLink[] => {
    console.log({ elements, filterText });
    return elements.filter((t) =>
      t.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    const careerId = searchParams.get("id");

    if (!careerId)
      throw new Error("Error, cannot render post. Reason: No career id");

    GetCareerById(careerId)
      .then((_career) => setCareer(_career))
      .catch((err) => {
        throw new Error(`Error, cannot render post. Reason: ${err}`);
      });
  }, []);

  useEffect(() => {
    if (!career) return;
    GetAssignmentsByCareerId(career.id)
      .then((_assignments) => {
        const assignmentsWithLink = _assignments.map((a) => ({
          ...a,
          link: `/assignment?id=${a.id}`,
        }));
        setAssignments(() => assignmentsWithLink);
      })
      .catch((err) => console.error(err));
  }, [career]);

  return (
    <article className="career">
      <h1 className="career__title">{career?.name}</h1>
      <Search elements={assignments} filterBy={filterBy} />
    </article>
  );
}
