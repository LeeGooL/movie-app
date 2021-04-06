import React from "react";

import { observer } from "mobx-react-lite";

import { MovieItemLoader, MovieItem } from "@components/";

import movies from "@store/movies";

import styles from "./movies.module.scss";

const Movies = observer(() => {
  return (
    <div className={styles.movies}>
      {!movies.isLoaded ? (
        <ul className={styles.movies__items}>
          <MovieItemLoader />
        </ul>
      ) : (
        <ul className={styles.movies__items}>
          <MovieItem />
        </ul>
      )}

      {!movies.movies.length ? (
        <div className={styles.movies__notice}>
          <h2 className={styles.movies__noticeText}>
            no movies found for your request
          </h2>
        </div>
      ) : null}
    </div>
  );
});

export default Movies;
