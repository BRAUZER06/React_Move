import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
export const rootReducer = combineReducers({
  header: headerReducer,
});
