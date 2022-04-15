import { instance } from "../../config/axios";

export const idFilmAction = (idFilm) => {
  return {
    type: "ID_MODAL",
    payload: idFilm,
  };
};

export const checkedModalAction = (checked) => {
  return {
    type: "TOGGLE_MODAL",
    payload: checked,
  };
};

export const fetchFilmAction = (idFilm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILMS_MODAL_LOADING" });

      const response = await instance.get(`films/${idFilm}`);
      dispatch({ type: "GET_FILM_MODAL_SUCCSES", payload: response.data });
    } catch (error) {
      dispatch({
        type: "GET_FILMS_MODAL_ERROR",
        payload: "Ошибка при получении данных ",
      });

      console.log(error);
    }
  };
};
