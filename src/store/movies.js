import { action, makeAutoObservable } from "mobx";
import axios from "axios";

import filters from "./filters";

import { API_URL, API_KEY_3 } from "@constants/api";

class Movies {
  movies = [];
  moviesCount = 0;
  pagesCount = 0;
  isLoaded = false;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  getMovies(
    currentPage,
    sortingType = "popularity.desc",
    genresList,
    releaseYear,
    rating
  ) {
    axios
      .get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY_3,
          language: "en-US",
          page: currentPage,
          sort_by: sortingType,
          with_genres: genresList && genresList.join(","),
          [`vote_average.gte`]: rating !== -1 ? rating : "",
          [`vote_average.lte`]: rating !== -1 ? rating : "",
          [`primary_release_date.gte`]: `${releaseYear.min}-01-01`,
          [`primary_release_date.lte`]: `${releaseYear.max}-12-31`,
        },
      })
      .then(
        action(({ data: { results, total_pages, total_results } }) => {
          this.isLoaded = true;
          this.movies = results;
          this.moviesCount = total_results;
          this.pagesCount = total_pages;
        })
      );
  }

  fetchMovies() {
    this.isLoaded = false;

    if (filters.sortingType !== "popularity.desc") {
      this.getMovies(
        filters.currentPage,
        filters.sortingType,
        filters.selectedGenresList,
        filters.releaseYears,
        filters.rating
      );
    } else {
      this.getMovies(
        filters.currentPage,
        filters.sortingType,
        filters.selectedGenresList,
        filters.releaseYears,
        filters.rating
      );
    }
  }
}

export default new Movies();
