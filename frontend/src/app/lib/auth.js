import axiosClient from "../apiClient";

export default function auth() {
  return axiosClient.get("/users/isAuth", { withCredentials: true });
}
