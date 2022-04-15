import { instance } from "../../config/axios";

export const globalCheckedFilmsAction = (checked) => {
  return { type: "CHECK_FILMS", payload: checked };
};
export const globalCheckedMenuAction = (checked) => {
  return { type: "CHECK_MENU", payload: checked };
};

export const fetchGlobalFilmsAction = (text) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILMS_LOADING", payload: true });
      const response = await instance.get(
        `/films?${text.sort.length && `order=${text.sort}`}${
          text.tipe.length && `&type=${text.tipe}`
        }${text.minRating.length && `&ratingFrom=${text.minRating}`}${
          text.maxRating.length && `&ratingTo=${text.maxRating}`
        }${text.minYear.length && `&yearFrom=${text.minYear}`}${
          text.maxYear.length && `&yearTo=${text.maxYear}`
        }${text.keyword.length && `&keyword=${text.keyword}`}&page=1`
      );
      dispatch({ type: "GET_FILMS_SUCCSES", payload: response.data.items });
      globalCheckedFilmsAction(true);
    } catch (error) {
      dispatch({
        type: "GET_FILMS_ERROR",
        payload: "Ошибка при получении данных",
      });
      console.log(error);
    }
  };
};
