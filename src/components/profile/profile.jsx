import React from "react";

import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img
        className={styles.profile__img}
        src="https://via.placeholder.com/35"
        alt=""
      />
    </div>
  );
};

export default Profile;
