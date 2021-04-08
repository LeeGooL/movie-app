import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import Cookies from "universal-cookie";

import { API_URL, API_KEY_3 } from "@constants/api";

import authorization from "./authorization";
import filters from "./filters";

const cookies = new Cookies();

class Profile {
  favoriteList = null;
  watchLaterList = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchFavoriteList() {
    axios
      .get(
        `${API_URL}/account/${authorization.getAccountId()}/favorite/movies`,
        {
          params: {
            api_key: API_KEY_3,
            session_id:
              cookies.get("session_id") || authorization.getSessionId(),
            sort_by: filters.getSortingType(),
          },
        }
      )
      .then(action(({ data }) => (this.favoriteList = data)));
  }

  fetchWatchLaterList() {
    axios
      .get(
        `${API_URL}/account/${authorization.getAccountId()}/watchlist/movies`,
        {
          params: {
            api_key: API_KEY_3,
            session_id:
              cookies.get("session_id") || authorization.getSessionId(),
            sort_by: filters.getSortingType(),
          },
        }
      )
      .then(action(({ data }) => (this.watchLaterList = data)));
  }

  changeStatusMovie(id, status, type) {
    axios({
      method: "POST",
      url: `${API_URL}/account/${authorization.getAccountId()}/${type}`,
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        api_key: API_KEY_3,
        session_id: cookies.get("session_id") || authorization.getSessionId(),
        media_type: "movie",
        media_id: id,
        favorite: status,
      },
    }).then(
      action(({ data }) => {
        console.log(data);
      })
    );
  }
}

export default new Profile();
