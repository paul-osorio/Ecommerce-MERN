import axiosClient from "../apiClient";

export function getProductCategories() {
  return axiosClient.get(`/product/category`);
}

export function createProduct(data) {
  return axiosClient.post(`/product`, data);
}

export function getAllProduct() {
  return axiosClient.get(`/product`);
}

export function getOneProduct(id) {
  return axiosClient.get(`/product/${id}`);
}
