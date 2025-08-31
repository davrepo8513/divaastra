import { LoginPayload } from "@shieldspire/types/auth/login.type";
import { RegisterPayload } from "@shieldspire/types/auth/register.type";

export interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  loginUser: (payload: LoginPayload) => Promise<void>;
  logoutUser: () => void;
  registerUser: (payload: RegisterPayload) => Promise<void>;
}
