import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

export const AppLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Loader
        type="Puff"
        color="#FC842D"
        height={500}
        width={500}
        timeout={3000}
      />
    </div>
  );
};
