import React from "react";

import { observer } from "mobx-react-lite";
import movies from "@store/movies";

import "antd/dist/antd.css";
import styles from "./movie-detail-info.module.scss";

const MovieDetailInfo = observer(() => {
  const handleCloseDetailInfo = () => {
    movies.setIsDetailInfoVisible(false);
    movies.setSelectedMovieDetailInfo(null);
  };

  const {
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = movies.selectedMovieDetailInfo;

  return (
    <div className={styles.detailInfo}>
      <img
        className={styles.detailInfo__poster}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="poster"
      />

      <div className={styles.detailInfo__wrapper}>
        <h3 className={styles.detailInfo__title}>{original_title}</h3>
        <div className={styles.detailInfo__year}>{release_date}</div>
        <p className={styles.detailInfo__description}>{overview}</p>

        <div className={styles.detailInfo__rating}>
          vote average: {vote_average.toFixed(1)}
        </div>

        <div className={styles.detailInfo__voteCount}>
          votes count: {vote_count}
        </div>
      </div>

      <svg
        className={styles.detailInfo__icon}
        onClick={handleCloseDetailInfo}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="18px"
        height="18px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </div>
  );
});

export default MovieDetailInfo;
