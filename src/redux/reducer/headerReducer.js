const initState = {
  inputValue: "",
  films: [],
  checked: false,
};

export const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case "HEADER_INPUT_VALUE":
      return { ...state, inputValue: action.payload };

    case "GET_FILMS_INPUT_ENTER":
      return { ...state, films: action.payload };

    case "CHECK_INPUT_GET_FILMS":
      return { ...state, checked: action.payload };
    default:
      return state;
  }
};
