import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://mern-thinkboard-ckp6.vercel.app/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
