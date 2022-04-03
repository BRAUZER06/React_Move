import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { globalSearchReducer } from "../reducer/globalSearchFilterReducer";
export const rootReducer = combineReducers({
  header: headerReducer,
  globalSearch: globalSearchReducer,
});
