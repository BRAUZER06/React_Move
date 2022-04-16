import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { globalSearcFilmshReducer } from "./globalSearchFilterReducer";
import { modalReducer } from "./modalReducer";
import { sectionFilmsAndSeriesReducer } from "./sectionFilmsAndSeriesReducer";
export const rootReducer = combineReducers({
  header: headerReducer,
  globalFilms: globalSearcFilmshReducer,
  modal: modalReducer,
  filmsAndSeries: sectionFilmsAndSeriesReducer,
});
