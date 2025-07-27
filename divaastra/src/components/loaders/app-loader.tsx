import React from "react";
import { ScatterBoxLoader } from "react-awesome-loaders";
import { theme } from "@divaastra/utils/theme";

interface AppLoaderProps {
  message?: string; // Optional message
}

const AppLoader: React.FC<AppLoaderProps> = ({ message }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm z-50">
      {/* loader */}
      <ScatterBoxLoader
        primaryColor={"#6366F1"}
        background={theme.colors["background"]}
      />

      {/* Show message only if provided */}
      {message && <p className="mt-4 text-gray-700 font-medium">{message}</p>}
    </div>
  );
};

export default AppLoader;

{
  /* <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */
}
