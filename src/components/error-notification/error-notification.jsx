import React from "react";

import styles from "./error-notification.module.scss";

const ErrorNotification = ({ label }) => {
  return (
    <div className={styles.errorNotification}>
      <h2 className={styles.errorNotification__text}>{label}</h2>
    </div>
  );
};

export default ErrorNotification;
