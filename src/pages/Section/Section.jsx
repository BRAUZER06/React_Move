import React from "react";
import styles from "./Section.module.scss";
import ModalWindow from "../Modal/ModalWindow";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import SectionProfile from "./SectionProfile/SectionProfile";
import SectionTrailer from "./SectionTrailer/SectionTrailer";
import { Route, Routes, useLocation } from "react-router-dom";
import SectionPremiere from "./SectionPremiere/SectionPremiere";
import {idFilmAction, checkedModalAction } from "../../redux/action/modalAction";
import SectionFilmsAndSeries from "./SectionFilmsAndSeries/SectionFilmsAndSeries";


const Section = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  
  const [numberPagination, setNumberPagination] = React.useState(6);
  const onClickPaginateNumber = (e) => {
    //манипуляции для получения индекса пагинации 
    setNumberPagination(Number(e.target.ariaLabel.slice(-1)));
  };
  const clickCartOpenModal = (id) => {
    dispatch(idFilmAction (id));
    dispatch(checkedModalAction(true));
  };

  const inputSearchValue = useSelector((state) => state.header.inputValue);
  return (
    <div className={styles.Section}>
      <div className={styles.Section_Pagination}>
        {pathname !== "/Profile" && (
          <Pagination onClickPaginateNumber={onClickPaginateNumber} />
        )}
      </div>
      <ModalWindow />

      <Routes>
        <Route
          path="/"
          element={
            <SectionFilmsAndSeries
              clickCartOpenModal={clickCartOpenModal}
              inputSearchValue={inputSearchValue}
              numberPagination={numberPagination}
            />
          }
        />
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
            <SectionTrailer
              clickCartOpenModal={clickCartOpenModal}
              inputSearchValue={inputSearchValue}
              numberPagination={numberPagination}
            />
          }
        />
        <Route
          path="/Premiere"
          element={
            <SectionPremiere
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
