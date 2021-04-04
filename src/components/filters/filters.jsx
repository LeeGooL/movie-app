import React, { useEffect } from "react";
import classNames from "classnames";
import InputRange from "react-input-range";

import { observer } from "mobx-react-lite";

import movies from "@store/movies";
import filters from "@store/filters";

import "react-input-range/lib/css/index.css";
import styles from "./filters.module.scss";

const DEFAULT_CLASS_NAMES = {
  activeTrack: `input-range__track ${styles.inputRange__track}`,
  disabledInputRange: "input-range input-range--disabled",
  inputRange: "input-range",
  labelContainer: `${styles.inputRange__labelContainer}`,
  maxLabel: `input-range__label ${styles.inputRange__labelMax}`,
  minLabel: `input-range__label ${styles.inputRange__labelMin}`,
  slider: `${styles.inputRange__slider}`,
  sliderContainer: `input-range__slider-container`,
  track: `input-range__track input-range__track--background`,
  valueLabel: "input-range__label input-range__label--value",
};

const Filters = observer(() => {
  const years = [1980, 2021];

  useEffect(() => {
    filters.getGenresList();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => movies.fetchMovies(), 1000);

    return () => clearTimeout(timeoutId);
  }, [filters.selectedGenresList, filters.rating, filters.releaseYears]);

  const onChangeRating = (rat) => {
    rat = rat === -0 ? (rat = 0) : rat;
    filters.setRating(rat);

    if (filters.rating !== -1) {
      if (!filters.tags.includes("rating")) {
        filters.setTags([...filters.tags, "rating"]);
      }
    } else if (filters.rating === -1) {
      const index = filters.tags.indexOf("rating");
      const removeTag = [
        ...filters.tags.slice(0, index),
        ...filters.tags.slice(index + 1),
      ];

      filters.setTags(removeTag);
    }
  };

  const onChangeReleaseYear = (releaseYear) => {
    filters.setReleaseYears(releaseYear);

    if (
      filters.releaseYears.min === 1980 &&
      filters.releaseYears.max === 2021
    ) {
      const index = filters.tags.indexOf("release year");
      const removeTag = [
        ...filters.tags.slice(0, index),
        ...filters.tags.slice(index + 1),
      ];

      filters.setTags(removeTag);
    } else {
      if (!filters.tags.includes("release year")) {
        const addTag = filters.tags.slice();

        addTag.push("release year");

        filters.setTags(addTag);
      }
    }
  };

  const onSelectGenre = (id) => {
    if (filters.selectedGenresList.includes(id)) {
      const index = filters.selectedGenresList.indexOf(id);
      const newGenres = [
        ...filters.selectedGenresList.slice(0, index),
        ...filters.selectedGenresList.slice(index + 1),
      ];

      filters.setSelectedGenres(newGenres);
    } else {
      const newGenres = filters.selectedGenresList.slice();
      newGenres.push(id);

      filters.setSelectedGenres(newGenres);
    }

    if (filters.selectedGenresList.length) {
      if (!filters.tags.includes("genres")) {
        filters.setTags([...filters.tags, "genres"]);
      }
    } else if (!filters.selectedGenresList.length) {
      const index = filters.tags.indexOf("genres");
      const removeTag = [
        ...filters.tags.slice(0, index),
        ...filters.tags.slice(index + 1),
      ];

      filters.setTags(removeTag);
    }
  };

  return (
    <div className={styles.filters}>
      <h2 className={styles.filters__title}>Movies</h2>

      <h4 className={`${styles.filters__listTitle} ${styles.title}`}>genres</h4>

      <div className={styles.filters__listGenres}>
        <ul className={styles.filters__listGenresName}>
          {filters.genresList.map(({ id, name }) => {
            return (
              <li
                className={classNames(styles.filters__listItem, {
                  [`${styles.selected}`]: filters.selectedGenresList.includes(
                    id
                  ),
                })}
                onClick={() => onSelectGenre(id)}
                key={id}
              >
                {name}
                {filters.selectedGenresList.includes(id) ? (
                  <svg
                    className={styles.filters__listItemIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="18px"
                    height="18px"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                ) : (
                  <svg
                    className={styles.filters__listItemIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="18px"
                    height="18px"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <h4 className={`${styles.filters__ratingTitle} ${styles.title}`}>
        vote average
      </h4>

      <div className={styles.filters__rating}>
        <div className={styles.filters__releaseYearCount}>
          {filters.rating === -1 ? "none" : filters.rating}
        </div>

        <InputRange
          classNames={DEFAULT_CLASS_NAMES}
          maxValue={10}
          minValue={-1}
          value={filters.rating}
          onChange={onChangeRating}
        />
      </div>

      <h4 className={`${styles.filters__releaseYearTitle} ${styles.title}`}>
        release year
      </h4>

      <div className={styles.filters__releaseYear}>
        <InputRange
          classNames={DEFAULT_CLASS_NAMES}
          maxValue={years[1]}
          minValue={years[0]}
          value={filters.releaseYears}
          onChange={onChangeReleaseYear}
        />
      </div>
    </div>
  );
});

export default Filters;
