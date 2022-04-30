import React from "react";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionFilms.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrailerAction,
  fetchPremiereAction,
  fetchFilmsAndSeriesAction,
  fetchSearchInputAction,
} from "../../../redux/action/sectionFilmsAction";
import { useLocation } from "react-router-dom";

const SectionFilms = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const films = useSelector((state) => state.sectionFilms.films);
  const { checkedFilms, error, loading } = useSelector(
    (state) => state.sectionFilms
  );
  const inputValue = useSelector((state) => state.header.inputValue);
  const inputValueCheckedFilms = useSelector(
    (state) => state.header.checkedFilms
  );

  React.useEffect(() => {
    console.log("рендер");
    if (pathname === "/FilmsAndSeries") {
      dispatch(fetchFilmsAndSeriesAction(numberPagination));
    } else if (pathname === "/Trailer") {
      dispatch(fetchTrailerAction(numberPagination));
    } else if (pathname === "/Premiere") {
      dispatch(fetchPremiereAction(numberPagination));
    } 

    return console.log("демонтажж");
  }, [numberPagination, checkedFilms, pathname]);

  if (loading) {
    return <IsLoadingPagesAnimation />;
  }
  if (!films.length) {
    return <h1>Поиск не дал результатов</h1>;
  }
  if (error) {
    return <h1>Фильмы отсутсвуют</h1>;
  }

  //вот это пожалуй я переделаю
  return (
    <div className={styles.films}>
      <div className={styles.films_container}>
        {inputValueCheckedFilms ? (
          films.map((e) => (
            <div key={e.filmId} onClick={() => clickCartOpenModal(e.filmId)}>
              <FilmCart {...e} />
            </div>
          ))
        ) : checkedFilms ? (
          films.map((e) => (
            <div key={e.filmId} onClick={() => clickCartOpenModal(e.filmId)}>
              <FilmCart {...e} />
            </div>
          ))
        ) : (
          <>
            {films
              .filter(
                (item) =>
                  item.nameRu && item.nameRu
                    .toLowerCase()
                    .includes(inputSearchValue.toLowerCase())
              )
              .map((e) => (
                <div
                  key={e.filmId}
                  onClick={() => clickCartOpenModal(e.filmId)}
                >
                  <FilmCart {...e} />
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SectionFilms;
