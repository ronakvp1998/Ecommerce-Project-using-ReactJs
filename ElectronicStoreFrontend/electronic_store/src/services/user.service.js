import { publicAxios } from "./axios.service";

// user related API calls

// register new user
export const registerUser = (userData) => {
  return publicAxios.post("/users", userData).then((response) => response.data);
};
