import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.100.4:5000/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
  timeout: 10000,
  withCredentials: true,
});

export default axiosClient;
