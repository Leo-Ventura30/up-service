import axios from "axios";
import { getToken } from "./auth";
const dotenv = require("dotenv");
dotenv.config();
const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
