import {
  CHECKED_FILMS,
  GET_FILMS_ERROR,
  GET_FILMS_SUCCSES,
  GET_FILMS_LOADING,
} from "../actionTypes";
import {
  instance_FilmsAndSeries,
  instance_Trailer,
  instance_Premiere,
} from "../../config/axios";

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

//Запрос который получает фильмы в зависимости от url и paginarion
export const fetchFilmsAction = (numberPagination, instance) => {
  return async (dispatch) => {
    try {
      dispatch(checkedFilmsLoadingAction());
      await instance
        .get(`page=${numberPagination}`)
        .then((res) => dispatch(addFilmsSuccsesAction(res.data.films)));
    } catch (error) {
      dispatch(checkedFilmsErrorAction("Ошибка при получении данных"));
      console.log(error);
    }
  };
};
