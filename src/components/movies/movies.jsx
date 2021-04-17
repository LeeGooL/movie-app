import React from "react";

import { observer } from "mobx-react-lite";

import { MovieItem, ErrorNotification } from "@components/";

import styles from "./movies.module.scss";

const Movies = observer(({ moviesList, history }) => {
  let label;
  console.log(history);

  switch (history.location.pathname) {
    case "/watch-later-list":
      label = "No movies on your watch later list";
      break;

    case "/favorite-list":
      label = "No movies on your favorite list";
      break;

    case "/":
      label = "No movies found for your request";
      break;

    default:
      label =
        "Unknown error. Please try refreshing the page or come back later.";
      break;
  }

  return (
    <div className={styles.movies}>
      {!moviesList.length ? (
        <div className={styles.movies__error}>
          <ErrorNotification label={label} />
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
