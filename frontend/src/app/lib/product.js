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

export function deleteProduct(id) {
  return axiosClient.delete(`/product/${id}`);
}

export function productPagination(itemsPerPage, pageNum) {
  return axiosClient.get(`/product/page/${itemsPerPage}/${pageNum}`);
}

export function getAllProductPage(itemsPerPage, pageNum) {
  return axiosClient.get(`/product/${itemsPerPage}/${pageNum}`);
}
