import { FormEvent } from "react";

type SearchBarProps<T> = {
  elements: T[];
  filterBy: (elements: T[], param: string) => T[];
  callback: (results: T[]) => void;
};

export default function SearchBar<T>(props: SearchBarProps<T>) {
  const { elements, filterBy, callback } = props;

  const onFilterChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filter = e.currentTarget.filter.value;

    const filtered = filterBy(elements, filter);

    callback(filtered);
  };

  return (
    <form onSubmit={onFilterChange} className="search__bar">
      <input type="text" name="filter" />
    </form>
  );
}
