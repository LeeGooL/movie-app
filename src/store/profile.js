import { makeAutoObservable } from "mobx";

class Profile {
  favoriteList = [];
  watchLaterList = [];
  moviesCount = 0;
  pagesCount = 0;
  isLoaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFavoriteList = (list) => {
    if (list === null) {
      this.favoriteList = [];
    } else {
      this.favoriteList = list;
    }
  };

  setWatchLaterList = (list) => {
    if (list === null) {
      this.watchLaterList = [];
    } else {
      this.watchLaterList = list;
    }
  };

  func = () => {};

  changeMovieStatusOnList(movie, status, type) {
    if (type === "favorite") {
      if (JSON.parse(localStorage.getItem("favorite-list") === null)) {
        this.favoriteList = [];
      } else {
        this.favoriteList = JSON.parse(localStorage.getItem("favorite-list"));
      }

      if (status === true) {
        if (
          this.favoriteList === [] ||
          !this.favoriteList.some((item) => item.id === movie.id)
        ) {
          this.favoriteList.push(movie);
          localStorage.removeItem("favorite-list");
          localStorage.setItem(
            "favorite-list",
            JSON.stringify(this.favoriteList)
          );
          return;
        }
      } else if (status === false) {
        const index = this.favoriteList.findIndex((item) => {
          if (item.id === movie.id) {
            return true;
          }

          return false;
        });
        const newList = [
          ...this.favoriteList.slice(0, index),
          ...this.favoriteList.slice(index + 1),
        ];

        this.favoriteList = newList;
        localStorage.removeItem("favorite-list");
        localStorage.setItem(
          "favorite-list",
          JSON.stringify(this.favoriteList)
        );
        return;
      }
    } else if (type === "watchlist") {
      if (JSON.parse(localStorage.getItem("watch-later-list") === null)) {
        this.watchLaterList = [];
      } else {
        this.watchLaterList = JSON.parse(
          localStorage.getItem("watch-later-list")
        );
      }

      if (status === true) {
        if (
          this.watchLaterList === [] ||
          !this.watchLaterList.some((item) => item.id === movie.id)
        ) {
          this.watchLaterList.push(movie);
          localStorage.removeItem("watch-later-list");
          localStorage.setItem(
            "watch-later-list",
            JSON.stringify(this.watchLaterList)
          );
          return;
        }
      } else if (status === false) {
        const index = this.watchLaterList.findIndex((item) => {
          if (item.id === movie.id) {
            return true;
          }

          return false;
        });
        const newList = [
          ...this.watchLaterList.slice(0, index),
          ...this.watchLaterList.slice(index + 1),
        ];

        this.watchLaterList = newList;
        localStorage.removeItem("watch-later-list");
        localStorage.setItem(
          "watch-later-list",
          JSON.stringify(this.watchLaterList)
        );
        return;
      }
    }
  }
}

export default new Profile();
