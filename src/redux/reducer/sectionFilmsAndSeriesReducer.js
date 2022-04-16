//Слишком сложно было придумать название 
const CHECKED_FILMS_SECT_FILMS_SERIES = "CHECKED_FILMS_SECT_FILMS_SERIES";
const GET_FILMS_SECT_FILMS_SERIES_ERROR = "GET_FILMS_SECT_FILMS_SERIES_ERROR";
const GET_FILMS_SECT_FILMS_SERIES_LOADING = "GET_FILMS_SECT_FILMS_SERIES_LOADING";
const GET_FILMS_SECT_FILMS_SERIES_SUCCSES = "GET_FILMS_SECT_FILMS_SERIES_SUCCSES";

const initState = {
  checkedFilms: false,
  error: null,
  loading: false,
  films: [],
};

export const sectionFilmsAndSeriesReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECKED_FILMS_SECT_FILMS_SERIES:
      return { ...state, checkedFilms: action.payload };

    case GET_FILMS_SECT_FILMS_SERIES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        films: [...state.films],
      };

    case GET_FILMS_SECT_FILMS_SERIES_LOADING:
      return {
        ...state,
        error: null,
        loading: action.payload,
        //тут сделал пустой массив чтобы было видно загрузку фильмов
        films: [],
      };

    case GET_FILMS_SECT_FILMS_SERIES_SUCCSES:
      return { ...state, error: null, loading: false, films: action.payload };

    default:
      return state;
  }
};
