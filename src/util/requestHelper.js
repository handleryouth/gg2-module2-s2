import axios from "axios";
import { BASE_URL } from "./spotify";

export const requestHelper = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
