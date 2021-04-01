import { makeAutoObservable } from "mobx";
import axios from "axios";

import { API_URL, API_KEY_3 } from "@constants/api";

class Movies {
  movies = [];
  moviesCount = this.movies.length;
  pagesCount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies() {
    axios
      .get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY_3,
          language: "en-US",
          limit: 18,
        },
      })
      .then(({ data: { results } }) => (this.movies = results));
  }
}

export default new Movies();
