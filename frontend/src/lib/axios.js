import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/" : "https://mern-thinkboard-server.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
