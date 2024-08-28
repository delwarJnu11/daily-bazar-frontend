import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Ensure withCredentials is true for every request
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (Optional)
api.interceptors.response.use(
  (response) => {
    // Handle the response data here
    return response;
  },
  (error) => {
    // Handle errors globally here
    if (error.response && error.response.status === 401) {
      toast.error(error.message);
    }
    return Promise.reject(error);
  }
);
