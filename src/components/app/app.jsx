import React, { useEffect } from "react";
import Cookies from "universal-cookie";

import { API_URL, API_KEY_3 } from "@constants/api";

import {
  Search,
  Profile,
  Filters,
  Movies,
  MoviesBar,
  AuthorizationForm,
  FavoriteList,
  WatchLaterList,
  MovieDetailInfo,
} from "@components";

import { Route, Switch, withRouter } from "react-router-dom";

import { observer } from "mobx-react-lite";
import authorization from "@store/authorization";
import profile from "@store/profile";
import movies from "@store/movies";

import "antd/dist/antd.css";
import styles from "./app.module.scss";

const cookies = new Cookies();

const App = observer(({ history }) => {
  useEffect(() => {
    const session_id = cookies.get("session_id");

    if (session_id) {
      authorization.fetchApi({
        url: `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`,
      });
    }

    console.log(profile.favoriteList);
  }, []);

  return (
    <>
      <Switch>
        <div className={styles.movieApp}>
          <div className={styles.movieApp__search}>
            <Route history={history} path="/" component={Search} />
          </div>

          <div className={styles.movieApp__profile}>
            <Route history={history} path="/" component={Profile} />
          </div>

          <div className={styles.movieApp__filters}>
            <Route history={history} path="/" component={Filters} />
          </div>

          <div className={styles.movieApp__moviesBar}>
            <Route history={history} path="/" component={MoviesBar} />
          </div>

          <div className={styles.movieApp__movies}>
            <Route history={history} path="/" component={Movies} exact />

            <Route
              history={history}
              path="/favorite-list"
              component={FavoriteList}
            />

            <Route
              history={history}
              path="/watch-later-list"
              component={WatchLaterList}
            />
          </div>
        </div>
      </Switch>

      {authorization.userData === null && authorization.isLoginFormVisible ? (
        <div className={styles.movieApp__authorizationForm}>
          <AuthorizationForm />
        </div>
      ) : null}

      {movies.isDetailInfoVisible ? (
        <div className={styles.movieApp__movieDetailInfo}>
          <div className={styles.detailInfo}>
            <MovieDetailInfo />
          </div>
        </div>
      ) : null}
    </>
  );
});

export default withRouter(App);
