import React from "react";

import { observer } from "mobx-react-lite";

import { MovieItemLoader, MovieItem } from "@components/";

import movies from "@store/movies";

import "./movies.scss";

const Movies = observer(() => {
  return (
    <div className="movies">
      <ul className="movies__items">
        {!movies.isLoaded ? <MovieItemLoader /> : <MovieItem />}
      </ul>
    </div>
  );
});

export default Movies;
