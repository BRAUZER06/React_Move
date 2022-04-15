const ID_MODAL = "ID_MODAL";
const TOGGLE_MODAL = "TOGGLE_MODAL";
const FETCH_FILM_MODAL = "FETCH_FILM_MODAL";

const initState = {
  idModal: "",
  toggleModal: false,
  infoFilm: {},
};

export const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case ID_MODAL:
      return {
        ...state,
        idModal: action.payload,
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        toggleModal: action.payload,
      };

    case FETCH_FILM_MODAL:
      return {
        ...state,
        infoFilm: action.payload,
      };

    default:
      return state;
  }
};
