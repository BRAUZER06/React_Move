const INPUT_VALUE = "INPUT_VALUE";
const CHECK_INPUT = "CHECK_INPUT";
const CHECK_FILMS = "CHECK_FILMS";
const GET_FILMS_INPUT_ERROR = "GET_FILMS_INPUT_ERROR";
const GET_FILMS_INPUT_LOADING = "GET_FILMS_INPUT_LOADING";
const GET_FILMS_INPUT_SUCCSES = "GET_FILMS_INPUT_SUCCSES";

const CHECK_PAGE_FILMETS = "CHECK_PAGE_FILMETS";
const CHECK_PAGE_HOME = "CHECK_PAGE_HOME";
const CHECK_PAGE_FILMS_AND_SERIES = "CHECK_PAGE_FILMS_AND_SERIES";
const CHECK_PAGE_TRAILER = "CHECK_PAGE_TRAILER";
const CHECK_PAGE_PREMIERE = "CHECK_PAGE_PREMIERE";
const CHECK_PAGE_PROFILE = "CHECK_PAGE_PROFILE";

const initState = {
  inputValue: "",
  films: [],
  checkedFilms: false,
  checkInput: false,
  error: null,
  loading: false,
  pageChecked: {
    home: false,
    filmsAndSeries: false,
    trailer: false,
    premiere: false,
    profile: false,
    filmets: false,
  },
};

export const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case CHECK_INPUT:
      return { ...state, checkInput: action.payload };

    case CHECK_FILMS:
      return {
        ...state,
        loading: false,
        error: null,
        films: [...state.films],
        checkedFilms: action.payload,
      };

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



      
    case CHECK_PAGE_FILMETS:
      return {
        ...state,
        pageChecked: {
          filmets: action.payload,
          home: false,
          filmsAndSeries: false,
          trailer: false,
          premiere: false,
          profile: false,
        },
      };

    case CHECK_PAGE_HOME:
      return {
        ...state,
        pageChecked: {
          filmets: false,
          home: action.payload,
          filmsAndSeries: false,
          trailer: false,
          premiere: false,
          profile: false,
        },
      };

    case CHECK_PAGE_FILMS_AND_SERIES:
      return {
        ...state,
        pageChecked: {
          filmets: false,
          home: false,
          filmsAndSeries: action.payload,
          trailer: false,
          premiere: false,
          profile: false,
        },
      };

    case CHECK_PAGE_TRAILER:
      return {
        ...state,
        pageChecked: {
          filmets: false,
          home: false,
          filmsAndSeries: false,
          trailer: action.payload,
          premiere: false,
          profile: false,
        },
      };

    case CHECK_PAGE_PREMIERE:
      return {
        ...state,
        pageChecked: {
          filmets: false,
          home: false,
          filmsAndSeries: false,
          trailer: false,
          premiere: action.payload,
          profile: false,
        },
      };

    case CHECK_PAGE_PROFILE:
      return {
        ...state,
        pageChecked: {
          filmets: false,
          home: false,
          filmsAndSeries: false,
          trailer: false,
          premiere: false,
          profile: action.payload,
        },
      };

    default:
      return state;
  }
};
