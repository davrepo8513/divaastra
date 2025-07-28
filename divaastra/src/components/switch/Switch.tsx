import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => (
  <div
    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
      checked ? "bg-green-500" : "bg-gray-300"
    }`}
    onClick={onChange}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full shadow transform ${
        checked ? "translate-x-6" : ""
      }`}
    ></div>
  </div>
);

export default Switch;
