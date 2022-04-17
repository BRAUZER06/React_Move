import axios from "axios";

//Обычный запрос
export const instance = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL: "https://kinopoiskapiunofficial.tech/api",
});

//запрос для 'Фильмы и Сериалы'
export const instance_FilmsAndSeries = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&",
});
//запрос для 'Трейлер'
export const instance_Trailer = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&",
});
// запрос для 'КиноПремьеры'
export const instance_Premiere = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page",
});

//запрос для получения допольнительной информации для 'ModalWindow / Модальное'
export const instance_modalId = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2/films",
});
