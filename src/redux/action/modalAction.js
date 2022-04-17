import { instance } from "../../config/axios";
import {
  ID_FILM,
  CHECKED_MODAL,
  GET_FILMS_MODAL_ERROR,
  GET_FILMS_MODAL_SUCCSES,
  GET_FILMS_MODAL_LOADING,
} from "../actionTypes";

export const idFilmAction = (idFilm) => {
  return {
    type: ID_FILM,
    payload: idFilm,
  };
};

export const checkedModalAction = (checked) => {
  return {
    type: CHECKED_MODAL,
    payload: checked,
  };
};

export const fetchErrorModalAction = (error) => {
  return {
    type: GET_FILMS_MODAL_ERROR,
    payload: error,
  };
};
export const fetchLoadinModalAction = (loading) => {
  return {
    type: GET_FILMS_MODAL_LOADING,
  };
};
export const fetchSuccsesModalAction = (arr) => {
  return {
    type: GET_FILMS_MODAL_SUCCSES,
    payload: arr,
  };
};

export const fetchFilmAction = (idFilm) => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoadinModalAction());
      await instance
        .get(`/v2.2/films/${idFilm}`)
        .then((res) => dispatch(fetchSuccsesModalAction(res.data)));
    } catch (error) {
      dispatch(fetchErrorModalAction("Ошибка при получении данных "));
      console.log(error);
    }
  };
};
