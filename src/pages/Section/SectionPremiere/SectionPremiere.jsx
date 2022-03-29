import React from "react";
import styles from "./SectionPremiere.module.scss";
import { instance } from "../../config/axios";
import FilmCart from "../../Cart/FilmCart/FilmCart";
import Pagination from "@mui/material/Pagination";
import IsLoadingPagesAnimation from "../../IsLoadingPagesAnimation/IsLoadingPagesAnimation";
const SectionPremiere = () => {
  const [isLoaing, setIsLoading] = React.useState(false);
  const [fetch, setFetch] = React.useState([]);
  const [numberPagination, setNumberPagination]=React.useState(1)

  React.useEffect(() => {
    setIsLoading(true);
    const getFuc = async () => {
      const res = await instance
        .get(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${numberPagination}`
        )
        .then((respons) => setFetch(respons.data.films));
      setIsLoading(false);
    };
    getFuc();
  }, [numberPagination]);
  if (isLoaing) {
    return <IsLoadingPagesAnimation />;
  }
  return (
    <div className={styles.films}>
      <Pagination
        className={styles.films__pagination}
        count={10}
        variant="outlined"
        shape="rounded"
        color="secondary"
        hidePrevButton
        hideNextButton
      />
      <div className={styles.films_container}>
        {fetch.map((e) => (
          <FilmCart key={e.filmId} {...e} />
        ))}
      </div>
     
    </div>
  );
};

export default SectionPremiere;
