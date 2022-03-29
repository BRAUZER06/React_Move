import React from "react";
import styles from "./Section.module.scss";
import { Route, Routes } from "react-router-dom";
import SectionFilmsAndSeries from "./SectionFilmsAndSeries/SectionFilmsAndSeries";
import SectionPremiere from "./SectionPremiere/SectionPremiere";
import SectionProfile from "./SectionProfile/SectionProfile";
import SectionTrailer from "./SectionTrailer/SectionTrailer";

const Section = () => {
 
  return (
    <div className={styles.Section}>
      <Routes>
        <Route path="/Home" element={<SectionFilmsAndSeries  />} />
        <Route path="/FilmsAndSeries" element={<SectionFilmsAndSeries />} />
        <Route path="/Trailer" element={<SectionTrailer />} />
        <Route path="/Premiere" element={ <SectionPremiere />} />
        <Route path="/Profile" element={<SectionProfile /> }/>
      </Routes>
    </div>
  );
};

export default Section;
