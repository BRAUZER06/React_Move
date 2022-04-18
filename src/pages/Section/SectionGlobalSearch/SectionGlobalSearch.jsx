import React from "react";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionGlobalSearch.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchGlobalFilmsAction } from "../../../redux/action/globalSearchFilterAction";

const SectionGlobalSearch = ({ clickCartOpenModal, numberPagination }) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.globalFilms.films);
  const { loading, error, params } = useSelector((state) => state.globalFilms);

  React.useEffect(() => {
    dispatch(fetchGlobalFilmsAction(params, numberPagination));
  }, [numberPagination, params]);

  if (loading) {
    return <IsLoadingPagesAnimation />;
  }
  if (!films.length) {
    return <h1>Поиск не дал результатов</h1>;
  }

  return (
    <div className={styles.films}>
      <div className={styles.films_container}>
        {films.map((e) => (
          <div
            key={e.kinopoiskId}
            onClick={() => clickCartOpenModal(e.kinopoiskId)}
          >
            <FilmCart {...e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionGlobalSearch;
