import React from "react";
import styles from "./Header.module.scss";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [inputSearchValue, setInputSearchValue] = React.useState("");

  const onClicHome = () => {};
  const onClickFilmsAndSeries = () => {};
  const onClickTrailer = () => {};
  const onClickPremiere = () => {};
  const onClickProfile = () => {};

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.header__divItems}>
          <Link
            onClick={onClicHome}
            className={styles.header__divItems_h2}
            to="/Home"
          >
            Fil'mets
          </Link>
          <Link
            onClick={onClickFilmsAndSeries}
            className={styles.header__divItems_p}
            to="/FilmsAndSeries"
          >
            Кино и сериалы
          </Link>
          <Link
            onClick={onClickTrailer}
            className={styles.header__divItems_p}
            to="/Trailer"
          >
            Трейлеры
          </Link>
          <Link
            onClick={onClickPremiere}
            className={styles.header__divItems_p}
            to="/Premiere"
          >
            Кинопремьеры
          </Link>
        </div>
        <div className={styles.header__divItems}>
          <div className={styles.header__divItems_input}>
            <input
              value={inputSearchValue}
              onChange={(e) => setInputSearchValue(e.target.value)}
              type="text"
              placeholder="Поиск..."
            />
            <FaSearch className={styles.iconSearch} />
          </div>
        </div>
        <div className={styles.header__divItems}>
          <FaRegUserCircle
            onClick={onClickProfile}
            className={styles.iconProfile}
          />
          {/* СДЕЛАТЬ  */}
          <Link className={styles.header__divItems_p} to="/Profile">
            <p className={styles.comeInAccount}>Войти</p>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
