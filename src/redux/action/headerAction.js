export const headerInputValue = (inputValue) => {
  return { type: "HEADER_INPUT_VALUE", payload: inputValue };
};

export const getFilmsInputEnter = (films) => {
  return { type: "GET_FILMS_INPUT_ENTER", payload: films };
};
