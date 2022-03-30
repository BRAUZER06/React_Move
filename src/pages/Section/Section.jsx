import React from "react";
import styles from "./Section.module.scss";
import { Route, Routes } from "react-router-dom";
import SectionFilmsAndSeries from "./SectionFilmsAndSeries/SectionFilmsAndSeries";
import SectionPremiere from "./SectionPremiere/SectionPremiere";
import SectionProfile from "./SectionProfile/SectionProfile";
import SectionTrailer from "./SectionTrailer/SectionTrailer";
import Pagination from "../Pagination/Pagination";

const Section = () => {
  const [numberPagination, setNumberPagination] = React.useState(6);
  const onClickPaginateNumber = (e) => {
    setNumberPagination(Number(e.target.ariaLabel.slice(-1)));
  };
  return (
    <div className={styles.Section}>
      <div className={styles.Section_Pagination}>
        {/* Только после перезагрузки срабатывает ( убирают пагинацию когда ты в профиле) */}
        {window.location.pathname !== "/Profile" && (
          <Pagination
            numberPagination={numberPagination}
            onClickPaginateNumber={onClickPaginateNumber}
          />
        )}
      </div>

      <Routes>
        <Route
          path="/Home"
          element={
            <SectionFilmsAndSeries
              onClickPaginateNumber={onClickPaginateNumber}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/FilmsAndSeries"
          element={
            <SectionFilmsAndSeries
              onClickPaginateNumber={onClickPaginateNumber}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/Trailer"
          element={
            <SectionTrailer
              onClickPaginateNumber={onClickPaginateNumber}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/Premiere"
          element={
            <SectionPremiere
              onClickPaginateNumber={onClickPaginateNumber}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/Profile"
          element={
            <SectionProfile
              onClickPaginateNumber={onClickPaginateNumber}
              numberPagination={numberPagination}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Section;
