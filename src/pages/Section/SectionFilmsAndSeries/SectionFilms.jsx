import React from "react";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionFilms.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrailerAction,
  fetchPremiereAction,
  fetchFilmsAndSeriesAction,
} from "../../../redux/action/sectionFilmsAction";
import { useLocation } from "react-router-dom";

//при переходе на другую вкладку удалять старый массив с фильмами ( чтобы работала подгрузка и не засорял кеш)
const SectionFilmsAndSeries = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const films = useSelector((state) => state.sectionFilms.films);
  const { checkedFilms, error, loading } = useSelector(
    (state) => state.sectionFilms
  );




  React.useEffect(() => {
    console.log('рендер');
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

  return (
    <div className={styles.films}>
      <div className={styles.films_container}>
        {checkedFilms ? (
          films.map((e) => (
            <div key={e.filmId} onClick={() => clickCartOpenModal(e.filmId)}>
              <FilmCart {...e} />
            </div>
          ))
        ) : (
          <>
            {films
              .filter((item) =>
                item.nameRu
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

export default SectionFilmsAndSeries;
