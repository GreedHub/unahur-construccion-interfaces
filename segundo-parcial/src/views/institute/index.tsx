import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { CareerWithLink } from "../../types/career";
import { Institute as InstituteType } from "../../types/institute";

import { GetInstituteById } from "../../services/institute";
import { GetCareersByInstituteId } from "../../services/carrer";

import Category from "../../components/category";

import "./styles.scss";
import Back from "../../components/back";

export default function InstituteView() {
  const [institute, setInstitute] = useState<InstituteType>();
  const [careers, setCareer] = useState<CareerWithLink[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const instituteId = searchParams.get("id");

    if (!instituteId)
      throw new Error(
        "Error, cannot render institute. Reason: No institute id"
      );

    GetInstituteById(instituteId)
      .then((_career) => setInstitute(_career))
      .catch((err) => {
        throw new Error(`Error, cannot render institute. Reason: ${err}`);
      });
  }, []);

  useEffect(() => {
    if (!institute) return;
    GetCareersByInstituteId(institute.id)
      .then((_careers) => {
        const assignmentsWithLink = _careers.map((a) => ({
          ...a,
          link: `/assignment?id=${a.id}`,
        }));
        setCareer(() => assignmentsWithLink);
      })
      .catch((err) => console.error(err));
  }, [institute]);

  return (
    <article className="institute">
      <h1 className="institute__title">
        <Back />
        {institute?.name}
      </h1>
      <section className="institute__careers">
        {careers.map((c, id) => (
          <Category
            img={`/icons/careers/${c.id}.svg`}
            title={c.name}
            color={c.institute}
            link={`/career?id=${c.id}`}
            key={id}
          />
        ))}
      </section>
    </article>
  );
}
