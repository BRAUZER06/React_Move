import { instance } from "../../config/axios";

export const checkedFilmsAction = (checked) => {
  return {
    type: "CHECKED_FILMS",
    payload: checked,
  };
};

export const fetchFilmsAction = (numberPagination) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILMS_LOADING" });
      const response = await instance.get(
        `/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`
      );
      dispatch({ type: "GET_FILMS_SUCCSES", payload: response.data.films });
    } catch (error) {
      dispatch({
        type: "GET_FILMS_ERROR",
        payload: "Не удалось получить фильмы",
      });
      console.log(error);
    }
  };
};
