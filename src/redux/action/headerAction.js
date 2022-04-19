import {
  CHECK_INPUT_HEADER,
  CHECK_FILMS_HEADER,
  INPUT_VALUE_HEADER,
} from "../actionTypes";

export const headerInputValueAction = (inputValue) => {
  return { type: INPUT_VALUE_HEADER, payload: inputValue };
};
export const headerCheckedFilmsAction = (check) => {
  return { type: CHECK_FILMS_HEADER, payload: check };
};
export const headerCheckedInputAction = (check) => {
  return { type: CHECK_INPUT_HEADER, payload: check };
};
