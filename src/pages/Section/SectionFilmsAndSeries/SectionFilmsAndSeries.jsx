import React from "react";
import styles from "./SectionFilmsAndSeries.module.scss";
import { instance } from "../../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";

// Добавить модальное окно
const SectionFilmsAndSeries = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const [isLoaing, setIsLoading] = React.useState(false);
  const [fetchFilmAndSeries, setFetchFilmAndSeries] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const res = await instance
          .get(`/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`)
          .then((respons) => setFetchFilmAndSeries(respons.data.films));
        setIsLoading(false);
      })();
    } catch (error) {
      alert("Ошибка при получении Фильмов");
      console.log(error);
    }
  }, [numberPagination]);
  if (isLoaing) {
    return <IsLoadingPagesAnimation />;
  }
  return (
    <div className={styles.films}>
      {/* Сделать модалку */}
      {/* <ModalWindow/> */}
      <div className={styles.films_container}>
        {fetchFilmAndSeries
          .filter((item) =>
            item.nameRu.toLowerCase().includes(inputSearchValue.toLowerCase())
          )
          .map((e) => (
            <div
              className={styles.films_containerDiv}
              key={e.filmId}
              onClick={() => clickCartOpenModal(e.filmId)}
            >
              <FilmCart {...e} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionFilmsAndSeries;
