import axiosClient from "../apiClient";

export function getUserDetails() {
  return axiosClient.get(`/user`);
}

export function updateUserById(id, data) {
  return axiosClient.put(`/user/${id}`, data);
}
