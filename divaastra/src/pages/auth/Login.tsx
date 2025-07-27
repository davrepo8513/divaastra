import React, { useState } from "react";
import "./Login.module.scss"

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 border border-gray-200 rounded-lg w-full max-w-sm shadow-md">
        <h1 className="font-playwrite divaastra__login-header text-3xl text-center mb-6">
          Divaastra
        </h1>

        <input
          type="text"
          placeholder="Phone number, username, or email"
          className="w-full p-2 mb-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />

        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-indigo-500 font-medium"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700">
          Log in
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center text-blue-600 font-medium mb-3 hover:underline">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
            alt="Facebook"
            className="w-5 h-5 mr-2"
          />
          Log in with Facebook
        </button>

        <div className="text-center">
          <a href="#" className="text-sm text-indigo-500 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-sm">
        Don’t have an account?{" "}
        <a
          href="/signup"
          className="text-indigo-500 font-medium hover:underline"
        >
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;
