import React from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import intlFormat from "date-fns/intlFormat";

import movies from "@store/movies";

import "./movies.scss";

/* 
adult: false
backdrop_path: "/iopYFB1b6Bh7FWZh3onQhph1sih.jpg"
genre_ids: (2) [28, 878]
id: 399566
original_language: "en"
original_title: "Godzilla vs. Kong"
overview: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages."
popularity: 11701.435
poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
release_date: "2021-03-24"
title: "Godzilla vs. Kong"
video: false
vote_average: 8.7
vote_count: 1236
*/

const Movies = observer(() => {
  React.useEffect(() => {
    movies.fetchMovies();
  }, []);

  return (
    <div className="movies">
      <ul className="movies__items">
        {toJS(movies.movies).map(
          ({ id, poster_path, original_title, release_date }) => {
            return (
              <li className="movies__item" key={id}>
                <img
                  className="movies__item-poster"
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt=""
                />

                <div className="movies__item-name">{original_title}</div>
                <div className="movies__item-year">
                  {intlFormat(
                    new Date(release_date),
                    { year: "numeric" },
                    { locale: "en-US" }
                  )}
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
});

export default Movies;
