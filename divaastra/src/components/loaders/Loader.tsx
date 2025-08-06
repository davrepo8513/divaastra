import React from "react";

const Loader: React.FC<{ fullPage?: boolean }> = ({ fullPage }) => (
  <div className={`${fullPage ? "fixed inset-0 flex" : "inline-flex"} justify-center items-center`}>
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default Loader;
