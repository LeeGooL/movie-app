import React, { useState } from "react";
import intlFormat from "date-fns/intlFormat";

import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import movies from "@store/movies";
import authorization from "@store/authorization";
import profile from "@store/profile";

import styles from "./movie-item.module.scss";

const MovieItem = observer(() => {
  const [favoriteList, setFavoriteList] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);

  React.useEffect(() => {
    profile.fetchFavoriteList();
  }, []);

  const onClickIcon = (id, status, type) => {
    profile.changeStatusMovie(id, status, type);

    if (type === "favorite") {
      if (status === true) {
        const newFavoriteList = [...favoriteList, id];

        return setFavoriteList(newFavoriteList);
      }

      const index = favoriteList.indexOf(id);

      const newFavoriteList = [
        ...favoriteList.slice(0, index),
        ...favoriteList.slice(index + 1),
      ];

      return setFavoriteList(newFavoriteList);
    } else {
      if (status === true) {
        const newWatchLaterList = [...watchLaterList, id];

        return setWatchLaterList(newWatchLaterList);
      }

      const index = watchLaterList.indexOf(id);

      const newWatchLaterList = [
        ...watchLaterList.slice(0, index),
        ...watchLaterList.slice(index + 1),
      ];

      return setWatchLaterList(newWatchLaterList);
    }
  };

  const handleVisibleMovieDetailInfo = (movie) => {
    movies.setSelectedMovieDetailInfo(movie);
    movies.setIsDetailInfoVisible(true);
  };

  return (
    <>
      {movies.movies.map((movie) => {
        return (
          <li
            className={styles.movies__item}
            key={movie.id}
            onClick={() => handleVisibleMovieDetailInfo(movie)}
          >
            {movie.poster_path !== null ? (
              <img
                className={styles.movies__itemPoster}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            ) : (
              <div className={styles.movies__itemNoPoster}>no poster</div>
            )}

            <div className={styles.movies__itemWrapper}>
              <div className={styles.movies__itemName}>
                {movie.original_title}
              </div>

              <div className={styles.movies__itemContainer}>
                <div className={styles.movies__itemYear}>
                  {movie.release_date &&
                    intlFormat(
                      new Date(movie.release_date),
                      { year: "numeric" },
                      { locale: "en-US" }
                    )}
                </div>

                {authorization.userData ? (
                  <div className={styles.movies__itemIcons}>
                    {!favoriteList.includes(movie.id) ? (
                      <svg
                        className={`${styles.movies__itemFavoriteIcon} ${styles.icon}`}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        onClick={() =>
                          onClickIcon(toJS(movie.id), true, "favorite")
                        }
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                      </svg>
                    ) : (
                      <svg
                        className={`${styles.movies__itemFavoriteIcon} ${styles.icon}`}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        onClick={() =>
                          onClickIcon(toJS(movie.id), false, "favorite")
                        }
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    )}

                    {!watchLaterList.includes(movie.id) ? (
                      <svg
                        className={`${styles.movies__itemWatchIcon} ${styles.icon}`}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        onClick={() =>
                          onClickIcon(toJS(movie.id), true, "watchlist")
                        }
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                      </svg>
                    ) : (
                      <svg
                        className={`${styles.movies__itemWatchIcon} ${styles.icon}`}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        onClick={() =>
                          onClickIcon(toJS(movie.id), false, "watchlist")
                        }
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                      </svg>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
});

export default MovieItem;
