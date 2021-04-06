import React, { useEffect } from "react";
import Cookies from "universal-cookie";

import { observer } from "mobx-react-lite";
import authorization from "@store/authorization";

import { API_URL, API_KEY_3 } from "@constants/api";

import styles from "./profile.module.scss";

const cookies = new Cookies();

const Profile = observer(() => {
  useEffect(() => {
    const session_id = cookies.get("session_id");

    if (session_id) {
      authorization.fetchApi({
        url: `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`,
      });
    }
  }, []);

  const onLogin = () => {
    authorization.setVisibleLoginForm(true);
  };

  return (
    <div className={styles.profile}>
      {authorization.userData === null ? (
        <button className={styles.profile__btn} onClick={onLogin}>
          Login
        </button>
      ) : (
        <img
          className={styles.profile__avatar}
          src={`https://secure.gravatar.com/avatar/${authorization.userData.avatar.gravatar.hash}.jpg?s=48`}
          alt="avatar"
        />
      )}
    </div>
  );
});

export default Profile;
