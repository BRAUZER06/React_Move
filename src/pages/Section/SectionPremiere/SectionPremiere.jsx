import React from "react";
import styles from "./SectionPremiere.module.scss";
import { instance } from "../../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";

const SectionPremiere = ({
  numberPagination,
  inputSearchValue,
  clickCartOpenModal,
}) => {
  const [isLoaing, setIsLoading] = React.useState(false);
  const [fetchPremiere, setFetchPremiere] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const res = await instance
          .get(`/films/top?type=TOP_250_BEST_FILMS&page=${numberPagination}`)
          .then((respons) => setFetchPremiere(respons.data.films));
        setIsLoading(false);
      })();
    } catch (error) {
      alert("Ошибка при получении Кинопремьер");
      console.log(error);
    }
  }, [numberPagination]);

  if (isLoaing) {
    return <IsLoadingPagesAnimation />;
  }
  return (
    <div className={styles.films}>
      <div className={styles.films_container}>
        {fetchPremiere
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

export default SectionPremiere;