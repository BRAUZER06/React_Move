import {
  CHECKED_FILMS,
  GET_FILMS_ERROR,
  GET_FILMS_SUCCSES,
  GET_FILMS_LOADING,
} from "../actionTypes";

const initState = {
  checkedFilms: false,
  error: null,
  loading: false,
  films: [],
};

export const sectionFilmsReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECKED_FILMS:
      return { ...state, checkedFilms: action.payload };

    case GET_FILMS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        films: [],
      };

    case GET_FILMS_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
        //тут сделал пустой массив чтобы было видно загрузку новых фильмов
        //[...state.films]
        films: [],
      };

    case GET_FILMS_SUCCSES:
      return { ...state, error: null, loading: false, films: action.payload };

    default:
      return state;
  }
};
