import React from "react";

import styles from "./error-notification.module.scss";

const ErrorNotification = () => {
  return (
    <div className={styles.errorNotification}>
      <h2 className={styles.errorNotification__text}>
        no movies found for your request
      </h2>
    </div>
  );
};

export default ErrorNotification;
