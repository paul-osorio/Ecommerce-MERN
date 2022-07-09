import axiosClient from "../apiClient";

export function loginUser(user) {
  return axiosClient.post("/local/loginUser", user);
}

export function registerUser(user) {
  return axiosClient.post("/users/local/registerUser", user);
}

export function getUserById(id) {
  return axiosClient.get(`/users/getUser/${id}`);
}

export function updateUserById(id, data) {
  return axiosClient.put(`/users/updateUser/${id}`, data);
}
