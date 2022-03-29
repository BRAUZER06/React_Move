import React from "react";
import styles from "./FilmCart.module.scss";

const FilmCart = ({ ...props }) => {
  // const [openCartInfoFilm, setOpenCartInfoFilm]=React.useState(false)
  const { posterUrlPreview, genres, nameRu } = props;
  console.log(props);
  console.log(nameRu);
  const onClickFilmCart=()=>{
    
  }
  return (
    <div className={styles.FilmCart}>
      <div onClick={onClickFilmCart} className={styles.content}>
        <div className={styles.content__img}>
          <img src={posterUrlPreview} alt="" />
        </div>
        <div className={styles.content__text}>
          <div onClick={onClickFilmCart} className={styles.content__text_name}><p>{nameRu}</p> </div>
          <div className={styles.content__text_genres}>
            {genres.map((e) => (
              <span className={styles.content__text_genres_span} key={e.genre}>{e.genre},</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCart;
