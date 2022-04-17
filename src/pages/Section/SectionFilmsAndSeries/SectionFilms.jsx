import React from "react";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionFilms.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  checkedFilmsAction,
  fetchFilmsAction,
} from "../../../redux/action/sectionFilmsAction";
import { useLocation } from "react-router-dom";
import {
  instance_FilmsAndSeries,
  instance_Trailer,
  instance_Premiere,
} from "../../../config/axios";

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
    //Сравнивание ссылки url и прокидывания номер пагинации и url в Аction
    if (pathname === "/FilmsAndSeries") {
      dispatch(fetchFilmsAction(numberPagination, instance_FilmsAndSeries));
    } else if (pathname === "/Trailer") {
      dispatch(fetchFilmsAction(numberPagination, instance_Trailer));
    } else if (pathname === "/Premiere") {
      dispatch(fetchFilmsAction(numberPagination, instance_Premiere));
    }

    return console.log("демонтажж");
  }, [numberPagination, checkedFilms, pathname]);

  //оптимизировать
  // if (error) {
  //   alert(error);
  // }
  if (loading) {
    return <IsLoadingPagesAnimation />;
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
