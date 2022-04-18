import React from "react";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionFilmsSearchInput.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  headerCheckedFilmsAction,
  fetchFilmsInputTextAction,
} from "../../../redux/action/headerAction";

const SectionFilmsSearchInput = ({ inputSearchValue, clickCartOpenModal }) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.header.films);
  const { checkedFilms, loading, error } = useSelector((state) => state.header);

  React.useEffect(() => {
    dispatch(fetchFilmsInputTextAction(inputSearchValue));
    return () => {
      dispatch(headerCheckedFilmsAction(false));
    };
  }, [checkedFilms]);

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

export default SectionFilmsSearchInput;
