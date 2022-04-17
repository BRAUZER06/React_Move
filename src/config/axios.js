import axios from "axios";

//v2.2
export const instance = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2",
});

//v2.1
export const instanceV2_1 = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.1",
});

export const instance_FilmsAndSeries = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&",
});

export const instance_Trailer = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&",
});
export const instance_Premiere = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
  baseURL:
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page",
});
