import axiosClient from "../apiClient";

export function getProductCategories() {
  return axiosClient.get(`/product/category`);
}
