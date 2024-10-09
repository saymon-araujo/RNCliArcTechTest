import axios from "axios";

export const developmentURL = "http://localhost:3333";

const api = axios.create({
  baseURL: developmentURL,
});

export default api;
