const initState = {
  films: [],
};

export const globalSearchReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_FILMS":
      return { ...state, films: action.payload };

    default:
      return state;
  }
};
