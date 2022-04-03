import React from "react";
import styles from "./GlobalSearchInput.module.scss";
import { FaGlobeAmericas } from "react-icons/fa";
import { useSelector } from "react-redux";
import { instance } from "../../../config/axios";
import classNames from "classname";
const GlobalSearchInput = () => {
  const inputVlueSearch = useSelector((state) => state.header.inputValue);
  const [inputsGlobalValue, setInputsGlovalValue] = React.useState({
    sortFilms: "",
    tipeFilms: "",
    minRating: "",
    maxRating: "",
    minYear: "",
    maxYear: "",
    keyword: "",
  });
  console.log(inputsGlobalValue);
  const [getFilmsGlobalFilterArr, setGetFilmsGlobalFilterArr] = React.useState(
    []
  );
  const [checkGlobalSearch, setCheckGlobalSearch] = React.useState(true);

  const getFilmsFilter = () => {
    try {
      (async () => {
        const res = instance
          .get(
            // "https://kinopoiskapiunofficial.tech/api/v2.2/films?ratingFrom=1&ratingTo=2&yearFrom=2000&yearTo=3000&keyword=parker&page=1"
            `https://kinopoiskapiunofficial.tech/api/v2.2/films?${
              inputsGlobalValue.sortFilms.length &&
              `order=${inputsGlobalValue.sortFilms}`
            }${
              inputsGlobalValue.tipeFilms.length &&
              `&type=${inputsGlobalValue.tipeFilms}`
            }${
              inputsGlobalValue.minRating.length &&
              `&ratingFrom=${inputsGlobalValue.minRating}`
            }${
              inputsGlobalValue.maxRating.length &&
              `&ratingTo=${inputsGlobalValue.maxRating}`
            }${
              inputsGlobalValue.minYear.length &&
              `&yearFrom=${inputsGlobalValue.minYear}`
            }${
              inputsGlobalValue.maxYear.length &&
              `&yearTo=${inputsGlobalValue.maxYear}`
            }${
              inputsGlobalValue.keyword.length &&
              `&keyword=${inputsGlobalValue.keyword}`
            }&page=1`
          )
          .then((respons) => setGetFilmsGlobalFilterArr(respons.data.items));
      })();
    } catch (error) {
      alert("Фильтр не работает");
      console.log(error);
    }
  };

  console.log(getFilmsGlobalFilterArr);

  const onClickGlobalSearch = () => {
    setCheckGlobalSearch((checkGlobalSearch) => !checkGlobalSearch);
  };

  const inputFilterGlobalValue = (e) => {
    const { value, name } = e.target;
    setInputsGlovalValue({ ...inputsGlobalValue, [name]: value });
  };

  return (
    <div>
      <div className={styles.GlobalSearchInput}>
        <div
          className={classNames(
            styles.GlobalSearchInput__icon,
            checkGlobalSearch && styles.GlobalSearchInput__icon_active
          )}
        >
          <FaGlobeAmericas onClick={onClickGlobalSearch} />
        </div>

        {checkGlobalSearch && (
          // {getFilmsFilterArr.map(film)=>()}
          <div className={styles.GlobalSearchInput__filterMove}>
            <div className={styles.GlobalSearchInput__filterMove__content}>
              <div
                className={classNames(
                  styles.GlobalSearchInput__inputs,
                  styles.GlobalSearchInput__inputs_list
                )}
              >
                <p>Сортировка по</p>
                <input
                  name="sortFilms"
                  value={inputsGlobalValue.sortFilms}
                  onChange={inputFilterGlobalValue}
                  placeholder="Сортировка по:"
                  type="text"
                  list="list_one"
                />
                <datalist id="list_one">
                  <option value="RATING" />
                  <option value="NUM_VOTE" />
                  <option value="YEAR" />
                </datalist>
              </div>
              <div
                className={classNames(
                  styles.GlobalSearchInput__inputs,
                  styles.GlobalSearchInput__inputs_list
                )}
              >
                <p>Тип Фильма:</p>
                <input
                  name="tipeFilms"
                  value={inputsGlobalValue.tipeFilms}
                  onChange={inputFilterGlobalValue}
                  placeholder="Тип фильма:"
                  type="text"
                  list="list_two"
                />
                <datalist id="list_two">
                  <option value="ALL" />
                  <option value="FILM" />
                  <option value="TV_SHOW" />
                </datalist>
              </div>
              <div className={styles.GlobalSearchInput__inputs}>
                <p>минимальный рейтинг</p>
                <input
                  name="minRating"
                  value={inputsGlobalValue.minRating}
                  onChange={inputFilterGlobalValue}
                  minLength={0}
                  placeholder="0"
                  type="number"
                />
              </div>
              <div className={styles.GlobalSearchInput__inputs}>
                <p>максимальный рейтинг</p>
                <input
                  name="maxRating"
                  value={inputsGlobalValue.maxRating}
                  onChange={inputFilterGlobalValue}
                  maxLength={10}
                  placeholder="10"
                  type="number"
                />
              </div>
              <div className={styles.GlobalSearchInput__inputs}>
                <p>инимальный год</p>
                <input
                  value={inputsGlobalValue.minYear}
                  name="minYear"
                  onChange={inputFilterGlobalValue}
                  minLength={1000}
                  placeholder="1000"
                  type="number"
                />
              </div>
              <div className={styles.GlobalSearchInput__inputs}>
                <p>максимальный год</p>
                <input
                  value={inputsGlobalValue.maxYear}
                  name="maxYear"
                  onChange={inputFilterGlobalValue}
                  maxLength={3000}
                  placeholder="3000"
                  type="number"
                />
              </div>
              <div className={styles.GlobalSearchInput__inputs}>
                <p>ключевое слово в фильме </p>
                <input
                  name="keyword"
                  value={inputsGlobalValue.keyword}
                  onChange={inputFilterGlobalValue}
                  minLength={1}
                  placeholder="ключевое слово"
                  type="text"
                />
              </div>
            </div>
            <button
              className={styles.GlobalSearchInput__filterMove_button}
              onClick={getFilmsFilter}
            >
              Найти
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalSearchInput;
