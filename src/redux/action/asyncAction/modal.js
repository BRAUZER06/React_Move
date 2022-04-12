import { instance } from "../../../config/axios";
const ADD_FILM_SUCCESS = "ADD_FILM_SUCCESS";
const ADD_FILM_ERROR = "ADD_FILM_ERROR";
const ADD_FILM_LOADING = "ADD_FILM_LOADING";

export const fetchModalFilmInfo = () => {
  return (dispatch) => {};
};

export const fetchFilmInfo = (film) => {
  return {
    type: ADD_FILM_SUCCESS,
    payload: film,
  };
};

export const fetchFilmError = (error) => {
  return {
    type: ADD_FILM_ERROR,
    payload: error,
  };
};

export const fetchFilmLoading = (loading) => {
  return {
    type: ADD_FILM_LOADING,
    payload: loading,
  };
};
