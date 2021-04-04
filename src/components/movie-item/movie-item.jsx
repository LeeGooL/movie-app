import React from "react";
import intlFormat from "date-fns/intlFormat";

import { observer } from "mobx-react-lite";

import movies from "@store/movies";

import styles from "./movie-item.module.scss";

const MovieItem = observer(() => {
  return (
    <>
      {movies.movies.map(
        ({ id, poster_path, original_title, release_date, vote_average }) => {
          return (
            <li className={styles.movies__item} key={id}>
              {poster_path !== null ? (
                <img
                  className={styles.movies__itemPoster}
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt=""
                />
              ) : (
                <div className={styles.movies__itemNoPoster}>no poster</div>
              )}

              <div className={styles.movies__itemWrapper}>
                <div className={styles.movies__itemName}>{original_title}</div>
                <div className={styles.movies__itemYear}>
                  {release_date &&
                    intlFormat(
                      new Date(release_date),
                      { year: "numeric" },
                      { locale: "en-US" }
                    )}
                </div>
              </div>
            </li>
          );
        }
      )}
    </>
  );
});

export default MovieItem;
