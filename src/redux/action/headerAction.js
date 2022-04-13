export const headerInputValue = (inputValue) => {
  return { type: "HEADER_INPUT_VALUE", payload: inputValue };
};

export const getFilmsInputEnter = (films) => {
  return { type: "GET_FILMS_INPUT_ENTER", payload: films };
};
//знаю что переменные не ахти, но ничего в голову не лезит )
export const handleCheckedGetFilms = (check) => {
  return { type: "CHECK_INPUT_GET_FILMS", payload: check };
};

