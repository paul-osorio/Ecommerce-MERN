import axiosClient from "../apiClient";

export function getUserById(id) {
  return axiosClient.get(`/users/getUser/${id}`);
}

export function updateUserById(id, data) {
  return axiosClient.put(`/users/updateUser/${id}`, data);
}
