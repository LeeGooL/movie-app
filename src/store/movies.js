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

  getMovies(currentPage = 1, sortingType = "popularity.desc") {
    axios
      .get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY_3,
          language: "en-US",
          limit: 18,
          page: currentPage,
          sort_by: sortingType,
        },
      })
      .then(({ data: { results, total_pages, total_results } }) => {
        this.isLoaded = true;
        this.movies = results;
        this.moviesCount = total_results;
        this.pagesCount = total_pages;
      });
  }

  fetchMovies(currentPage = 1, sortingType = "popularity.desc") {
    this.isLoaded = false;

    if (sortingType !== "popularity.desc") {
      this.getMovies(currentPage, sortingType);
    } else {
      this.getMovies(currentPage);
    }
  }
}

export default new Movies();
