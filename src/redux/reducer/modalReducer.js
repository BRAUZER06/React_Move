import {
  ID_FILM,
  CHECKED_MODAL,
  GET_FILMS_MODAL_ERROR,
  GET_FILMS_MODAL_SUCCSES,
  GET_FILMS_MODAL_LOADING,
} from "../actionTypes";

const initState = {
  idFilm: "",
  infoFilm: {},
  error: null,
  loading: false,
  checked: false,
};

export const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case ID_FILM:
      return {
        ...state,
        idFilm: action.payload,
      };

    case CHECKED_MODAL:
      return {
        ...state,
        checked: action.payload,
      };

    case GET_FILMS_MODAL_SUCCSES:
      return {
        ...state,
        loading: false,
        error: null,
        infoFilm: action.payload,
      };

    case GET_FILMS_MODAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,

        infoFilm: { ...state, infoFilm: state.infoFilm },
      };

    case GET_FILMS_MODAL_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        //тут сделал пустой объект  чтобы было видно загрузку фильмов
        infoFilm: {},
      };

    default:
      return state;
  }
};
