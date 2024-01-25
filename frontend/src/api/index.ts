import axios from "axios";

export const publicInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export const privateAxios = axios.create({
  baseURL: "http://localhost:4000",
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
