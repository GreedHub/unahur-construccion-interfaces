import { FormEvent, useEffect, useState } from "react";
import Category from "../../components/category";

import "./styles.scss";
import { Institute } from "../../types/institute";
import Career from "../../types/career";
import { GetCareers } from "../../services/carrer";
import { GetInstitutes } from "../../services/institute";

const Filters = {
  INSTITUTE: "Instituto",
  CAREER: "Carrera",
} as const;

type FilterKeys = keyof typeof Filters;

export default function Home() {
  const [categories, setCategories] = useState<Institute[] | Career[]>([]);
  const [filter, setFilter] = useState<FilterKeys>("INSTITUTE");

  const onFilterChange = (e: FormEvent<HTMLSelectElement>) => {
    const val = e.currentTarget.value;

    if (!val) return;
    setFilter(() => val as FilterKeys);
  };

  useEffect(() => {
    switch (filter) {
      case "CAREER":
        GetCareers()
          .then((car) => setCategories(car))
          .catch((err) => console.error(err));
        return;

      case "INSTITUTE":
      default:
        GetInstitutes()
          .then((inst) => setCategories(() => inst))
          .catch((err) => console.error(err));
        return;
    }
  }, [filter]);

  return (
    <article className="home">
      <section className="home__featured">
        <h3>Destacado</h3>
        <a
          href="https://unahur.edu.ar/inteligencia-artificial-dialogos-inter-tiempos/"
          target="_blank"
        >
          <img src="/banners/banner.png" alt="banner" />
        </a>
      </section>

      <section className="home__categories">
        <form className="home__filters">
          <h3>Foros</h3>
          <label htmlFor="filter">Vista: </label>
          <select name="filter" id="filter" onChange={onFilterChange}>
            {Object.keys(Filters).map((filter, id) => (
              <option value={filter} key={id}>
                {Filters[filter as FilterKeys]}
              </option>
            ))}
          </select>
        </form>
        <div className="home__categories">
          {categories.map((category, id) => {
            if ((category as any)["institute"]) {
              const cat = category as Career;
              return (
                <Category
                  img={`/icons/careers/${cat.id}.svg`}
                  title={cat.name}
                  color={cat.institute}
                  link={`/career?id=${cat.id}`}
                  key={id}
                />
              );
            }
            const cat = category as Institute;

            return (
              <Category
                img={`/icons/institutes/${category.id}.svg`}
                title={cat.name}
                color={cat.id}
                link={`/institute?id=${cat.id}`}
                key={id}
              />
            );
          })}
        </div>
      </section>
    </article>
  );
}
