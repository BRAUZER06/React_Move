import axios from "axios";
export const instance = axios.create({
  headers: {
    "X-API-KEY": "a1c914cf-84d4-40d4-a8e0-bd9bfedbf02b",
    "Content-Type": "application/json",
  },
});
