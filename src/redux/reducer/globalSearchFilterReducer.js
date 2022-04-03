const initState = {
  films: [],

};

export const globalSearchReducer = (state = initState, action) => {
  switch (action.type) {
    case "GLOBAL_SEARCH_TEXT":
      return { ...state, fetchValueInput: action.payload }
    

    case "GLOBAL_SEARCH_FILMS":
      return action.payload

    default:
      return state;
  }
};
