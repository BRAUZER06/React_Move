import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { headerReducer } from "./headerReducer";
import { globalSearcFilmshReducer } from "./globalSearchFilterReducer";
import { sectionFilmsReducer } from "./sectionFilmsReducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  globalFilms: globalSearcFilmshReducer,
  modal: modalReducer,
  filmsAndSeries: sectionFilmsReducer,

});
