import React from "react";

interface AppLoaderProps {
  message?: string;
}

const AppLoader: React.FC<AppLoaderProps> = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Optional Message */}
      <p className="mt-4 text-gray-700 font-medium">{message}</p>
    </div>
  );
};

export default AppLoader;
