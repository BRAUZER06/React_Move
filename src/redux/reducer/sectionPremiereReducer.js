//ааа старшно
const CHECKED_FILMS_SECT_PREMIER = "CHECKED_FILMS_SECT_PREMIER";
const GET_FILMS_SECT_PREMIER_ERROR = "GET_FILMS_SECT_PREMIER_ERROR";
const GET_FILMS_SECT_PREMIER_LOADING = "GET_FILMS_SECT_PREMIER_LOADING";
const GET_FILMS_SECT_PREMIER_SUCCSES = "GET_FILMS_SECT_PREMIER_SUCCSES";

const initState = {
  checkedFilms: false,
  error: null,
  loading: false,
  films: [],
};

export const sectionPremiereReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECKED_FILMS_SECT_PREMIER:
      return { ...state, checkedFilms: action.payload };

    case GET_FILMS_SECT_PREMIER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        films: [...state.films],
      };

    case GET_FILMS_SECT_PREMIER_LOADING:
      return {
        ...state,
        error: null,
        loading: action.payload,
       //тут сделал пустой массив чтобы было видно загрузку фильмов
        films: [],
      };

    case GET_FILMS_SECT_PREMIER_SUCCSES:
      return { ...state, error: null, loading: false, films: action.payload };

    default:
      return state;
  }
};
