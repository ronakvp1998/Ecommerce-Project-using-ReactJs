import axios from "axios";
import { BASE_URL } from "./helper.service.js";

// to make public axios instance, call made for public api
export const publicAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// to make private axios instance, call made for private api
export const privateAxios = axios.create({
  baseURL: BASE_URL,
});
