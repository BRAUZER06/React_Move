import classNames from "classname";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUserCircle, FaSearch, FaPlus } from "react-icons/fa";
import GlobalSearchFilter from "../../pages/Cart/GlobalSearchFilter/GlobalSearchFilter";
import {
  headerInputValueAction,
  headerCheckedFilmsAction,
  fetchFilmsInputTextAction,
  headerCheckedInputAction,
} from "../../redux/action/headerAction";

import { globalCheckedFilmsAction } from "../../redux/action/globalSearchFilterAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refInputCheck = useRef(null);

  const inputValue = useSelector((state) => state.header.inputValue);
  const { error, loading, films, checkedFilms, checkInput } = useSelector(
    (state) => state.header
  );

  const onChangeInputSearch = (e) => {
    dispatch(headerInputValueAction(e.target.value));
  };

  //событие для определения нажатия на  Enter в input (для поиска фильмов )
  const getFilmsEnterInput = async (e) => {
    if (e.code === "Enter") {
      dispatch(globalCheckedFilmsAction(false));
      dispatch(fetchFilmsInputTextAction(inputValue));
      dispatch(headerCheckedFilmsAction(true));
      navigate("/FilmsSearchInput");

      if (!inputValue) {
        navigate("/FilmsAndSeries");
      }
    }
  };

  //фокусируется на инпут если нажать на рядом лежащий элемент
  const onClickInputSearch = () => {
    // сделать ---> отлавливать клик вне элемента useoutside
    refInputCheck.current.focus();
    dispatch(headerCheckedInputAction(true));
  };

  // закрытие input при нажатии на  X
  const onClickCloseInput = () => {
    dispatch(headerCheckedInputAction(false));
    dispatch(headerInputValueAction(""));
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
          {checkInput ? (
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
        {checkInput && (
          <div className={styles.header__divItems_globalSearch}>
            <GlobalSearchFilter />
          </div>
        )}

        <div className={styles.header__divItems}>
          <div
            className={classNames(
              styles.header__divItems_inputDiv,
              checkInput && styles.header__divItems_inputDiv_checked
            )}
          >
            <input
              ref={refInputCheck}
              onClick={onClickInputSearch}
              checked={checkInput}
              value={inputValue}
              onKeyPress={getFilmsEnterInput}
              onChange={onChangeInputSearch}
              type="text"
              placeholder="Поиск..."
              className={classNames(
                styles.header__divItems_inputDiv_input,
                checkInput && styles.header__divItems_inputDiv_input_checked
              )}
            />
            <FaSearch
              onClick={onClickInputSearch}
              className={styles.iconSearch}
            />
          </div>
        </div>
        {checkInput && (
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
