import axiosClient from "../apiClient";

export function getUserDetails() {
  return axiosClient.get(`/user`);
}

export function updateUserById(data) {
  return axiosClient.patch(`/user`, data);
}
