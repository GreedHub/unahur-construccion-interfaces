import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CareerType from "../../types/career";
import Assignment from "../../types/assignment";

import Search from "../../components/search";

import { GetCareerById } from "../../services/carrer";
import { GetAssignmentsByCareerId } from "../../services/assignment";

import "./styles.scss";

export default function CareerView() {
  const [career, setCareer] = useState<CareerType>();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [searchParams] = useSearchParams();

  const filterBy = (
    elements: Assignment[],
    filterText: string
  ): Assignment[] => {
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
      .then((_assignments) => setAssignments(_assignments))
      .catch((err) => console.error(err));
  }, [career]);

  return (
    <div className="assignment">
      <h1>{career?.name}</h1>
      <Search elements={assignments} filterBy={filterBy} />
    </div>
  );
}
