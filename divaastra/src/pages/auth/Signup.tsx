import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white border border-gray-300 p-6 rounded-md shadow-md max-w-sm w-full">
        <h1 className="text-3xl font-logo text-center mb-6">Divaastra</h1>
        <p className="text-gray-500 text-center text-sm mb-4">
          Sign up to see photos and videos from your friends.
        </p>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Mobile Number or Email"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center text-gray-500 mt-4">
          By signing up, you agree to our{" "}
          <span className="font-medium">Terms</span> &{" "}
          <span className="font-medium">Privacy Policy</span>.
        </p>
      </div>
      <div className="bg-white border border-gray-300 p-4 rounded-md shadow-md max-w-sm w-full text-center mt-4">
        <p className="text-sm">
          Have an account?{" "}
          <a href="/login" className="text-indigo-600 font-semibold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
