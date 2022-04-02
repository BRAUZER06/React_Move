import React from "react";
import styles from "./FilmCart.module.scss";
import classNames from "classname";

const FilmCart = ({ ...props }) => {
  // const [openCartInfoFilm, setOpenCartInfoFilm]=React.useState(false)
  const { posterUrlPreview, genres, nameRu, year } = props;


  const onClickFilmCart = () => {};
  return (
    <div className={styles.FilmCart}>
      <div onClick={onClickFilmCart} className={styles.content}>
        <div className={styles.content__img}>
          <img src={posterUrlPreview} alt="" />
        </div>
        <div className={styles.content__text}>
          <div onClick={onClickFilmCart} className={styles.content__text_name}>
            <p>{nameRu}</p>
          </div>
          <div className={styles.content__text_genres}>
            {genres.map((e) => (
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
