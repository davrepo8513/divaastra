import { LoginPayload } from "./login.type";
import { RegisterPayload } from "./register.type";

export interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  loginUser: (payload: LoginPayload) => Promise<void>;
  logoutUser: () => void;
  registerUser: (payload: RegisterPayload) => Promise<void>;
}
