const GET_FILMS_LOADING = "GET_FILMS_LOADING";
const GET_FILMS_ERROR = "GET_FILMS_ERROR";
const GET_FILMS_SUCCSES = "GET_FILMS_SUCCSES";
const CHECK_FILMS = "CHECK_FILMS";

const initState = {
  films: [],
  error: null,
  loading: false,
  checked: false,
};

export const globalSearcFilmshReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_FILMS_LOADING:
      return { ...state, loading: true, error: null, films: [] };

    case GET_FILMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        films: [],
      };

    case GET_FILMS_SUCCSES:
      return { ...state, loading: false, error: null, films: action.payload };

    case CHECK_FILMS:
      return { ...state, checked: action.payload, films: [...state.films] };

    default:
      return state;
  }
};
