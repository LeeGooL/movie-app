import React from "react";

import { Search, Profile, Filters, Movies, MoviesBar } from "@components";

import "./app.scss";

const App = () => {
  return (
    <div className="movie-app__container">
      <div className="movie-app__search">
        <Search />
      </div>

      <div className="movie-app__profile">
        <Profile />
      </div>

      <div className="movie-app__filters">
        <Filters />
      </div>
      <div className="movie-app__movies-bar">
        <MoviesBar />
      </div>

      <div className="movie-app__movies">
        <Movies />
      </div>
    </div>
  );
};

export default App;
