import React, { useState } from "react";

export interface DropdownOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value: string | string[]; // ✅ Can be single or multiple
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  className?: string;
  showIcons?: boolean;
  disabled?: boolean;
  multiple?: boolean; // ✅ Flag for multi-select
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
  multiple = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (val: string) => {
    if (multiple) {
      const selectedArray = Array.isArray(value) ? [...value] : [];
      if (selectedArray.includes(val)) {
        onChange(selectedArray.filter((v) => v !== val));
      } else {
        onChange([...selectedArray, val]);
      }
    } else {
      onChange(val);
      setIsOpen(false);
    }
  };

  const isSelected = (val: string) =>
    multiple ? Array.isArray(value) && value.includes(val) : value === val;

  const selectedOptions = multiple
    ? options.filter((o) => Array.isArray(value) && value.includes(o.value))
    : options.find((o) => o.value === value);

  return (
    <div className="flex flex-col gap-1 w-full relative">
      {label && (
        <label className={`text-sm font-medium ${error ? "text-red-500" : "text-gray-700"}`}>
          {label}
        </label>
      )}

      <div
        className={`border rounded-lg px-3 py-2 bg-white flex flex-wrap gap-1 items-center cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {multiple && Array.isArray(selectedOptions) && selectedOptions.length > 0 ? (
          selectedOptions.map((opt) => (
            <div
              key={opt.value}
              className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm"
            >
              {showIcons && opt.icon && <span>{opt.icon}</span>}
              {opt.label}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(opt.value);
                }}
                className="ml-1 text-xs text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))
        ) : !multiple && selectedOptions && !Array.isArray(selectedOptions) ? (
          <div className="flex items-center gap-2">
            {showIcons && selectedOptions.icon && <span>{selectedOptions.icon}</span>}
            <span>{selectedOptions.label}</span>
          </div>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}

        <span className="ml-auto text-gray-500">▼</span>
      </div>

      {isOpen && !disabled && (
        <div className="absolute bg-white border rounded-md mt-1 w-full z-50 shadow max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onMouseDown={() => handleSelect(option.value)}
              className={`px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 ${
                isSelected(option.value) ? "bg-gray-200" : ""
              }`}
            >
              {showIcons && option.icon && <span>{option.icon}</span>}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}

      {(helperText || error) && (
        <p className={`text-xs mt-1 ${error ? "text-red-500" : "text-gray-500"}`}>
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

// const skillOptions: DropdownOption[] = [
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

// const App: React.FC = () => {
//   const [singleValue, setSingleValue] = useState("");
//   const [multiValue, setMultiValue] = useState<string[]>([]);

//   return (
//     <div className="p-6 max-w-md mx-auto flex flex-col gap-6">
//       {/* Single Select */}
//       <Dropdown
//         label="Single Select Dropdown"
//         options={skillOptions}
//         value={singleValue}
//         onChange={(val) => setSingleValue(val as string)}
//         placeholder="Select one"
//         showIcons={true}
//         multiple={false} // ✅ Single select
//       />

//       {/* Multi Select */}
//       <Dropdown
//         label="Multi Select Dropdown"
//         options={skillOptions}
//         value={multiValue}
//         onChange={(val) => setMultiValue(val as string[])}
//         placeholder="Select multiple"
//         showIcons={true}
//         multiple={true} // ✅ Multi select
//         helperText="You can select multiple values"
//       />
//     </div>
//   );
// };

// export default App;
