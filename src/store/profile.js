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

  changeMovieStatusOnList(movie, status, type) {
    if (type === "favorite") {
      if (status === true) {
        this.favoriteList.push(movie);
        return;
      }

      const index = this.favoriteList.indexOf(movie);
      const newList = [
        ...this.favoriteList.slice(0, index),
        ...this.favoriteList.slice(index + 1),
      ];

      this.favoriteList = newList;
      return;
    }

    if (status === true) {
      this.watchLaterList.push(movie);
      return;
    }

    const index = this.watchLaterList.indexOf(movie);
    const newList = [
      ...this.watchLaterList.slice(0, index),
      ...this.watchLaterList.slice(index + 1),
    ];

    this.watchLaterList = newList;
    return;
  }
}

export default new Profile();
