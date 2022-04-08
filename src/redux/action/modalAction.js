export const idModalAction = (idModal) => {
  return {
    type: "ID_MODAL",
    payload: idModal,
  };
};

export const toggleModalAction = (boolean) => {
  return {
    type: "TOGGLE_MODAL",
    payload: boolean,
  };
};
export const fetchFilAction = (arr) => {
  return {
    type: "FETCH_FILM_MODAL",
    payload: arr,
  };
};
