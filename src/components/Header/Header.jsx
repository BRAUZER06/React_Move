import React from "react";
import styles from "./Header.module.scss";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
const Header = () => {
  const [inputSearchValue, setInputSearchValue] = React.useState("");

  const onClickLogo = () => {};
  const onClickFilmsAndSeries = () => {};
  const onClickTrailer = () => {};
  const onClickPremiere = () => {};
  const onClickProfile = () => {};

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.header__divItems}>
          <h2 onClick={onClickLogo}>Fil'mets</h2>
          <p onClick={onClickFilmsAndSeries}>Кино и сериалы</p>
          <p onClick={onClickTrailer}>Трейлеры</p>
          <p onClick={onClickPremiere}>Кинопремьеры</p>
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
          />{" "}
          <p className={styles.comeInAccount}>Войти</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
