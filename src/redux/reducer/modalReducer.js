const ID_MODAL = "ID_MODAL";
const TOGGLE_MODAL = "TOGGLE_MODAL";

const initState = {
  idModal: '',
  toggleModal: true,
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

    default:
      return state;
  }
};
