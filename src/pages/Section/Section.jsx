import React from "react";
import styles from "./Section.module.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import SectionFilmsAndSeries from "./SectionFilmsAndSeries/SectionFilmsAndSeries";
import SectionPremiere from "./SectionPremiere/SectionPremiere";
import SectionProfile from "./SectionProfile/SectionProfile";
import SectionTrailer from "./SectionTrailer/SectionTrailer";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";

const Section = () => {
  const { pathname } = useLocation();

  const [numberPagination, setNumberPagination] = React.useState(6);
  const onClickPaginateNumber = (e) => {
    setNumberPagination(Number(e.target.ariaLabel.slice(-1)));
  };

  const inputSearchValue = useSelector((state) => state.header.inputValue);
  return (
    <div className={styles.Section}>
      <div className={styles.Section_Pagination}>
        {/* Только после перезагрузки срабатывает ( убирают пагинацию когда ты в профиле) */}
        {pathname !== "/Profile" && (
          <Pagination
            numberPagination={numberPagination}
            onClickPaginateNumber={onClickPaginateNumber}
          />
        )}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <SectionFilmsAndSeries
              inputSearchValue={inputSearchValue}
              onClickPaginateNumber={onClickPaginateNumber}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/FilmsAndSeries"
          element={
            <SectionFilmsAndSeries
              inputSearchValue={inputSearchValue}
              onClickPaginateNumber={onClickPaginateNumber}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/Trailer"
          element={
            <SectionTrailer
              inputSearchValue={inputSearchValue}
              onClickPaginateNumber={onClickPaginateNumber}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/Premiere"
          element={
            <SectionPremiere
              inputSearchValue={inputSearchValue}
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
