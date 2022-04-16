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


export const checkedPageFilmetsAction = (check) => {
  return { type: "CHECK_PAGE_FILMETS", payload: check };
};


export const checkedPageHomeAction = (check) => {
  return { type: "CHECK_PAGE_HOME", payload: check };
};

export const checkedPageFilmSeriesInputAction = (check) => {
  return { type: "CHECK_PAGE_FILMS_AND_SERIES", payload: check };
};

export const checkedPageTrailerAction = (check) => {
  return { type: "CHECK_PAGE_TRAILER", payload: check };
};

export const checkedPagePremiereAction = (check) => {
  return { type: "CHECK_PAGE_PREMIERE", payload: check };
};

export const checkedPageProfileAction = (check) => {
  return { type: "CHECK_PAGE_PROFILE", payload: check };
};
