// components/Alert.tsx
import React from "react";
import clsx from "clsx";

interface AlertProps {
  type?: "success" | "error" | "info" | "warning";
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type = "info", children }) => {
  const colors = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return <div className={clsx("p-3 rounded", colors[type])}>{children}</div>;
};

export default Alert;
