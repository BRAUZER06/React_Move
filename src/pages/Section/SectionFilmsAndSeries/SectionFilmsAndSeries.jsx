import React from "react";
import styles from "./SectionFilmsAndSeries.module.scss";
import { instance } from "../../config/axios";
import FilmCart from '../../Cart/FilmCart/FilmCart'

const SectionFilmsAndSeries = () => {
  const [fetch, setFetch] = React.useState([]);

  React.useEffect(() => {
    const res = instance
      .get(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=2"
      )
      .then((respons) => setFetch(respons.data.films))
      
  }, []);
console.log(fetch);
  return (
    <div className={styles.films_container}>
      {fetch.map((e)=>(<FilmCart key={e.filmId} {...e} />))}
      
    </div>
  );
};

export default SectionFilmsAndSeries;
