import React from "react";
import intlFormat from "date-fns/intlFormat";

import { observer } from "mobx-react-lite";

import movies from "@store/movies";

import "./movie-item.scss";

const MovieItem = observer(() => {
  return (
    <>
      {movies.movies.map(
        ({ id, poster_path, original_title, release_date }) => (
          <li className="movies__item" key={id}>
            <img
              className="movies__item-poster"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
            />

            <div className="movies__item-wrapper">
              <div className="movies__item-name">{original_title}</div>
              <div className="movies__item-year">
                {release_date &&
                  intlFormat(
                    new Date(release_date),
                    { year: "numeric" },
                    { locale: "en-US" }
                  )}
              </div>
            </div>
          </li>
        )
      )}
    </>
  );
});

export default MovieItem;
