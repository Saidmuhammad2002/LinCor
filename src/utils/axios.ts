import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  const authorization = token ? token : "";
  config.headers.authorization = `Bearer ${authorization}`;
  return config;
});

export default axios;
