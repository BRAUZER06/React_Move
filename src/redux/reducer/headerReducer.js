import {
  CHECK_INPUT_HEADER,
  CHECK_FILMS_HEADER,
  INPUT_VALUE_HEADER,
} from "../actionTypes";

const initState = {
  inputValue: "",
  checkedFilms: false,
  checkInput: false,
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
        checkedFilms: action.payload,
      };

    default:
      return state;
  }
};
