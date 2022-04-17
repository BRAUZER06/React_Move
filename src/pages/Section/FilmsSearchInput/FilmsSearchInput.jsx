import React from "react";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./FilmsSearchInput.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useDispatch, useSelector } from "react-redux";
import {
  checkedFilmsAction,
  fetchFilmsAction,
} from "../../../redux/action/sectionFilmsAction";
import { headerCheckedFilmsAction } from "../../../redux/action/headerAction";

const FilmsSearchInput = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.header.films);
  const { checkedFilms, loading, error } = useSelector((state) => state.header);

  React.useEffect(() => {
    dispatch(fetchFilmsAction(inputSearchValue));
    return () => {
      dispatch(headerCheckedFilmsAction(false));
    };
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

export default FilmsSearchInput;
