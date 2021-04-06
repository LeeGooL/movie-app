import React from "react";

import {
  Search,
  Profile,
  Filters,
  Movies,
  MoviesBar,
  AuthorizationForm,
} from "@components";

import { message } from "antd";

import { observer } from "mobx-react-lite";
import authorization from "@store/authorization";

import "antd/dist/antd.css";
import styles from "./app.module.scss";

const App = observer(() => {
  return (
    <>
      <div className={styles.movieApp}>
        <div className={styles.movieApp__search}>
          <Search />
        </div>

        <div className={styles.movieApp__profile}>
          <Profile />
        </div>

        <div className={styles.movieApp__filters}>
          <Filters />
        </div>
        <div className={styles.movieApp__moviesBar}>
          <MoviesBar />
        </div>

        <div className={styles.movieApp__movies}>
          <Movies />
        </div>
      </div>

      {authorization.userData === null && authorization.isLoginFormVisible ? (
        <div className={styles.movieApp__authorizationForm}>
          <AuthorizationForm />
        </div>
      ) : null}

      {/* {authorization.statusAuthorization === 'error'
				? message.error('Login failed! Please try again now or later')
				: null}

			{authorization.statusAuthorization === 'success'
				? message.success('Successful authorization')
				: null} */}
    </>
  );
});

export default App;
