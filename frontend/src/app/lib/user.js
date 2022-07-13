import axiosClient from "../apiClient";

export function getUserById(id) {
  return axiosClient.get(`/user/${id}`);
}

export function updateUserById(id, data) {
  return axiosClient.put(`/user/${id}`, data);
}
