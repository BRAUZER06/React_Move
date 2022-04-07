import React from "react";
import styles from "./SectionPremiere.module.scss";
import { instance } from "../../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";

const SectionPremiere = ({
  numberPagination,
  onClickPaginateNumber,
  inputSearchValue,
  idCartForModal
}) => {
  const [isLoaing, setIsLoading] = React.useState(false);
  const [fetchPremiere, setFetchPremiere] = React.useState([]);
  console.log('SectionPremiere');

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
            <FilmCart  key={e.filmId} {...e} />
          ))}
      </div>
    </div>
  );
};

export default SectionPremiere;
