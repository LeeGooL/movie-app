import { makeAutoObservable } from "mobx";
import axios from "axios";

import { API_URL, API_KEY_3 } from "@constants/api";

class Movies {
  movies = [];
  moviesCount = 0;
  pagesCount = 0;
  isLoaded = false;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  get moviesTotal() {
    return this.movies;
  }

  fetchMovies(currentPage) {
    this.isLoaded = false;

    axios
      .get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY_3,
          language: "en-US",
          limit: 18,
          page: currentPage,
        },
      })
      .then(({ data: { results, total_pages, total_results } }) => {
        this.isLoaded = true;
        this.movies = results;
        this.moviesCount = total_results;
        this.pagesCount = total_pages;
      });
  }
}

export default new Movies();
