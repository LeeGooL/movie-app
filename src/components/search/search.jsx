import React from "react";

import filters from "@store/filters";
import movies from "@store/movies";

import { observer } from "mobx-react-lite";

import styles from "./search.module.scss";

const Search = observer(() => {
  React.useEffect(() => {
    const timeoutId = setTimeout(() => movies.fetchMovies(), 1000);

    return () => clearTimeout(timeoutId);
  }, [filters.searchValue]);

  const onSearch = ({ target: { value } }) => {
    filters.setSearchValue(value);
  };

  return (
    <div className={styles.search}>
      <label className={styles.search__label} htmlFor="search">
        <span className={`${"material-icons"} ${styles.search__icon}`}>
          search
        </span>

        <input
          className={styles.search__input}
          type="text"
          placeholder="Search movies"
          name="search"
          value={filters.searchValue}
          onChange={onSearch}
        />
      </label>
    </div>
  );
});

export default Search;
