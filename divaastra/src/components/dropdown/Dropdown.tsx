import React, { useState } from "react";

export interface DropdownOption {
  label: string;
  value: string;
  icon?: React.ReactNode; // ✅ Optional icon
}

export interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  className?: string;
  showIcons?: boolean; // ✅ Toggle icons
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select...",
  error,
  helperText,
  className = "",
  showIcons = true,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div className="flex flex-col gap-1 w-full relative">
      {label && (
        <label
          className={`text-sm font-medium ${
            error ? "text-red-500" : "text-gray-700"
          }`}
        >
          {label}
        </label>
      )}

      <div
        className={`border rounded-lg px-3 py-2 bg-white flex justify-between items-center cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {showIcons && selectedOption?.icon && (
            <span>{selectedOption.icon}</span>
          )}
          <span className={value ? "text-gray-900" : "text-gray-400"}>
            {selectedOption?.label || placeholder}
          </span>
        </div>
        <span className="text-gray-500">▼</span>
      </div>

      {isOpen && !disabled && (
        <div className="absolute bg-white border rounded-md mt-1 w-full z-50 shadow">
          {options.map((option) => (
            <div
              key={option.value}
              onMouseDown={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
            >
              {showIcons && option.icon && <span>{option.icon}</span>}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}

      {(helperText || error) && (
        <p
          className={`text-xs mt-1 ${error ? "text-red-500" : "text-gray-500"}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Dropdown;



// import React, { useState } from "react";
// import Dropdown, { DropdownOption } from "./components/common/Dropdown";
// import { FaReact, FaPython, FaNode } from "react-icons/fa";

// const optionsWithIcons: DropdownOption[] = [
//   {
//     label: "React",
//     value: "react",
//     icon: <FaReact className="text-blue-500" />,
//   },
//   {
//     label: "Node.js",
//     value: "node",
//     icon: <FaNode className="text-green-500" />,
//   },
//   {
//     label: "Python",
//     value: "python",
//     icon: <FaPython className="text-yellow-500" />,
//   },
// ];

// const optionsWithoutIcons: DropdownOption[] = [
//   { label: "Option A", value: "a" },
//   { label: "Option B", value: "b" },
//   { label: "Option C", value: "c" },
// ];

// const App: React.FC = () => {
//   const [selectedWithIcon, setSelectedWithIcon] = useState("");
//   const [selectedWithoutIcon, setSelectedWithoutIcon] = useState("");

//   return (
//     <div className="p-6 max-w-md mx-auto flex flex-col gap-6">
//       {/* Dropdown with Icons */}
//       <Dropdown
//         label="Select a Skill (with icons)"
//         options={optionsWithIcons}
//         value={selectedWithIcon}
//         onChange={setSelectedWithIcon}
//         placeholder="Choose skill"
//         helperText="Icons included"
//         showIcons={true}
//       />

//       {/* Dropdown without Icons */}
//       <Dropdown
//         label="Select an Option (no icons)"
//         options={optionsWithoutIcons}
//         value={selectedWithoutIcon}
//         onChange={setSelectedWithoutIcon}
//         placeholder="Choose option"
//         showIcons={false}
//         error={!selectedWithoutIcon ? "Please select a value" : ""}
//       />
//     </div>
//   );
// };

// export default App;
