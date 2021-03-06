import React from "react";
import classNames from "classname";
import styles from "./FilmCart.module.scss";

const FilmCart = (props) => {
  const { posterUrlPreview, genres, nameRu, year } = props;
  return (
    <div className={styles.FilmCart}>
      <div className={styles.content}>
        <div className={styles.content__img}>
          <img src={posterUrlPreview} alt="" />
        </div>
        <div className={styles.content__text}>
          <div className={styles.content__text_name}>
            <p>{nameRu}</p>
          </div>
          <div className={styles.content__text_genres}>
            {genres.slice(0, 4).map((e) => (
              <span className={styles.content__text_genres_span} key={e.genre}>
                {e.genre},
              </span>
            ))}
          </div>
        </div>
        <div className={styles.content__data}>
          <p className={classNames(styles.content__data_p)}>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCart;
