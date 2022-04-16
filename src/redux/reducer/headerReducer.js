import {
  CHECK_INPUT_HEADER,
  CHECK_FILMS_HEADER,
  INPUT_VALUE_HEADER,
  GET_FILMS_HEADER_INPUT_ERROR,
  GET_FILMS_HEADER_INPUT_LOADING,
  GET_FILMS_HEADER_INPUT_SUCCSES,
} from "../actionTypes";

const initState = {
  inputValue: "",
  films: [],
  checkedFilms: false,
  checkInput: false,
  error: null,
  loading: false,
};

export const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case INPUT_VALUE_HEADER:
      return { ...state, inputValue: action.payload };

    case CHECK_INPUT_HEADER:
      return { ...state, checkInput: action.payload };

    case CHECK_FILMS_HEADER:
      return {
        ...state,
        loading: false,
        error: null,
        films: [...state.films],
        checkedFilms: action.payload,
      };

    case GET_FILMS_HEADER_INPUT_SUCCSES:
      return { ...state, loading: false, error: null, films: action.payload };

    case GET_FILMS_HEADER_INPUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        //оставил стейт чтобы при ошибке поиска, пользователь не видел ошибку
        films: [...state.films],
      };

    case GET_FILMS_HEADER_INPUT_LOADING:
      //тут сделал пустой массив чтобы было видно загрузку фильмов
      return { ...state, loading: true, error: null, films: [] };

    default:
      return state;
  }
};
