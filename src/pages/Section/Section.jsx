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
        <Route path="/" element={<SectionFilmsAndSeries />} />
        <Route path="/SectionPremiere" element={<SectionPremiere />} />
        <Route path="/SectionProfile" element={<SectionProfile />} />
        <Route path="/SectionTrailer" element={<SectionTrailer />} />
      </Routes>
    </div>
  );
};

export default Section;
