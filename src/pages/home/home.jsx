import React from "react";

import {
  Search,
  Profile,
  Filters,
  Movies,
  MoviesBar,
  AuthorizationForm,
  MovieDetailInfo,
} from "@components";

import { observer } from "mobx-react-lite";
import authorization from "@store/authorization";
import movies from "@store/movies";
import profile from "@store/profile";

import styles from "./home.module.scss";

const Home = observer(({ history }) => {
  React.useEffect(() => {
    movies.fetchMovies();

    profile.setWatchLaterList(
      JSON.parse(localStorage.getItem("watch-later-list"))
    );
    profile.setFavoriteList(JSON.parse(localStorage.getItem("favorite-list")));
  }, []);

  return (
    <div>
      <div className={styles.movieApp}>
        <div className={styles.movieApp__search}>
          <Search />
        </div>

        <div className={styles.movieApp__profile}>
          <Profile />
        </div>

        <div className={styles.movieApp__filters}>
          <Filters history={history} />
        </div>

        <div className={styles.movieApp__moviesBar}>
          <MoviesBar history={history} />
        </div>

        <div className={styles.movieApp__movies}>
          <Movies moviesList={movies.movies} history={history} />
        </div>
      </div>

      {authorization.userData === null && authorization.isLoginFormVisible ? (
        <div className={styles.authorizationForm}>
          <AuthorizationForm />
        </div>
      ) : null}

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

export default Home;
