import axios from "axios";
export const instance = axios.create({
  headers: {
    "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86",
    "Content-Type": "application/json",
  },
});
