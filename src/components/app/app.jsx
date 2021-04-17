import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { Route, Switch, withRouter } from "react-router-dom";

import { API_URL, API_KEY_3 } from "@constants/api";
import { Home, WatchLater, Favorite } from "@pages";

import { observer } from "mobx-react-lite";
import authorization from "@store/authorization";

import "antd/dist/antd.css";
import profile from "../../store/profile";

const cookies = new Cookies();

const App = observer(({ history }) => {
  useEffect(() => {
    const session_id = cookies.get("session_id");

    if (session_id) {
      authorization.fetchApi({
        url: `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`,
      });
    }

    profile.setWatchLaterList(
      JSON.parse(localStorage.getItem("watch-later-list"))
    );
    profile.setFavoriteList(JSON.parse(localStorage.getItem("favorite-list")));
  }, []);

  return (
    <div>
      <Switch>
        <Route history={history} path="/" component={Home} exact />

        <Route
          history={history}
          path="/favorite-list"
          component={Favorite}
          exact
        />

        <Route
          history={history}
          path="/watch-later-list"
          component={WatchLater}
          exact
        />
      </Switch>
    </div>
  );
});

export default withRouter(App);
