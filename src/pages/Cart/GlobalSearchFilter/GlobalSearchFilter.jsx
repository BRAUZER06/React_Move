import React from "react";
import styles from "./GlobalSearchFilter.module.scss";
import { FaGlobeAmericas } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../../config/axios";
import classNames from "classname";
import { globalSeracFilms } from "../../../redux/action/globalSearchFilterAction";

const GlobalSearchFilter = () => {
  const dispatch = useDispatch();

  const [params, serParams] = React.useState({
    sortFilms: "",
    tipeFilms: "",
    minRating: "",
    maxRating: "",
    minYear: "",
    maxYear: "",
    keyword: "",
  });

  const [checkGlobalSearch, setCheckGlobalSearch] = React.useState(false);

  const getFilmsFilter = () => {
    try {
      (async () => {
        const res = await instance
          .get(
            `/films?${
              params.sortFilms.length && `order=${params.sortFilms}`
            }${params.tipeFilms.length && `&type=${params.tipeFilms}`}${
              params.minRating.length && `&ratingFrom=${params.minRating}`
            }${params.maxRating.length && `&ratingTo=${params.maxRating}`}${
              params.minYear.length && `&yearFrom=${params.minYear}`
            }${params.maxYear.length && `&yearTo=${params.maxYear}`}${
              params.keyword.length && `&keyword=${params.keyword}`
            }&page=1`
          )
          .then((respons) => dispatch(globalSeracFilms(respons.data.items)));
      })();
    } catch (error) {
      alert("Фильтр не работает");
      console.log(error);
    }
  };

  const onClickGlobalSearch = () => {
    setCheckGlobalSearch((checkGlobalSearch) => !checkGlobalSearch);
  };

  const inputFilterGlobalValue = (e) => {
    const { value, name } = e.target;
    serParams({ ...params, [name]: value });
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
                  value={params.sortFilms}
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
                  value={params.tipeFilms}
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
                  value={params.minRating}
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
                  value={params.maxRating}
                  onChange={inputFilterGlobalValue}
                  maxLength={10}
                  placeholder="10"
                  type="number"
                />
              </div>
              <div className={styles.GlobalSearchInput__inputs}>
                <p>инимальный год</p>
                <input
                  value={params.minYear}
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
                  value={params.maxYear}
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
                  value={params.keyword}
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

export default GlobalSearchFilter;
