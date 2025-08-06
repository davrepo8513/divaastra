import Input from "@divaastra/components/input/Input";
import { useAuth } from "@divaastra/contexts/AuthContext";
import { LoginPayload } from "@divaastra/types/auth/login.type";
import React, { useState } from "react";
import Style from "./Login.module.scss";

const Login: React.FC = () => {
  const { loginUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: LoginPayload = {
      email: email,
      password: password,
    };
    await loginUser(payload);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className={Style["davaastra__login-form"]}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-3"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-3"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
