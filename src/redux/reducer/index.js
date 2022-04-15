import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { globalSearcFilmshReducer } from "./globalSearchFilterReducer";
import { modalReducer } from "./modalReducer";
export const rootReducer = combineReducers({
  header: headerReducer,
  globalSearchFilms: globalSearcFilmshReducer,
  modal: modalReducer,
});
