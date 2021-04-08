import React, { useEffect } from "react";

import profile from "@store/profile";

import styles from "./watch-later-list.module.scss";

const WatchLaterList = () => {
  useEffect(() => {
    profile.fetchWatchLaterList();

    console.log(profile.watchLaterList);
  }, []);

  return <h1>watch list</h1>;
};

export default WatchLaterList;
