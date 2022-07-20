import axiosClient from "../apiClient";

export const createShop = (data) => {
  return axiosClient.post("/shop", data);
};
export const getShop = () => {
  return axiosClient.get("/shop");
};
