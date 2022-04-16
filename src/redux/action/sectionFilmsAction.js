import { instance } from "../../config/axios";
import {
  CHECKED_FILMS,
  GET_FILMS_ERROR,
  GET_FILMS_SUCCSES,
  GET_FILMS_LOADING,
} from "../actionTypes";

export const checkedFilmsAction = (checked) => {
  return {
    type: CHECKED_FILMS,
    payload: checked,
  };
};

export const checkedFilmsLoadingAction = (loading) => {
  return {
    type: GET_FILMS_LOADING,
  };
};
export const checkedFilmsSuccsesAction = (inputValue) => {
  return {
    type: GET_FILMS_SUCCSES,
    payload: inputValue,
  };
};
export const checkedFilmsErrorAction = (error) => {
  return {
    type: GET_FILMS_ERROR,
    payload: error,
  };
};

export const fetchFilmsAction = (numberPagination) => {
  return async (dispatch) => {
    try {
      dispatch(checkedFilmsLoadingAction());
       await instance
        .get(`/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`)
        .then((res) => dispatch(checkedFilmsSuccsesAction(res.data.films)));
    } catch (error) {
      dispatch(checkedFilmsErrorAction("Ошибка при получении данных"));
      console.log(error);
    }
  };
};
