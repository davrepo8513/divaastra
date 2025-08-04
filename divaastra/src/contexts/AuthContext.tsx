import { Login, Logout, Register } from "@divaastra/api/auth";
import { AuthContextType } from "@divaastra/types/auth/authContext.type";
import { LoginPayload } from "@divaastra/types/auth/login.type";
import { RegisterPayload } from "@divaastra/types/auth/register.type";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const loginUser = async (payload: LoginPayload) => {
    const response = await Login(payload);
    setToken(response.token);
  };

  const registerUser = async (payload: RegisterPayload) => {
    await Register(payload);
  };

  const logoutUser = () => {
    Logout();
    setToken(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
