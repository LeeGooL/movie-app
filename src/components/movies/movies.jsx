import React from "react";

import { observer } from "mobx-react-lite";

import { MovieItem, ErrorNotification } from "@components/";

import styles from "./movies.module.scss";

const Movies = observer(({ moviesList }) => {
  return (
    <div className={styles.movies}>
      {!moviesList.length ? (
        <div className={styles.movies__error}>
          <ErrorNotification />
        </div>
      ) : (
        <ul className={styles.movies__items}>
          <MovieItem moviesList={moviesList} />
        </ul>
      )}
    </div>
  );
});

export default Movies;
