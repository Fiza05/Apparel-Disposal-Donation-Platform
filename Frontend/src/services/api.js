import axios from "axios";

const API_URL = "http://localhost:8080/api";

const getToken = () => {
  return localStorage.getItem("token");
};

export const submitApparel = (apparel) => {
  return axios.post(`${API_URL}/apparel`, apparel, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const getApparelHistory = () => {
  return axios.get(`${API_URL}/apparel`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
