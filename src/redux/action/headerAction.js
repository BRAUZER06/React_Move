import { instanceV2_1 } from "../../config/axios";
import {
  CHECK_INPUT_HEADER,
  CHECK_FILMS_HEADER,
  INPUT_VALUE_HEADER,
  GET_FILMS_HEADER_INPUT_ERROR,
  GET_FILMS_HEADER_INPUT_LOADING,
  GET_FILMS_HEADER_INPUT_SUCCSES,
} from "../actionTypes";

export const headerInputValueAction = (inputValue) => {
  return { type: INPUT_VALUE_HEADER, payload: inputValue };
};
export const headerCheckedFilmsAction = (check) => {
  return { type: CHECK_FILMS_HEADER, payload: check };
};
export const headerCheckedInputAction = (check) => {
  return { type: CHECK_INPUT_HEADER, payload: check };
};
//Мои глаза
export const fetchSearchInputFilmsErrorAction = (error) => {
  return { type: GET_FILMS_HEADER_INPUT_ERROR, payload: error };
};
export const fetchSearchInputFilmsLoadingAction = (loading) => {
  return { type: GET_FILMS_HEADER_INPUT_LOADING };
};
export const fetchSearchInputFilmsSuccsesAction = (arr) => {
  return { type: GET_FILMS_HEADER_INPUT_SUCCSES, payload: arr };
};

export const fetchFilmsInputTextAction = (inputValue) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSearchInputFilmsLoadingAction());
      await instanceV2_1
        .get(`/films/search-by-keyword?keyword=${inputValue}`)
        .then((res) =>
          dispatch(fetchSearchInputFilmsSuccsesAction(res.data.films))
        );
    } catch (error) {
      dispatch(fetchSearchInputFilmsErrorAction("Ошибка при получении данных"));
      console.log(error);
    }
  };
};
