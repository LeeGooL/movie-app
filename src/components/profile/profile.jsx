import React from "react";

import { observer } from "mobx-react-lite";
import authorization from "@store/authorization";

import styles from "./profile.module.scss";

const Profile = observer(() => {
  const onLogin = () => {
    authorization.setVisibleLoginForm(true);
  };

  const onLogOut = () => {
    authorization.onLogOut();
  };

  return (
    <div className={styles.profile}>
      {authorization.userData === null ? (
        <button className={styles.profile__btn} onClick={onLogin}>
          Login
        </button>
      ) : (
        <div className={styles.profile__wrapper}>
          <img
            className={styles.profile__avatar}
            src={`https://secure.gravatar.com/avatar/${authorization.userData.avatar.gravatar.hash}.jpg?s=48`}
            alt="avatar"
          />

          <button className={styles.profile__logOutBtn} onClick={onLogOut}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
});

export default Profile;
