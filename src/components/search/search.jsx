import React from "react";

import styles from "./search.module.scss";

const Search = () => {
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
        />
      </label>
    </div>
  );
};

export default Search;
