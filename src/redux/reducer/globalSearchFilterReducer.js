import {
  ADD_FILTER_TEXT_GLOBAL,
  CHECK_MENU_GLOBAL,
  CHECK_FILMS_GLOBAL,
  GET_FILMS_GLOBAL_ERROR,
  GET_FILMS_GLOBAL_LOADING,
  GET_FILMS_GLOBAL_SUCCSES,
} from "../actionTypes";

const initState = {
  films: [],
  error: null,
  loading: false,
  checkedFilms: false,
  checkedMenu: false,
  params: {
    sort: "",
    tipe: "",
    minRating: "",
    maxRating: "",
    minYear: "",
    maxYear: "",
    keyword: "",
  },
};

export const globalSearcFilmshReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_FILTER_TEXT_GLOBAL:
      return { ...state, params: action.payload };

    case GET_FILMS_GLOBAL_LOADING:
      return { ...state, loading: true, error: null, films: [] };

    case GET_FILMS_GLOBAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        films: [...state.films],
      };

    case GET_FILMS_GLOBAL_SUCCSES:
      return { ...state, loading: false, error: null, films: action.payload };

    case CHECK_FILMS_GLOBAL:
      return {
        ...state,
        checkedFilms: action.payload,
      };

    case CHECK_MENU_GLOBAL:
      return { ...state, checkedMenu: action.payload };

    default:
      return state;
  }
};
