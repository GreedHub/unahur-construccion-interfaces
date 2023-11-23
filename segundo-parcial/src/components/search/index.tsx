import { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import Topic, { TopicProps } from "../topic";

import "./styles.scss";

type SearchViewProps<T> = {
  elements: T[];
  filterBy: (elements: T[], param: string) => T[];
};

export default function Search<T extends TopicProps>(
  props: SearchViewProps<T>
) {
  const { elements, filterBy } = props;

  const [filteredElements, setFilteredElements] = useState<T[]>(elements);

  useEffect(() => {
    setFilteredElements(() => elements);
  }, [elements]);

  const onCallback = (filtered: T[]) => {
    setFilteredElements(() => filtered);
  };

  return (
    <article className="search">
      <SearchBar
        callback={onCallback}
        elements={elements}
        filterBy={filterBy}
      />
      <section className="search__results">
        {filteredElements.map((element, id) => (
          <Topic {...element} key={id} />
        ))}
      </section>
    </article>
  );
}
