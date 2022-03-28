import React from "react";
import styles from "./Header.module.scss";
import { FaRegUserCircle } from 'react-icons/fa';
const Header = () => {
  const [inputSearchValue, setInputSearchValue]=React.useState('')
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.header__divItems}>
          <h2>Fil'mets</h2>
          <p>Кино и сериалы</p>
          <p>Трейлеры</p>
          <p>Кинопремьеры</p>
        </div>
        <div className={styles.header__divItems}>
          <input value={inputSearchValue} onChange={(e)=>setInputSearchValue(e.target.value)}  type="text" placeholder="Поиск..." />
        </div>
        <div className={styles.header__divItems}>
          <FaRegUserCircle className={styles.header__divItems_icon}/> <p className={styles.comeInAccount}>Войти</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
