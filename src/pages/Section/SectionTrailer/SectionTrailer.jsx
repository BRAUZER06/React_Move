import React from "react";
import styles from "./SectionTrailer.module.scss";
import { instance } from "../../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";

import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";

const SectionTrailer = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const [isLoaing, setIsLoading] = React.useState(false);
  const [fetchTrailer, setFetchTrailer] = React.useState([]);
  React.useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const res = await instance
          .get(`/films/top?type=TOP_250_BEST_FILMS&page=${numberPagination}`)
          .then((respons) => setFetchTrailer(respons.data.films));
        setIsLoading(false);
      })();
    } catch (error) {
      alert("Ошибка при получении Трейлеров");
      console.log(error);
    }
  }, [numberPagination]);

  if (isLoaing) {
    return <IsLoadingPagesAnimation />;
  }

  return (
    <div className={styles.films}>
      <div className={styles.films_container}>
        {fetchTrailer
          .filter((item) =>
            item.nameRu.toLowerCase().includes(inputSearchValue.toLowerCase())
          )
          .map((e) => (
            <div key={e.filmId} onClick={() => clickCartOpenModal(e.filmId)}>
              <FilmCart {...e} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(SectionTrailer);