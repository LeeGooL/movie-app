import React from "react";

import { observer } from "mobx-react-lite";

import { MoviesBar, Movies, MovieDetailInfo } from "@components";

import movies from "@store/movies";
import profile from "@store/profile";

import styles from "./watch-later.module.scss";

const WatchLater = observer(({ history }) => {
  return (
    <div className={styles.watchLater}>
      <div className={styles.watchLater__wrapper}>
        <div className={styles.watchLater__bar}>
          <MoviesBar history={history} />
        </div>

        <div className={styles.watchLater__movies}>
          <Movies moviesList={profile.watchLaterList} history={history} />
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

export default WatchLater;
