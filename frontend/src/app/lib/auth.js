import axiosClient from "../apiClient";

export default function auth() {
  return axiosClient.get("/user-auth", { withCredentials: true });
}
export function logoutUser() {
  return axiosClient.post("/user-auth/logout");
}

export function loginUser(user) {
  return axiosClient.post("/user-auth/login/local", user);
}

export function registerUser(user) {
  return axiosClient.post("/user-auth/register/local", user);
}

export function checkUserExists(data) {
  return axiosClient.post(`/user-auth/check-email`, data);
}

export function resendVerificationLink(email) {
  return axiosClient.post(`/user-auth/resend-verification-link`, { email });
}
