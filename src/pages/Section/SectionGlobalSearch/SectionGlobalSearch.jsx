import React from "react";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionGlobalSearch.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useSelector } from "react-redux";

const SectionGlobalSearch = ({ clickCartOpenModal }) => {
  const films = useSelector((state) => state.globalFilms.films);
  const { checkedFilms, loading, error } = useSelector(
    (state) => state.globalFilms
  );
  if (loading) {
    return <IsLoadingPagesAnimation />;
  }

  if (!films.length) {
    return <h1>Поиск не дал результатов</h1>;
  }
  console.log(films[1]);
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
