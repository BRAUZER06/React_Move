import { instanceV2_2 } from "../../config/axios";
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
export const addFilmsSuccsesAction = (arr) => {
  return {
    type: GET_FILMS_SUCCSES,
    payload: arr,
  };
};
export const checkedFilmsErrorAction = (error) => {
  return {
    type: GET_FILMS_ERROR,
    payload: error,
  };
};

//Думал над тем чтобы скоратить этот код, с одной стороны удобство, а с другой оптимизация)

//ЗАПРОСЫ ОДИНАКОВЫЕ ИЗ-ЗА ТОГО ЧТО В БУДУЩЕМ БУДУ МЕНЯТЬ ТИПЫ ЗАПРАШИВАЕМЫХ ДАННЫХ
//Запрос который просто получает фильмы
export const fetchFilmsAction = (numberPagination) => {
  return async (dispatch) => {
    try {
      dispatch(checkedFilmsLoadingAction());
      await instanceV2_2
        .get(`/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`)
        .then((res) => dispatch(addFilmsSuccsesAction(res.data.films)));
    } catch (error) {
      dispatch(checkedFilmsErrorAction("Ошибка при получении данных"));
      console.log(error);
    }
  };
};

//Запрос который получает фильмы для "Кино и Сериалы / FilmsAndSeries"
export const fetchFilmsAndSeriesAction = (numberPagination) => {
  return async (dispatch) => {
    try {
      dispatch(checkedFilmsLoadingAction());
      await instanceV2_2
        .get(`/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`)
        .then((res) => dispatch(addFilmsSuccsesAction(res.data.films)));
    } catch (error) {
      dispatch(checkedFilmsErrorAction("Ошибка при получении данных"));
      console.log(error);
    }
  };
};

//Запрос который получает фильмы для "Трейлер / Trailer"
export const fetchTrailerAction = (numberPagination) => {
  return async (dispatch) => {
    try {
      dispatch(checkedFilmsLoadingAction());
      await instanceV2_2
        .get(`/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`)
        .then((res) => dispatch(addFilmsSuccsesAction(res.data.films)));
    } catch (error) {
      dispatch(checkedFilmsErrorAction("Ошибка при получении данных"));
      console.log(error);
    }
  };
};

//Запрос который получает фильмы для "Кинопремьеры / Premiere"
export const fetchPremiereAction = (numberPagination) => {
  return async (dispatch) => {
    try {
      dispatch(checkedFilmsLoadingAction());
      await instanceV2_2
        .get(`/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`)
        .then((res) => dispatch(addFilmsSuccsesAction(res.data.films)));
    } catch (error) {
      dispatch(checkedFilmsErrorAction("Ошибка при получении данных"));
      console.log(error);
    }
  };
};
