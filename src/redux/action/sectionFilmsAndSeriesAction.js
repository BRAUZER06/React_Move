import { instance } from "../../config/axios";

export const checkedFilmsAndSeriesAction = (checked) => {
  return {
    type: "CHECKED_FILMS_SECT_FILMS_SERIES",
    payload: checked,
  };
};

export const fetchFilmsAndSeriesAction = (numberPagination) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILMS_SECT_FILMS_SERIES_LOADING" });
      const response = await instance.get(
        `/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPagination}`
      );
      console.log(numberPagination);
      dispatch({ type: "GET_FILMS_SECT_FILMS_SERIES_SUCCSES", payload: response.data.films });
    } catch (error) {
      dispatch({
        type: "GET_FILMS_SECT_FILMS_SERIES_ERROR",
        payload: "Не удалось получить фильмы",
      });
      console.log(error);
    }
  };
};
