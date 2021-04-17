import React from "react";

import { observer } from "mobx-react-lite";

import { MoviesBar, Movies, MovieDetailInfo } from "@components";

import movies from "@store/movies";
import profile from "@store/profile";

import styles from "./favorite.module.scss";

const Favorite = observer(({ history }) => {
  return (
    <div className={styles.favorite}>
      <div className={styles.favorite__wrapper}>
        <div className={styles.favorite__bar}>
          <MoviesBar history={history} />
        </div>

        <div className={styles.favorite__movies}>
          <Movies moviesList={profile.favoriteList} history={history} />
        </div>
      </div>

      {movies.isDetailInfoVisible ? (
        <div className={styles.movieDetailInfo}>
          <div className={styles.detailInfo}>
            <MovieDetailInfo />
          </div>
        </div>
      ) : null}
    </div>
  );
});

export default Favorite;
