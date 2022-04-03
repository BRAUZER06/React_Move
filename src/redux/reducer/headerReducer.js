const initState = {
  inputValue: "",
};

export const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case "HEADER_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};
