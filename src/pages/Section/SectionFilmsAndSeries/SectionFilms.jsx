import React from "react";
import { instance } from "../../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionFilms.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  checkedFilmsAction,
  fetchFilmsAction,
} from "../../../redux/action/sectionFilmsAction";

//при переходе на другую вкладку удалять старый массив с фильмами ( чтобы работала подгрузка и не засорял кеш)
const SectionFilmsAndSeries = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.sectionFilms.films);
  const { checkedFilms, error, loading } = useSelector(
    (state) => state.sectionFilms
  );
    console.log(films);
    console.log({checkedFilms, error, loading});
  React.useEffect(() => {
    dispatch(fetchFilmsAction(numberPagination));

    return console.log("демонтажж");
  }, [numberPagination, checkedFilms]);

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
