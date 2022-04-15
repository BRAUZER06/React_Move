const INPUT_VALUE = "INPUT_VALUE";
const CHECK_INPUT = "CHECK_INPUT";
const CHECK_FILMS = "CHECK_FILMS";
const GET_FILMS_INPUT_ERROR = "GET_FILMS_INPUT_ERROR";
const GET_FILMS_INPUT_LOADING = "GET_FILMS_INPUT_LOADING";
const GET_FILMS_INPUT_SUCCSES = "GET_FILMS_INPUT_SUCCSES";

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
    case INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case CHECK_INPUT:
      return { ...state, checkInput: action.payload };

    case GET_FILMS_INPUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        films: [...state.films],
      };

    case GET_FILMS_INPUT_SUCCSES:
      return { ...state, loading: false, error: null, films: action.payload };

    case GET_FILMS_INPUT_LOADING:
      return { ...state, loading: true, error: null, films: [...state.films] };

    case CHECK_FILMS:
      return {
        ...state,
        loading: false,
        error: null,
        films: [...state.films],
        checkedFilms: action.payload,
      };

    default:
      return state;
  }
};
