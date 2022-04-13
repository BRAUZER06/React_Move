import React from "react";
import { useSelector } from "react-redux";
import { instance } from "../../../config/axios";
import styles from "./SectionTrailer.module.scss";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";

const SectionTrailer = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const [isLoaing, setIsLoading] = React.useState(false);
  const [fetchTrailer, setFetchTrailer] = React.useState([]);
  const { checked: inputHeaderChecked, films: filmsHeaderInput } = useSelector(
    (state) => state.header
  );

  React.useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        await instance
          .get(`/films/top?type=TOP_250_BEST_FILMS&page=${numberPagination}`)
          .then((respons) => setFetchTrailer(respons.data.films));
        setIsLoading(false);
      })();
    } catch (error) {
      alert("Ошибка при получении Трейлеров");
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
            {fetchTrailer
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

export default React.memo(SectionTrailer);
