import React from "react";
import { instance } from "../../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionFilmsAndSeries.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  checkedFilmsPremiereAction,
  fetchFilmsPremiereAction,
} from "../../../redux/action/sectionPremiereAction";

//при переходе на другую вкладку удалять старый массив с фильмами ( чтобы работала подгрузка и не засорял кеш)
const SectionPremiere = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.premiere.films);
  const { checkedFilms, error, loading } = useSelector(
    (state) => state.premiere
  );

  React.useEffect(() => {
    dispatch(fetchFilmsPremiereAction(numberPagination));
  }, [numberPagination, checkedFilms]);

  if (loading) {
    return <IsLoadingPagesAnimation />;
  }

  //Я АЖ СЛЕЗУ ПОУСТИЛ ОТ ЭТОГО КОДА
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

export default SectionPremiere;
