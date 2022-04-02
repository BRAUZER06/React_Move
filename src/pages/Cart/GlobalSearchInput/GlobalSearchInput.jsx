import React from "react";
import styles from "./GlobalSearchInput.module.scss";
import { FaGlobeAmericas } from "react-icons/fa";
const GlobalSearchInput = () => {
  return (
    <div className={styles.GlobalSearchInput}>
      <div className={styles.GlobalSearchInput__icon}>
        <FaGlobeAmericas />
      </div>
      <div className={styles.GlobalSearchInput__filterMove}>
       <div><img src="" alt="" /> </div>
      </div>
    </div>
  );
};

export default GlobalSearchInput;
