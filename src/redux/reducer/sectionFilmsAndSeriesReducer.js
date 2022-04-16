const CHECKED_FILMS = "CHECKED_FILMS";
const GET_FILMS_ERROR = "GET_FILMS_ERROR";
const GET_FILMS_LOADING = "GET_FILMS_LOADING";
const GET_FILMS_SUCCSES = "GET_FILMS_SUCCSES";

const initState = {
  checkedFilms: false,
  error: null,
  loading: false,
  films: [],
};

export const sectionFilmsAndSeriesReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECKED_FILMS:
      return { ...state, checkedFilms: action.payload };

    case GET_FILMS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        films: [...state.films],
      };

    case GET_FILMS_LOADING:
      return {
        ...state,
        error: null,
        loading: action.payload,
        films: [...state.films],
      };

    case GET_FILMS_SUCCSES:
      return { ...state, error: null, loading: false, films: action.payload };

    default:
      return state;
  }
};
