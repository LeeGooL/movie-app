import React from "react";

import { observer } from "mobx-react-lite";

import { MovieItemLoader, MovieItem } from "@components/";

import movies from "@store/movies";

import styles from "./movies.module.scss";

const Movies = observer(() => {
  return (
    <div className={styles.movies}>
      <ul className={styles.movies__items}>
        {!movies.isLoaded ? <MovieItemLoader /> : <MovieItem />}
      </ul>
    </div>
  );
});

export default Movies;
