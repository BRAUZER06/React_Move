import { instanceV2_2 } from "../../config/axios";
import {
  CHECK_MENU_GLOBAL,
  CHECK_FILMS_GLOBAL,
  GET_FILMS_GLOBAL_ERROR,
  GET_FILMS_GLOBAL_LOADING,
  GET_FILMS_GLOBAL_SUCCSES,
} from "../actionTypes";

export const globalCheckedFilmsAction = (checked) => {
  return { type: CHECK_FILMS_GLOBAL, payload: checked };
};
export const globalCheckedMenuAction = (checked) => {
  return { type: CHECK_MENU_GLOBAL, payload: checked };
};

export const fetchGlobalMenuLoadingAction = (loading) => {
  return { type: GET_FILMS_GLOBAL_LOADING };
};

export const fetchGlobalMenuErrorAction = (error) => {
  return { type: GET_FILMS_GLOBAL_ERROR, payload: error };
};

export const fetchGlobalMenuSuccsesAction = (arr) => {
  return { type: GET_FILMS_GLOBAL_SUCCSES, payload: arr };
};

export const fetchGlobalFilmsAction = (text) => {
  return async (dispatch) => {
    try {
      //Исправить/найти альтернативу
      dispatch(fetchGlobalMenuLoadingAction());
      const response = await instanceV2_2.get(
        `/films?${text.sort.length && `order=${text.sort}`}${
          text.tipe.length && `&type=${text.tipe}`
        }${text.minRating.length && `&ratingFrom=${text.minRating}`}${
          text.maxRating.length && `&ratingTo=${text.maxRating}`
        }${text.minYear.length && `&yearFrom=${text.minYear}`}${
          text.maxYear.length && `&yearTo=${text.maxYear}`
        }${text.keyword.length && `&keyword=${text.keyword}`}&page=1`
      );
      dispatch(fetchGlobalMenuSuccsesAction(response.data.items));
      globalCheckedFilmsAction(true);
    } catch (error) {
      dispatch(fetchGlobalMenuErrorAction("Ошибка при получении данных"));
      console.log(error);
    }
  };
};
