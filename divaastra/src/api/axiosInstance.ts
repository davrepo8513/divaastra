import axios from "axios";

const headers = {
  "Content-Type": "application-json",
};

//create axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: headers,
});

//attach token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//handle global error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default api;
