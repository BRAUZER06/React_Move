import React, { useRef } from "react";
import styles from "./Header.module.scss";
import { FaRegUserCircle, FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import classNames from "classname";
import { useDispatch, useSelector } from "react-redux";
import { headerInputValue } from "../../redux/action/headerAction";
import GlobalSearchFilter from "../../pages/Cart/GlobalSearchFilter/GlobalSearchFilter";

const Header = () => {
  const dispatch = useDispatch();
  const refInputCheck = useRef(null);
  const inputSearchValue = useSelector((state) => state.header.inputValue);
  const [inputChecked, setInputChecked] = React.useState(false);

  const onChangeInputSearch = (e) => {
    dispatch(headerInputValue(e.target.value));
  };

  const onClickInputSearch = (e) => {
      //отлавливать клик вне элемента
    refInputCheck.current.focus();
    setInputChecked(true);
  };

  const onClickCloseInput = () => {
    setInputChecked(false);
  };

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
            to="/"
          >
            Fil'mets
          </Link>
          {inputChecked ? (
            ""
          ) : (
            <>
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
            </>
          )}
        </div>
        {inputChecked && (
          <div className={styles.header__divItems_globalSearch}>
            <GlobalSearchFilter />
          </div>
        )}

        <div className={styles.header__divItems}>
          <div
            className={classNames(
              styles.header__divItems_inputDiv,
              inputChecked && styles.header__divItems_inputDiv_checked
            )}
          >
            <input
              ref={refInputCheck}
              onClick={onClickInputSearch}
              checked={inputChecked}
              value={inputSearchValue}
              onChange={onChangeInputSearch}
              type="text"
              placeholder="Поиск..."
              className={classNames(
                styles.header__divItems_inputDiv_input,
                inputChecked && styles.header__divItems_inputDiv_input_checked
              )}
            />
            <FaSearch
              onClick={onClickInputSearch}
              className={styles.iconSearch}
            />
          </div>
        </div>
        {inputChecked && (
          <FaPlus onClick={onClickCloseInput} className={styles.iconXmark} />
        )}
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
