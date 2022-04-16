const ID_FILM = "ID_MODAL";
const CHECKED_MODAL = "TOGGLE_MODAL";
const GET_FILMS_MODAL_ERROR = "GET_FILMS_MODAL_ERROR";
const GET_FILMS_MODAL_SUCCSES = "GET_FILMS_MODAL_SUCCSES";
const GET_FILMS_MODAL_LOADING = "GET_FILMS_MODAL_LOADING";


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
        infoFilm: { ...state, infoFilm: state.infoFilm },
      };

    default:
      return state;
  }
};
