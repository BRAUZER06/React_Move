const initState = {
  inputValue: "",
  films: [],
};

export const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case "HEADER_INPUT_VALUE":
      return { ...state, inputValue: action.payload };

    case "GET_FILMS_INPUT_ENTER":
      return { ...state, films: action.payload };
    default:
      return state;
  }
};
