import { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import Topic from "../../components/topic";
import TopicType from "../../types/topic";

type SearchViewProps<T> = {
  elements: T[];
  filterBy: (elements: T[], param: string) => T[];
};

export default function SearchView(props: SearchViewProps<TopicType>) {
  const { elements, filterBy } = props;

  const [filteredElements, setFilteredElements] =
    useState<TopicType[]>(elements);

  useEffect(() => {
    setFilteredElements(() => elements);
  }, [elements]);

  const onCallback = (filtered: TopicType[]) => {
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
          <Topic topic={element} key={id} />
        ))}
      </section>
    </article>
  );
}
