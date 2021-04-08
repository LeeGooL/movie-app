import { action, makeAutoObservable } from "mobx";
import axios from "axios";

import { API_URL, API_KEY_3 } from "@constants/api";

class Filters {
  genresList = [];
  selectedGenresList = [];
  sortingType = localStorage.getItem("sortingType") || "popularity.desc";
  currentPage = 1;
  releaseYears = { min: 1980, max: 2021 };
  rating = -1;
  tags = [];
  searchValue = "";

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  getSortingType() {
    return this.sortingType;
  }

  setSortingType(type) {
    this.sortingType = type;
  }

  setSelectedGenres(list) {
    this.selectedGenresList = list;
  }

  setCurrentPage(page) {
    this.currentPage = page;
  }

  setReleaseYears(years) {
    this.releaseYears = years;
  }

  setRating(rating) {
    this.rating = rating;
  }

  changeCurrentPage(action) {
    action === "increase" ? this.currentPage++ : this.currentPage--;
  }

  setTags(tags) {
    this.tags = tags;
  }

  setSearchValue(searchValue) {
    this.searchValue = searchValue;
  }

  getGenresList() {
    axios
      .get(`${API_URL}/genre/movie/list`, {
        params: {
          api_key: API_KEY_3,
        },
      })
      .then(action(({ data: { genres } }) => (this.genresList = genres)));
  }
}

export default new Filters();
