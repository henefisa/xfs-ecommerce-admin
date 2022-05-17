import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:7998",
  headers: {
    "Content-Type": "application/json",
  },
});

export const configAuthorization = () => {
  instance.interceptors.request.use((config: any) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};
configAuthorization();

instance.interceptors.response.use(
  (res: any) => res,
  (err: AxiosError) => {
    if (err?.response?.status === 401 && err?.config?.method !== "get") {
      console.error("ERROR");
    }
    return Promise.reject(err);
  }
);
