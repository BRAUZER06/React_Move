import { instance } from "../../config/axios";

export const headerInputValue = (inputValue) => {
  return { type: "INPUT_VALUE", payload: inputValue };
};

export const headerCheckedFilms = (check) => {
  return { type: "CHECK_FILMS", payload: check };
};
export const headerCheckedInput = (check) => {
  return { type: "CHECK_INPUT", payload: check };
};

export const fetchFilmsInputTextAction = (inputValue) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILMS_INPUT_LOADING" });
      const response = await instance.get(
        `/films/search-by-keyword?keyword=${inputValue}`
      );
      dispatch({
        type: "GET_FILMS_INPUT_SUCCSES",
        payload: response.data.films,
      });
    } catch (error) {
      dispatch({
        type: "GET_FILMS_INPUT_ERROR",
        payload: "Ошибка при получении данных",
      });
      console.log(error);
    }
  };
};
