import React from "react";
import { instance } from "../../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import styles from "./SectionFilmsAndSeries.module.scss";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
import { useSelector } from "react-redux";

const SectionFilmsAndSeries = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const [isLoaing, setIsLoading] = React.useState(false);
  const [fetchFilmAndSeries, setFetchFilmAndSeries] = React.useState([]);
  const { checked: inputHeaderChecked, films: filmsHeaderInput } = useSelector(
    (state) => state.header
  );

  React.useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        await instance
          .get(`/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`)
          .then((respons) => setFetchFilmAndSeries(respons.data.films));
        setIsLoading(false);
      })();
    } catch (error) {
      alert("Ошибка при получении Фильмов");
      console.log(error);
    }
  }, [numberPagination, inputHeaderChecked]);

  if (isLoaing) {
    return <IsLoadingPagesAnimation />;
  }
 
  //Я АЖ СЛЕЗУ ПОУСТИЛ ОТ ЭТОГО КОДА
  return (
    <div className={styles.films}>
      <div className={styles.films_container}>
        {inputHeaderChecked ? (
          filmsHeaderInput.map((e) => (
            <div key={e.filmId} onClick={() => clickCartOpenModal(e.filmId)}>
              <FilmCart {...e} />
            </div>
          ))
        ) : (
          <>
            {fetchFilmAndSeries
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
