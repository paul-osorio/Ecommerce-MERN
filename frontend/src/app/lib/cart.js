import axiosClient from "../apiClient";

export function addToCart(data) {
  return axiosClient.get("/cart", {
    params: data,
  });
}

export function getOneCartItem(data) {
  return axiosClient.get("/cart/details", {
    params: data,
  });
}

export function getMyCart() {
  return axiosClient.get("/cart/items");
}
