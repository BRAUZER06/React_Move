import React from "react";
import classNames from "classname";
import { useDispatch, useSelector } from "react-redux";
import { FaGlobeAmericas } from "react-icons/fa";
import styles from "./GlobalSearchFilter.module.scss";
import {
  globalMenuAddTextAction,
  globalCheckedMenuAction,
} from "../../../redux/action/globalSearchFilterAction";
import { useNavigate } from "react-router-dom";

const GlobalSearchFilter = () => {
  const navigate = useNavigate();
  const { checkedMenu } = useSelector((state) => state.globalFilms);
  const dispatch = useDispatch();
  const [params, serParams] = React.useState({
    sort: "",
    tipe: "",
    minRating: "",
    maxRating: "",
    minYear: "",
    maxYear: "",
    keyword: "",
  });

  const onClickFetchFilms = () => {
    //это нужно для получения стейта в редюс  и для дальнейшего поиска фильмов при рендере компонента
    dispatch(globalMenuAddTextAction(params));

    navigate("/SectionGlobalSearch");
  };

  const checkedToggleGlobalSearch = () => {
    dispatch(globalCheckedMenuAction(!checkedMenu));
  };

  const inputsGlobalSearchValue = (e) => {
    const { value, name } = e.target;
    serParams({ ...params, [name]: value });
  };

  return (
    <div>
      <div className={styles.GlobalSearchInput}>
        <div
          className={classNames(
            styles.GlobalSearchInput__icon,
            checkedMenu && styles.GlobalSearchInput__icon_active
          )}
        >
          <FaGlobeAmericas onClick={checkedToggleGlobalSearch} />
        </div>

        {checkedMenu && (
          <div className={styles.GlobalSearchInput__filterMove}>
            <div className={styles.GlobalSearchInput__filterMove__content}>
              <div
                className={classNames(
                  styles.GlobalSearchInput__inputs,
                  styles.GlobalSearchInput__inputs_list
                )}
              >
                <p>Сортировка по: (багуется)</p>
                <input
                  name="sort"
                  value={params.sort}
                  onChange={inputsGlobalSearchValue}
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
                <p>Тип Фильма: (багуется)</p>
                <input
                  name="tipe"
                  value={params.tipe}
                  onChange={inputsGlobalSearchValue}
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
                  onChange={inputsGlobalSearchValue}
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
                  onChange={inputsGlobalSearchValue}
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
                  onChange={inputsGlobalSearchValue}
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
                  onChange={inputsGlobalSearchValue}
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
                  onChange={inputsGlobalSearchValue}
                  minLength={1}
                  placeholder="ключевое слово"
                  type="text"
                />
              </div>
            </div>
            <button
              className={styles.GlobalSearchInput__filterMove_button}
              onClick={onClickFetchFilms}
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
