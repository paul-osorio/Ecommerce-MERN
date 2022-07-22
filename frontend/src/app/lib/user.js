import axiosClient from "../apiClient";

export function getUserDetails() {
  return axiosClient.get(`/user`);
}

export function updateUser(data) {
  return axiosClient.patch(`/user`, data);
}
