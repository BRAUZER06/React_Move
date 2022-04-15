import { instanceV2_1 } from "../../config/axios";

export const headerInputValueAction = (inputValue) => {
  return { type: "INPUT_VALUE", payload: inputValue };
};

export const headerCheckedFilmsAction = (check) => {
  return { type: "CHECK_FILMS", payload: check };
};
export const headerCheckedInputAction = (check) => {
  return { type: "CHECK_INPUT", payload: check };
};

export const fetchFilmsInputTextAction = (inputValue) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILMS_INPUT_LOADING" });
      const response = await instanceV2_1.get(
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
