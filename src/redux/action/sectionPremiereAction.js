import { instance } from "../../config/axios";

export const checkedFilmsPremiereAction = (checked) => {
  return {
    type: "CHECKED_FILMS_SECT_PREMIER",
    payload: checked,
  };
};

export const fetchFilmsPremiereAction = (numberPagination) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILMS_SECT_PREMIER_LOADING" });
      const response = await instance.get(
        `/films/top?type=TOP_250_BEST_FILMS&page=${numberPagination}`
      );
      console.log(numberPagination);
      dispatch({ type: "GET_FILMS_SECT_PREMIER_SUCCSES", payload: response.data.films });
    } catch (error) {
      dispatch({
        type: "GET_FILMS_SECT_PREMIER_ERROR",
        payload: "Не удалось получить фильмы",
      });
      console.log(error);
    }
  };
};
