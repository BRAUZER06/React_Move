import React from "react";
import styles from "./HomePages.module.scss";

const HomePages = () => {
  return (
    <div className={styles.content}>
      <iframe
        setVolume="100"
        className={styles.content__content}
        src="https://www.youtube.com/embed/XXHCio8TsEo?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        autoplay="1"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default HomePages;
