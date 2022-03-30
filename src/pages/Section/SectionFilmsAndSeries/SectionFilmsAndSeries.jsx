import React from "react";
import styles from "./SectionFilmsAndSeries.module.scss";
import { instance } from "../../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";

import ModalWindow from '../../Modal/ModalWindow'

const SectionFilmsAndSeries = ({numberPagination}) => {
  const [isLoaing, setIsLoading] = React.useState(false);
  const [fetchFilmAndSeries, setFetchFilmAndSeries] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      ( async () => {
        const res = await instance
          .get(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`
          )
          .then((respons) => setFetchFilmAndSeries(respons.data.films));
        setIsLoading(false);
      })();
    } catch (error) {
      alert('Ошибка при получении Фильмов')
      console.log(error);
    }
    
    
  }, [numberPagination]);
  if (isLoaing) {
    return <IsLoadingPagesAnimation />;
  }
  return (
    <div className={styles.films}>
    
      {/* <ModalWindow/> */}
      <div className={styles.films_container}>
        {fetchFilmAndSeries.map((e) => (
          <FilmCart key={e.filmId} {...e} />
        ))}
      </div>
    </div>
  );
};

export default SectionFilmsAndSeries;
