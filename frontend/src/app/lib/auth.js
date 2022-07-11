import axiosClient from "../apiClient";

export default function auth() {
  return axiosClient.get("/users/isAuth", { withCredentials: true });
}
export function logoutUser() {
  return axiosClient.post("/users/logout");
}

export function loginUser(user) {
  return axiosClient.post("/users/local/loginUser", user);
}

export function registerUser(user) {
  return axiosClient.post("/users/local/registerUser", user);
}

export function checkUserExists(data) {
  return axiosClient.post(`/users/checkEmail`, data);
}
