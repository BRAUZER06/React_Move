import React from "react";
import styles from "./Section.module.scss";
import ModalWindow from "../Modal/ModalWindow";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import SectionProfile from "./SectionProfile/SectionProfile";

import { Route, Routes, useLocation } from "react-router-dom";

import {
  idFilmAction,
  checkedModalAction,
} from "../../redux/action/modalAction";
import SectionFilmsAndSeries from "./SectionFilmsAndSeries/SectionFilms";
import FilmsSearchInput from "./FilmsSearchInput/FilmsSearchInput";
import HomePages from "../HomePages/HomePages";

const Section = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [numberPagination, setNumberPagination] = React.useState(6);
  const inputSearchValue = useSelector((state) => state.header.inputValue);

  //манипуляции для получения индекса пагинации
  const onClickPaginateNumber = (e) => {
    setNumberPagination(Number(e.target.ariaLabel.slice(-1)));
  };

  const clickCartOpenModal = (id) => {
    dispatch(idFilmAction(id));
    dispatch(checkedModalAction(true));
  };

  console.log("рендер Section ");
  return (
    <div className={styles.Section}>
      <div className={styles.Section_Pagination}>
        {pathname !== "/" && (
          <Pagination onClickPaginateNumber={onClickPaginateNumber} />
        )}
      </div>
      <ModalWindow />

      <Routes>
        <Route path="/" element={<HomePages />} />

        <Route
          path="/FilmsAndSeries"
          element={
            <SectionFilmsAndSeries
              clickCartOpenModal={clickCartOpenModal}
              inputSearchValue={inputSearchValue}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/Trailer"
          element={
            <SectionFilmsAndSeries
              clickCartOpenModal={clickCartOpenModal}
              inputSearchValue={inputSearchValue}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/Premiere"
          element={
            <SectionFilmsAndSeries
              clickCartOpenModal={clickCartOpenModal}
              inputSearchValue={inputSearchValue}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/FilmsSearchInput"
          element={
            <FilmsSearchInput
              clickCartOpenModal={clickCartOpenModal}
              inputSearchValue={inputSearchValue}
              numberPagination={numberPagination}
            />
          }
        />
        {/* FilmsSearchFilter */}
        <Route
          path="/FilmsSearchFilter"
          element={
            <FilmsSearchInput
              clickCartOpenModal={clickCartOpenModal}
              inputSearchValue={inputSearchValue}
              numberPagination={numberPagination}
            />
          }
        />
        <Route path="/Profile" element={<SectionProfile />} />
      </Routes>
    </div>
  );
};

export default Section;
