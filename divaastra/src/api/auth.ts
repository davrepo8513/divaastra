import { RegisterPayload } from "@divaastra/types/auth/register.type";
import api from "./axiosInstance";
import { LoginPayload } from "@divaastra/types/auth/login.type";

export const Login = async (payload: LoginPayload) => {
  const response = await api.post("/auth/login", payload);
  const { token } = response.data;

  localStorage.setItem("token", token);
  return response.data;
};

export const Register = async (payload: RegisterPayload) => {
      const response = await api.post("/auth/register", payload);
      return response.data;
}

export const Logout = () => {
      localStorage.removeItem("token");
}