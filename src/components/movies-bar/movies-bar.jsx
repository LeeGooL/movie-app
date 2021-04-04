import React, { useEffect } from "react";
import classNames from "classnames";

import { observer } from "mobx-react-lite";

import movies from "@store/movies";
import filters from "@store/filters";

import { createPages } from "@utils/pages-creator";

import styles from "./movies-bar.module.scss";

const MoviesBar = observer(() => {
  const pages = [];

  createPages(pages, movies.pagesCount, filters.currentPage);

  useEffect(() => {
    movies.fetchMovies();
  }, [filters.currentPage, filters.sortingType]);

  const setCurrentPage = (page) => {
    filters.setCurrentPage(page);
  };

  const changeCurrentPage = (action) => {
    filters.changeCurrentPage(action);
  };

  const changeSortingType = ({ target: { value } }) => {
    filters.setSortingType(value);
    localStorage.setItem("sortingType", value);
  };

  const removeTag = (tag) => {
    const index = filters.tags.indexOf(tag);
    const removeTag = [
      ...filters.tags.slice(0, index),
      ...filters.tags.slice(index + 1),
    ];

    filters.setTags(removeTag);

    if (tag === "release year") {
      filters.setReleaseYears({ min: 1980, max: 2021 });
    } else if (tag === "genres") {
      filters.setSelectedGenres([]);
    } else if (tag === "rating") {
      filters.setRating(-1);
    }

    movies.fetchMovies();
  };

  return (
    <div className={styles.moviesBar}>
      <div className={`${styles.moviesBar__row} ${styles.first}`}>
        <div className={styles.moviesBar__count}>
          {movies.moviesCount === 10000
            ? `${movies.moviesCount}+`
            : movies.moviesCount}{" "}
          movies
        </div>

        <div className={styles.moviesBar__tags}>
          {filters.tags.map((tag, index) => {
            return (
              <div className={styles.moviesBar__tag} key={index}>
                {tag}
                <svg
                  className={styles.moviesBar__tagIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width="18px"
                  height="18px"
                  onClick={() => removeTag(tag)}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles.moviesBar__row} ${styles.second}`}>
        <div className={styles.moviesBar__pagination}>
          <button
            className={`${styles.pagination__button} ${styles.back}`}
            onClick={() => changeCurrentPage("reduce")}
            disabled={
              (filters.currentPage === 1 ? true : false) ||
              (!movies.isLoaded ? true : false)
            }
          >
            back
          </button>

          <ul className={styles.pagination__list}>
            {pages &&
              pages.map((page, index) => {
                return (
                  <li
                    className={classNames(styles.pagination__listPage, {
                      [`${styles.active}`]: filters.currentPage === page,
                    })}
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    disabled={!movies.isLoaded ? true : false}
                  >
                    {page}
                  </li>
                );
              })}
          </ul>

          <button
            className={`${styles.pagination__button} ${styles.next}`}
            onClick={() => changeCurrentPage("increase")}
            disabled={
              (filters.currentPage === movies.pagesCount ? true : false) ||
              (!movies.isLoaded ? true : false)
            }
          >
            next
          </button>

          <div className={styles.pagination__pagesCount}>
            TotalPages: {movies.pagesCount}
          </div>
        </div>

        <div className={styles.moviesBar__sorting}>
          <div className={styles.moviesBar__sortingTitle}>sort by:</div>

          <select
            name=""
            id=""
            placeholder="sorting by"
            className={styles.moviesBar__sortingSelect}
            onChange={changeSortingType}
            value={localStorage.getItem("sortingType") || filters.sortingType}
            disabled={filters.searchValue !== ""}
          >
            <option value="popularity.desc">popularity (descending)</option>

            <option value="popularity.asc">popularity (ascending)</option>

            <option value="original_title.asc">name (ascending)</option>

            <option value="original_title.desc">name (descending)</option>

            <option value="vote_average.asc">vote average (ascending)</option>

            <option value="vote_average.desc">vote average (descending)</option>
          </select>
        </div>
      </div>
    </div>
  );
});

export default MoviesBar;
