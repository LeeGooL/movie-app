import React from "react";

import { Search, Profile, Filters, Movies, MoviesBar } from "@components";

import styles from "./app.module.scss";

const App = () => {
  return (
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
  );
};

export default App;
