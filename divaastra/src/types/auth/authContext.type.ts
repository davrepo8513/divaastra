import { LoginPayload } from "@divaastra/types/auth/login.type";
import { RegisterPayload } from "@divaastra/types/auth/register.type";

export interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  loginUser: (payload: LoginPayload) => Promise<void>;
  logoutUser: () => void;
  registerUser: (payload: RegisterPayload) => Promise<void>;
}
