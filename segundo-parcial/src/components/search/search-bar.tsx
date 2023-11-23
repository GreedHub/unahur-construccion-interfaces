import { Search } from "@mui/icons-material";
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
      <div className="search__input">
        <input type="text" name="filter" placeholder="Buscar" />
        <button type="submit">
          <Search />
        </button>
      </div>
    </form>
  );
}
