import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { globalSearchReducer } from "./globalSearchFilterReducer";
import { modalReducer } from "./modalReducer";
export const rootReducer = combineReducers({
  header: headerReducer,
  globalSearch: globalSearchReducer,
  modal: modalReducer,
});
